<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Increment\Messenger\Models\MessengerGroup;
use Increment\Messenger\Models\MessengerMember;
use Increment\Messenger\Models\MessengerMessage;
use Carbon\Carbon;
use App\Account;
use Illuminate\Support\Facades\DB;
class MessengerGroupController extends APIController
{
    function __construct(){
      $this->model = new MessengerGroup();
    }

    public function create(Request $request){
      $data = $request->all();

      $creator = intval($data['creator']);
      $memberData = intval($data['member']);
      $message = $data['message'];
      $this->model = new MessengerGroup();
      $insertData = array(
        'account_id'  => $creator,
        'title' => 'NONE'
      );
      $this->insertDB($insertData);
      $id = intval($this->response['data']);
      if($id > 0){
        $member = new MessengerMember();
        $member->messenger_group_id = $id;
        $member->account_id = $creator;
        $member->status = 'admin';
        $member->created_at = Carbon::now();
        $member->save();

        $messageModel = new MessengerMessage();
        $messageModel->messenger_group_id = $id;
        $messageModel->account_id = $creator;
        $messageModel->message = $message;
        $messageModel->created_at = Carbon::now();
        $messageModel->save();

        $member = new MessengerMember();
        $member->messenger_group_id = $id;
        $member->account_id = $memberData;
        $member->status = 'member';
        $member->created_at = Carbon::now();
        $member->save();

        $responseData = array(
          'id'  => $id,
          'account_id'  => $memberData,
          'title' => $this->retrieveAccountDetails($memberData)
        );

        return response()->json(array(
          'data'  => $responseData,
          'error' => null,
          'timestamps'  => Carbon::now()
        ));
      }else{
        return response()->json(array(
          'data'  => null,
          'error' => null,
          'timestamps'  => Carbon::now()
        ));
      }
    }

    public function createNewIssue(Request $request){
      $data = $request->all();

      $creator = intval($data['creator']);
      $message = $data['message'];
      $this->model = new MessengerGroup();
      $insertData = array(
        'account_id'  => $creator,
        'title' => 'NONE',
        'payload' => 'support'
      );
      $this->insertDB($insertData);
      $id = intval($this->response['data']);
      if($id > 0){
        $member = new MessengerMember();
        $member->messenger_group_id = $id;
        $member->account_id = $creator;
        $member->status = 'admin';
        $member->created_at = Carbon::now();
        $member->save();

        $messageModel = new MessengerMessage();
        $messageModel->messenger_group_id = $id;
        $messageModel->account_id = $creator;
        $messageModel->message = $message;
        $messageModel->created_at = Carbon::now();
        $messageModel->save();

        return response()->json(array(
          'data'  => $id,
          'error' => null,
          'timestamps'  => Carbon::now()
        ));
      }else{
        return response()->json(array(
          'data'  => null,
          'error' => null,
          'timestamps'  => Carbon::now()
        ));
      }
    }


    public function retrieve(Request $request){
      $data = $request->all();
      $accountType = $data['account_type'];
      $accountId = $data['account_id'];
      $username = $data['username'];
      $existed = array();
      $flag = false;
      $active = 0;

      $result = null;

      if($accountType == 'partner' || $accountType == 'PARTNER'){
        $result = DB::table('messenger_members as T1')
          ->join('messenger_groups as T2', 'T2.id', '=', 'T1.messenger_group_id')
          ->where('T1.account_id', '=', $accountId)
          ->where('T1.payload', '!=', 'support')
          ->select('T2.*')
          ->get();
        $result = json_decode($result, true);
        if(sizeof($result) > 0){
          $i = 0;
          foreach ($result as $key) {
            $result[$i]['account_details'] = $this->retrieveAccountDetails($result[$i]['account_id']);
            $result[$i]['members'] = $this->getMembers($result[$i]['id'], null);
            $result[$i]['title'] = $this->retrieveAccountDetails($result[$i]['account_id']);
            $existed[] = $result[$i]['account_id'];
            $result[$i]['new'] = false;
            if($i == 0){
              $result[$i]['flag'] = true;
              $flag = true;
            }else{
              $result[$i]['flag'] = false;
            }
            $i++;
          }
        }

      }else if($accountType == 'user' || $accountType == 'USER'){
        $result = MessengerGroup::where('account_id', '=', $accountId)->get();

        if(sizeof($result) > 0){
          $i = 0;
          foreach ($result as $key) {
            $details = $this->retrieveAccountDetails($result[$i]['account_id']);
            $result[$i]['account_details'] = $this->retrieveAccountDetails($result[$i]['account_id']);
            $members = $this->getMembers($result[$i]['id'], $username);
            $result[$i]['members'] = ($members) ? $members['result'] : null;
            $result[$i]['title'] = $this->getTitle($result[$i]['id']);
            $result[$i]['new'] = false;
            if($members == true && $members['exist_username'] == true){
              $result[$i]['flag'] = true;
              $active = $i;
              $flag = true;
            }else{
              $result[$i]['flag'] = false;
            }
            $i++;
          }
        }
      }

      $accounts = null;
      if(($accountType == 'user' || $accountType == 'USER') && $flag == false){
        if(sizeof($result) > 0){
          $result[0]['flag'] = true;
        }
        $accounts = $this->getPartner($username);
      }

      return response()->json(array(
        'data'  => (sizeof($result) > 0) ? $result : null,
        'accounts'  => $accounts,
        'active'  => $active,
        'error' => null,
        'timestamps'  => Carbon::now()
      ));
    }

