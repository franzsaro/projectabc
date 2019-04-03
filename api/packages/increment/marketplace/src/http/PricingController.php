<?php


namespace Increment\Marketplace\Http;

use Illuminate\Http\Request;
use App\Http\Controllers\APIController;
use Increment\Marketplace\Models\Pricing;
use Increment\Marketplace\Models\Product;
class PricingController extends APIController
{
    function __construct(){
    	$this->model = new Pricing();
        $this->notRequired = array(
            'minimum', 'maximum'
        );
    }

    public function retrieve(Request $request){
    	$data = $request->all();
    	$this->retrieveDB($data);
    	$result = $this->response['data'];
    	if(sizeof($result) > 0){
    		$i = 0;

    		foreach ($result as $key) {
    			$this->response['data'][$i]['product'] = $this->getProduct($result[$i]['product_id']);
    			$i++;
    		}
    	}
    	return $this->response();
    }

    public function getProduct($productId){
    	$result = Product::where('id', '=', $productId)->first();
    	return ($result) ? $result : null;
    }
}