    public function retrieveSummary(Request $request){
      $data = $request->all();
      $accountType = $data['account_type'];
      $accountId = $data['account_id'];
      $response = array();

      $result = DB::table('messenger_members as T1')
        ->join('messenger_groups as T2', 'T2.id', '=', 'T1.messenger_group_id')
        ->where('T1.account_id', '=', $accountId)
        ->where('T2.payload', '!=', 'support')
        ->select('T2.*')
        ->get();
      $result = json_decode($result, true);
      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $response[] = $this->getLastMessage($result[$i]['id']);
          $i++;
        }
      }else{
        $response = null;
      }

      return response()->json(array(
        'data'  => $response,
        'error' => null,
        'timestamps'  => Carbon::now()
      ));
    }

    public function retrieveMyIssue(Request $request){
      $data = $request->all();
      $this->model = new MessengerGroup();
      $this->retrieveDB($data);

      $result = $this->response['data'];
      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $this->response['data'][$i]['last_message'] = $this->getLastMessageSupport($result[$i]['id']);
          $i++;
        }
      }

      return $this->response();
    }

    public function getLastMessageSupport($messengerGroupId){
      $message = MessengerMessage::where('messenger_group_id', '=', $messengerGroupId)->orderBy('created_at', 'desc')->get();
      if(sizeof($message) > 0){
        $message[0]['account'] = $this->retrieveAccountDetails($message[0]['account_id']);
        $message[0]['created_at_human'] = Carbon::createFromFormat('Y-m-d H:i:s', $message[0]['created_at'])->copy()->tz('Asia/Manila')->format('F j, Y');
        return $message[0];
      }
      return null;
    }

    public function getLastMessage($messengerGroupId){
      $message = MessengerMessage::where('messenger_group_id', '=', $messengerGroupId)->orderBy('created_at', 'desc')->get();
      $response = array(
        'title', 'description', 'date'
      );
      if(sizeof($message) > 0){
        $response['title'] = $this->retrieveAccountDetails($message[0]['account_id']);
        $response['description'] = $message[0]['message'];
        $response['created_at_human'] = Carbon::createFromFormat('Y-m-d H:i:s', $message[0]['created_at'])->copy()->tz('Asia/Manila')->format('F j, Y');
        return $response;
      }
      return null;
    }
    public function getMembers($messengerGroupId, $username){
      $result = MessengerMember::where('messenger_group_id', '=', $messengerGroupId)->get();
      $flag = false;
      if(sizeof($result) > 0){
        $i = 0;
        foreach ($result as $key) {
          $account = $this->retrieveAccountDetails($result[$i]['account_id']);
          $result[$i]['account_details'] = $account;
          if($account['username'] == $username){
            $flag = true;
          }
          $i++;
        }
      }
      return (sizeof($result) > 0) ? array(
        'result' => $result,
        'exist_username' => $flag
      ) : null;
    }

    public function getMemberExisted($messengerGroupId){
      $result = MessengerMember::where('messenger_group_id', '=', $messengerGroupId)->where('status', '=', 'member')->get();
      return (sizeof($result) > 0) ? $result[0]['account_id'] : null;
    }

    public function getTitle($messengerGroupId){
      $result = MessengerMember::where('messenger_group_id', '=', $messengerGroupId)->where('status', '=', 'member')->get();
      $title = null;
      if(sizeof($result) > 0){
          $title = $this->retrieveAccountDetails($result[0]['account_id']);
      }
      return ($title) ? $title : null;
    }

    public function getPartner($username){
      $accounts = null;
      $accounts = Account::where('username', '=', $username)->where('account_type', '=', 'PARTNER')->get();
      if(sizeof($accounts) > 0){
        $i = 0;
        foreach ($accounts as $key) {
          $accounts[$i]['title'] = $this->retrieveAccountDetails($accounts[$i]['id']);
          $accounts[$i]['flag'] = true;
          $accounts[$i]['new'] = true;
          $i++;
        }
      }
      return (sizeof($accounts) > 0) ? $accounts : null;
    }

}
