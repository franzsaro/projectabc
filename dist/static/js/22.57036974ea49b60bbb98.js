webpackJsonp([22],{314:function(a,n,t){t(818);var e=t(113)(t(681),t(908),"data-v-6f7e7cea",null);a.exports=e.exports},617:function(a,n,t){a.exports=t.p+"static/img/logo_white.521164a.png"},681:function(a,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t(19),i=t(33),r=t(27);n.default={mounted:function(){},data:function(){return{user:i.a.user,tokenData:i.a.tokenData,settingFlag:!1,menuFlag:!1,notifFlag:!1,config:r.default,confirmation:{message:null,action:null},accountNotif:null}},methods:{makeActive:function(a){"dropdown"===a?(this.settingFlag=!0,this.menuFlag=!1,this.notifFlag=!1):"sidebar"===a?(this.settingFlag=!1,this.menuFlag=!0,this.notifFlag=!1):"notif"===a?(this.settingFlag=!1,this.menuFlag=!1,this.notifFlag=!0):(this.settingFlag=!1,this.menuFlag=!1,this.notifFlag=!1)},logOut:function(){i.a.deaunthenticate()},redirect:function(a){null===i.a.timer.interval?(this.confirmation.message=null,e.a.push(a)):(this.confirmation.message="You have an ongoing examination. You are not allowed to cancel the examination.",$("#timerHeaderModal").modal("show"))},display:function(){},setSemester:function(a){var n=this.user.semesters[a],t={id:this.user.userID,active_semester:n.id};this.APIRequest("accounts/update_active_semester",t).then(function(a){!0===a.data&&e.a.go("/")})},executeNotifItem:function(a){if("redirect"===a.payload)this.redirect("/"+a.url);else if("api_call"===a.payload){var n={condition:[{clause:"=",column:"id",value:this.user.userID}]};this.APIRequest(a.url,n).then(function(a){})}},updateNotif:function(a){var n=this;if(parseInt(this.user.notifications.current)>0)if(null!==a.course_id&&null===a.account_id){var t={account_id:this.user.userID,status:"ac_viewed"};this.APIRequest("notifications/create",t).then(function(a){a.data>0&&i.a.retrieveNotifications(n.user.userID)})}else{var e={id:a.id,status:"viewed"};this.APIRequest("notifications/update",e).then(function(a){!0===a.data&&i.a.retrieveNotifications(n.user.userID)})}},redirectGuide:function(){"STUDENT"===this.user.type?this.redirect("/guide/fs"):"TEACHER"===this.user.type&&this.redirect("/guide/ft")},openModal:function(a){$(a).modal("show")}}}},758:function(a,n,t){n=a.exports=t(300)(),n.push([a.i,"body[data-v-6f7e7cea]{font-size:13px;font-weight:400}.btn[data-v-6f7e7cea]{font-size:12px}.btn[data-v-6f7e7cea]:hover{cursor:pointer}.account-picture i[data-v-6f7e7cea]{font-size:100px!important}.arrow[data-v-6f7e7cea]:before{border-right-color:#ed2a2a!important;position:relative;border-top-color:#ed2a2a!important}.table[data-v-6f7e7cea]{font-size:12px}.form-control[data-v-6f7e7cea]{height:35px;font-size:12px}.system-header[data-v-6f7e7cea]{float:left;height:50px;font-size:24px;width:18%;background:#028170;text-align:center;position:fixed;z-index:6000}.header-navbar[data-v-6f7e7cea]{background:#22b173;height:50px;float:left;width:82%;position:fixed;margin-left:18%;z-index:5000}.system-header .navbar-brand[data-v-6f7e7cea]{color:#fff;text-transform:uppercase;line-height:30px}.header-navbar-nav[data-v-6f7e7cea]{height:50px;float:left;color:#fff;width:15%}.header-navbar-nav label[data-v-6f7e7cea]{font-size:13px;font-weight:500;vertical-align:middle;padding-left:10px}.header-navbar-nav i[data-v-6f7e7cea]{font-size:24px;padding:10px 0 0 5%}.header-navbar-nav[data-v-6f7e7cea]:hover{cursor:pointer;background:#028170}#messagesHeader[data-v-6f7e7cea]{margin-left:70%}.nav-item[data-v-6f7e7cea]{width:5%;height:50px;text-align:center;float:right;color:#fff;display:inline}.left-menu-icons[data-v-6f7e7cea],right-menu-icons[data-v-6f7e7cea]{height:50px;float:left;width:50%;position:fixed;z-index:100}.nav-item span i[data-v-6f7e7cea]{padding:12px 0 15px;font-size:24px}.nav-item span .notifications[data-v-6f7e7cea]{color:#fff;border-radius:5px;height:18px;width:18px;margin-left:-10px;font-size:10px;margin-top:15px;text-align:center;padding-top:2px}.nav-item span .notifications[data-v-6f7e7cea]:hover{cursor:pointer}.nav-item .label[data-v-6f7e7cea]{background:red;padding:5px;margin:-10px 0 0 -10px;border-radius:2px;border-color:solid 1px red;position:fixed;z-index:1}.nav-item[data-v-6f7e7cea]:hover{background:#028170;cursor:pointer}.dropdown-menu[data-v-6f7e7cea]{width:250px;min-height:250px;border-radius:0!important;padding-bottom:0!important}.dropdown-menu-notification[data-v-6f7e7cea]{padding-top:0!important;width:350px!important;height:400px!important;overflow-y:auto}.dropdown-item[data-v-6f7e7cea]{width:100%;height:40px;float:left;background:#fff;padding-top:0}.dropdown-item[data-v-6f7e7cea]:hover{background:#ddd!important}.dropdown-item i[data-v-6f7e7cea]{font-size:14px!important;padding-right:10px!important;color:#028170!important}.dropdown-item label[data-v-6f7e7cea]{font-size:14px!important}.dropdown-item i[data-v-6f7e7cea]:hover,.dropdown-item label[data-v-6f7e7cea]:hover{cursor:pointer}.dropdown-header[data-v-6f7e7cea]{padding:5px 0 10px;width:100%;text-align:center;border-bottom:1px solid #ccc}.dropdown-item-profile[data-v-6f7e7cea]{height:auto;width:100%;float:left;top:0}.dropdown-item-menu-title label[data-v-6f7e7cea]{line-height:40px;font-weight:550}.dropdown-item-menu-title[data-v-6f7e7cea]:hover,.dropdown-item-menu-title label[data-v-6f7e7cea]:hover{cursor:default;background:#fff!important}#account[data-v-6f7e7cea]{background:#fff}.account-picture[data-v-6f7e7cea]{height:auto;width:100%;float:left;padding-bottom:12px}.account-info[data-v-6f7e7cea]{width:100%;display:inline-block;float:left;font-weight:550;color:#22b173}.dropdown-item-button[data-v-6f7e7cea]{height:50px;width:100%;float:left;background:#fff;border-top:1px solid #ddd}.dropdown-item-button button[data-v-6f7e7cea]{height:40px;border-radius:0;width:100px;margin-top:5px}.dropdown-item-button button[data-v-6f7e7cea]:hover{background:red;color:#fff}.navbar-menu-toggler-md[data-v-6f7e7cea]{height:50px;float:left;text-align:center;font-size:16px;color:#fff;line-height:50px;display:none}.navbar-menu-toggler-md[data-v-6f7e7cea]:hover{cursor:pointer;background:#22b173}.active-menu[data-v-6f7e7cea]{background:#22b173}.profile-photo-header[data-v-6f7e7cea]{float:left;width:100%;height:80px;color:#22b173}.profile-image-holder-header[data-v-6f7e7cea]{width:100%;float:left;height:80px;text-align:center}.profile-image-holder-header img[data-v-6f7e7cea]{width:80px;height:80px;border-radius:5px}.profile-photo-header i[data-v-6f7e7cea]{float:left;font-size:80px;width:100%}.logo-brand[data-v-6f7e7cea]{width:25px;height:25px}.left-menu-icons .account-type[data-v-6f7e7cea]{padding:10px;margin-top:6px;margin-left:5px;border-radius:5px;font-size:11px;color:#fff;float:left}.semester-selector[data-v-6f7e7cea]{float:left;margin-top:6px}.semester-selector button[data-v-6f7e7cea]{height:36px!important;margin-left:5px}.semester-selector .dropdown-menu[data-v-6f7e7cea]{min-height:100px!important;overflow-y:hidden;margin-top:7px;font-size:14px!important;text-align:left}.semester-selector .dropdown-menu .dropdown-item[data-v-6f7e7cea]{padding:0!important;line-height:30px!important}.semester-selector .dropdown-menu .dropdown-item i[data-v-6f7e7cea]{padding-left:5px;padding-right:5px}.semester-selector .dropdown-menu .dropdown-item[data-v-6f7e7cea]:hover{cursor:pointer}.notification-header[data-v-6f7e7cea]{padding-top:10px;padding-bottom:10px;text-align:center}.notification-header[data-v-6f7e7cea],.notification-item[data-v-6f7e7cea]{width:100%;float:left;border-bottom:1px solid #ddd}.notification-item[data-v-6f7e7cea]:hover{cursor:pointer;background:#efefef}.notification-title[data-v-6f7e7cea]{width:96%;margin-right:2%;margin-left:2%;float:left;font-size:12px;padding-top:5px;padding-bottom:5px;font-weight:600}.notification-description[data-v-6f7e7cea]{font-size:12px}.notification-date[data-v-6f7e7cea],.notification-description[data-v-6f7e7cea]{width:96%;margin-right:2%;margin-left:2%;float:left;color:#999;text-align:justify}.notification-date[data-v-6f7e7cea]{font-size:11px;margin-bottom:5px}@media (min-width:1200px){.system-header[data-v-6f7e7cea]{width:18%}.header-navbar[data-v-6f7e7cea]{width:82%;margin-left:18%}.header-navbar-nav[data-v-6f7e7cea]{width:15%!important}.navbar-menu-toggler-md[data-v-6f7e7cea]{display:none}.left-menu-icons[data-v-6f7e7cea]{width:40%!important}.right-menu-icons[data-v-6f7e7cea]{width:60%!important}.nav-item[data-v-6f7e7cea]{width:5%!important}}@media (max-width:1199px){.system-header[data-v-6f7e7cea]{width:18%}.header-navbar[data-v-6f7e7cea]{width:82%;margin-left:18%}.header-navbar-nav[data-v-6f7e7cea]{width:30%}.navbar-menu-toggler-md[data-v-6f7e7cea]{display:none}.left-menu-icons[data-v-6f7e7cea]{width:60%!important}.right-menu-icons[data-v-6f7e7cea]{width:40%}.nav-item[data-v-6f7e7cea]{width:10%}}@media (max-width:991px){.system-header[data-v-6f7e7cea]{width:30%}.header-navbar[data-v-6f7e7cea]{width:70%;margin-left:30%}.header-navbar-nav[data-v-6f7e7cea]{width:30%}.navbar-menu-toggler-md[data-v-6f7e7cea]{width:10%;text-align:center;display:block}.left-menu-icons[data-v-6f7e7cea]{width:60%!important}.right-menu-icons[data-v-6f7e7cea]{width:40%!important}.nav-item[data-v-6f7e7cea]{width:10%}}@media (max-width:767px){.header-margin[data-v-6f7e7cea]{width:10%!important}.system-header[data-v-6f7e7cea]{width:15%}.navbar-brand[data-v-6f7e7cea]{width:100%!important;margin:0!important}.header-navbar[data-v-6f7e7cea]{width:85%;margin-left:15%}.nav-item[data-v-6f7e7cea]{width:20%}.logo-brand[data-v-6f7e7cea]{width:30px;height:30px}.left-menu-icons[data-v-6f7e7cea]{width:40%!important}.right-menu-icons[data-v-6f7e7cea]{width:60%!important}.hide-on-mobile[data-v-6f7e7cea]{display:none!important}}@media (max-width:300px){.logo-brand[data-v-6f7e7cea]{width:30px;height:30px}}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/frame/Header.vue"],names:[],mappings:"AA4IA,sBACE,eAAgB,AAChB,eAAiB,CAClB,AACD,sBACE,cAAgB,CACjB,AACD,4BACE,cAAgB,CACjB,AACD,oCACE,yBAA4B,CAC7B,AACD,+BACE,qCAAuC,AACvC,kBAAmB,AACnB,kCAAqC,CACtC,AAMD,wBACE,cAAgB,CACjB,AAOD,+BACE,YAAa,AACb,cAAgB,CACjB,AACD,gCACI,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,UAAW,AACX,mBAAoB,AACpB,kBAAmB,AACnB,eAAgB,AAChB,YAAc,CACjB,AACD,gCACI,mBAAoB,AACpB,YAAa,AACb,WAAY,AACZ,UAAW,AACX,eAAgB,AAChB,gBAAiB,AACjB,YAAc,CACjB,AAGD,8CACI,WAAY,AACZ,yBAA0B,AAC1B,gBAAkB,CACrB,AASD,oCACM,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,SAAW,CAChB,AACD,0CACI,eAAgB,AAChB,gBAAiB,AACjB,sBAAuB,AACvB,iBAAmB,CACtB,AACD,sCACI,eAAgB,AACf,mBAAqB,CACzB,AACD,0CACI,eAAgB,AAChB,kBAAoB,CACvB,AAWD,iCACE,eAAiB,CAClB,AACD,2BACE,SAAU,AACV,YAAa,AACb,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,cAAgB,CACjB,AACD,oEACE,YAAa,AACb,WAAY,AACZ,UAAW,AACX,eAAgB,AAChB,WAAa,CACd,AACD,kCACE,oBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,WAAe,AACf,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,eAAiB,CAClB,AACD,qDACE,cAAgB,CACjB,AACD,kCACE,eAAoB,AACpB,YAAa,AACb,uBAAwB,AACxB,kBAAmB,AACnB,2BAAgC,AAChC,eAAgB,AAChB,SAAW,CACZ,AACD,iCACE,mBAAoB,AACpB,cAAgB,CACjB,AACD,gCACE,YAAa,AACb,iBAAkB,AAClB,0BAA8B,AAC9B,0BAA+B,CAChC,AACD,6CACE,wBAA4B,AAC5B,sBAAwB,AACxB,uBAAyB,AACzB,eAAiB,CAClB,AACD,gCACE,WAAY,AACZ,YAAa,AACb,WAAY,AACZ,gBAAiB,AACjB,aAAiB,CAClB,AACD,sCACE,yBAA4B,CAC7B,AACD,kCACE,yBAA2B,AAC3B,6BAA+B,AAC/B,uBAA0B,CAC3B,AACD,sCACE,wBAA2B,CAC5B,AACD,oFACE,cAAgB,CACjB,AACD,kCACE,mBAAsB,AACtB,WAAY,AACZ,kBAAmB,AACnB,4BAA8B,CAC/B,AACD,wCACE,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,KAAO,CACR,AACD,iDACE,iBAAkB,AAClB,eAAiB,CAClB,AACD,wGACE,eAAgB,AAChB,yBAA4B,CAC7B,AACD,0BACE,eAAiB,CAClB,AACD,kCACE,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,mBAAqB,CACtB,AACD,+BACE,WAAY,AACZ,qBAAsB,AACtB,WAAY,AACZ,gBAAiB,AACjB,aAAe,CAChB,AACD,uCACE,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,yBAA2B,CAC5B,AACD,8CACE,YAAa,AACb,gBAAiB,AACjB,YAAa,AACb,cAAgB,CACjB,AACD,oDACE,eAAoB,AACpB,UAAY,CACb,AASD,yCACE,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,YAAc,CACf,AACD,+CACE,eAAgB,AAChB,kBAAoB,CACrB,AACD,8BACE,kBAAoB,CACrB,AAQD,uCACE,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,aAAe,CAChB,AACD,8CACE,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,kDACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,yCACE,WAAY,AACZ,eAAgB,AAChB,UAAY,CACb,AACD,6BACE,WAAY,AACZ,WAAa,CACd,AACD,gDACE,aAA6B,AAC7B,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,WAAY,AACZ,UAAY,CACb,AACD,oCACE,WAAY,AACZ,cAAgB,CACjB,AACD,2CACE,sBAAwB,AACxB,eAAiB,CAClB,AACD,mDACE,2BAA6B,AAC7B,kBAAmB,AACnB,eAAgB,AAChB,yBAA2B,AAC3B,eAAiB,CAClB,AACD,kEACE,oBAAwB,AACxB,0BAA6B,CAC9B,AACD,oEACE,iBAAkB,AAClB,iBAAmB,CACpB,AACD,wEACE,cAAgB,CACjB,AAOD,sCAIE,iBAAkB,AAClB,oBAAqB,AACrB,iBAAmB,CACpB,AACD,0EAPE,WAAY,AACZ,WAAY,AACZ,4BAA8B,CAS/B,AACD,0CACE,eAAgB,AAChB,kBAAoB,CACrB,AACD,qCACE,UAAW,AACX,gBAAiB,AACjB,eAAgB,AAChB,WAAY,AACZ,eAAgB,AAChB,gBAAiB,AACjB,mBAAoB,AACpB,eAAiB,CAClB,AACD,2CAME,cAAgB,CAEjB,AACD,+EARE,UAAW,AACX,gBAAiB,AACjB,eAAgB,AAChB,WAAY,AACZ,WAAY,AAEZ,kBAAoB,CAWrB,AATD,oCAME,eAAgB,AAEhB,iBAAmB,CACpB,AAQD,0BACA,gCACM,SAAW,CAChB,AACD,gCACM,UAAW,AACX,eAAiB,CACtB,AACD,oCACM,mBAAsB,CAC3B,AACD,yCACM,YAAc,CACnB,AACD,kCACM,mBAAsB,CAC3B,AACD,mCACM,mBAAsB,CAC3B,AACD,2BACM,kBAAqB,CAC1B,CACA,AACD,0BACA,gCACM,SAAW,CAChB,AACD,gCACM,UAAW,AACX,eAAiB,CACtB,AACD,oCACM,SAAW,CAChB,AACD,yCACM,YAAc,CACnB,AACD,kCACM,mBAAsB,CAC3B,AACD,mCACM,SAAW,CAChB,AACD,2BACM,SAAW,CAChB,CACA,AACD,yBACA,gCACM,SAAW,CAChB,AACD,gCACM,UAAW,AACX,eAAiB,CACtB,AACD,oCACM,SAAW,CAChB,AACD,yCACM,UAAW,AACX,kBAAmB,AACnB,aAAe,CACpB,AACD,kCACM,mBAAsB,CAC3B,AACD,mCACM,mBAAsB,CAC3B,AACD,2BACM,SAAW,CAChB,CACA,AAGD,yBACA,gCACK,mBAAsB,CAC1B,AACD,gCACM,SAAW,CAChB,AACD,+BACM,qBAAuB,AACvB,kBAAuB,CAC5B,AACD,gCACM,UAAW,AACX,eAAiB,CACtB,AACD,2BACM,SAAW,CAChB,AACD,6BACM,WAAY,AACZ,WAAa,CAClB,AACD,kCACM,mBAAsB,CAC3B,AACD,mCACM,mBAAsB,CAC3B,AACD,iCACM,sBAAyB,CAC9B,CACA,AACD,yBACA,6BACM,WAAY,AACZ,WAAa,CAClB,CACA",file:"Header.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n/*\r\n        BODY\r\n*/\nbody[data-v-6f7e7cea]{\r\n  font-size: 13px;\r\n  font-weight: 400;\n}\n.btn[data-v-6f7e7cea]{ \r\n  font-size: 12px;\n}\n.btn[data-v-6f7e7cea]:hover{\r\n  cursor: pointer;\n}\n.account-picture i[data-v-6f7e7cea]{\r\n  font-size: 100px !important;\n}\n.arrow[data-v-6f7e7cea]::before{\r\n  border-right-color: #ed2a2a !important;\r\n  position: relative;\r\n  border-top-color: #ed2a2a !important;\n}\r\n/*------------------------------------\r\n\r\n          TABLES\r\n\r\n--------------------------------------*/\n.table[data-v-6f7e7cea]{\r\n  font-size: 12px;\n}\r\n\r\n/*----------------------------------------\r\n\r\n            Forms\r\n\r\n------------------------------------------*/\n.form-control[data-v-6f7e7cea]{\r\n  height: 35px;\r\n  font-size: 12px;\n}\n.system-header[data-v-6f7e7cea]{\r\n    float: left;\r\n    height: 50px;\r\n    font-size: 24px;\r\n    width: 18%;\r\n    background: #028170;\r\n    text-align: center;\r\n    position: fixed;\r\n    z-index: 6000;\n}\n.header-navbar[data-v-6f7e7cea]{\r\n    background: #22b173;\r\n    height: 50px;\r\n    float: left;\r\n    width: 82%;\r\n    position: fixed;\r\n    margin-left: 18%;\r\n    z-index: 5000;\n}\r\n\r\n  /*-- navbar --*/\n.system-header .navbar-brand[data-v-6f7e7cea]{\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    line-height: 30px;\n}\r\n  \r\n/*---------------------------------------------\r\n \r\n\r\n        HEADER ACCOUNT PROFILE\r\n\r\n\r\n-----------------------------------------------*/\n.header-navbar-nav[data-v-6f7e7cea]{\r\n      height: 50px;\r\n      float: left;\r\n      color: #fff;\r\n      width: 15%;\n}\n.header-navbar-nav label[data-v-6f7e7cea]{\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n    padding-left: 10px;\n}\n.header-navbar-nav i[data-v-6f7e7cea]{\r\n    font-size: 24px;\r\n     padding: 10px 0 0 5%;\n}\n.header-navbar-nav[data-v-6f7e7cea]:hover{\r\n    cursor: pointer;\r\n    background: #028170;\n}\r\n\r\n\r\n/*---------------------------------------------\r\n       \r\n\r\n\r\n                  ICONS\r\n\r\n\r\n-----------------------------------------------*/\n#messagesHeader[data-v-6f7e7cea]{\r\n  margin-left: 70%;\n}\n.nav-item[data-v-6f7e7cea]{\r\n  width: 5%;\r\n  height: 50px;\r\n  text-align: center;\r\n  float: right;\r\n  color: #fff;\r\n  display: inline;\n}\n.left-menu-icons[data-v-6f7e7cea], right-menu-icons[data-v-6f7e7cea]{\r\n  height: 50px;\r\n  float: left;\r\n  width: 50%;\r\n  position: fixed;\r\n  z-index: 100;\n}\n.nav-item span i[data-v-6f7e7cea]{\r\n  padding: 12px 0 15px 0;\r\n  font-size: 24px;\n}\n.nav-item span .notifications[data-v-6f7e7cea]{\r\n  color: #ffffff;\r\n  border-radius: 5px;\r\n  height: 18px;\r\n  width: 18px;\r\n  margin-left: -10px;\r\n  font-size: 10px;\r\n  margin-top: 15px;\r\n  text-align: center;\r\n  padding-top: 2px;\n}\n.nav-item span .notifications[data-v-6f7e7cea]:hover{\r\n  cursor: pointer;\n}\n.nav-item .label[data-v-6f7e7cea]{\r\n  background: #ff0000;\r\n  padding: 5px;\r\n  margin: -10px 0 0 -10px;\r\n  border-radius: 2px;\r\n  border-color: solid 1px #ff0000;\r\n  position: fixed;\r\n  z-index: 1;\n}\n.nav-item[data-v-6f7e7cea]:hover{\r\n  background: #028170;\r\n  cursor: pointer;\n}\n.dropdown-menu[data-v-6f7e7cea]{\r\n  width: 250px;\r\n  min-height: 250px;\r\n  border-radius: 0px !important;\r\n  padding-bottom: 0px !important;\n}\n.dropdown-menu-notification[data-v-6f7e7cea]{\r\n  padding-top: 0px !important;\r\n  width: 350px !important;\r\n  height: 400px !important;\r\n  overflow-y: auto;\n}\n.dropdown-item[data-v-6f7e7cea]{\r\n  width: 100%;\r\n  height: 40px;\r\n  float: left;\r\n  background: #fff;\r\n  padding-top: 0px;\n}\n.dropdown-item[data-v-6f7e7cea]:hover{\r\n  background: #ddd !important;\n}\n.dropdown-item i[data-v-6f7e7cea]{\r\n  font-size: 14px !important;\r\n  padding-right: 10px !important;\r\n  color: #028170 !important;\n}\n.dropdown-item label[data-v-6f7e7cea]{\r\n  font-size: 14px !important;\n}\n.dropdown-item label[data-v-6f7e7cea]:hover, .dropdown-item i[data-v-6f7e7cea]:hover{\r\n  cursor: pointer;\n}\n.dropdown-header[data-v-6f7e7cea]{\r\n  padding: 5px 0 10px 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  border-bottom: solid 1px #ccc;\n}\n.dropdown-item-profile[data-v-6f7e7cea]{\r\n  height: auto;\r\n  width: 100%;\r\n  float: left;\r\n  top: 0;\n}\n.dropdown-item-menu-title label[data-v-6f7e7cea]{\r\n  line-height: 40px;\r\n  font-weight: 550;\n}\n.dropdown-item-menu-title[data-v-6f7e7cea]:hover, .dropdown-item-menu-title label[data-v-6f7e7cea]:hover{\r\n  cursor: default;\r\n  background: #fff !important;\n}\n#account[data-v-6f7e7cea]{\r\n  background: #fff;\n}\n.account-picture[data-v-6f7e7cea]{\r\n  height: auto;\r\n  width: 100%;\r\n  float: left;\r\n  padding-bottom: 12px;\n}\n.account-info[data-v-6f7e7cea]{\r\n  width: 100%;\r\n  display: inline-block;\r\n  float: left;\r\n  font-weight: 550;\r\n  color: #22b173;\n}\n.dropdown-item-button[data-v-6f7e7cea]{\r\n  height: 50px;\r\n  width: 100%;\r\n  float: left;\r\n  background: #fff;\r\n  border-top: solid 1px #ddd;\n}\n.dropdown-item-button button[data-v-6f7e7cea]{\r\n  height: 40px;\r\n  border-radius: 0;\r\n  width: 100px;\r\n  margin-top: 5px;\n}\n.dropdown-item-button button[data-v-6f7e7cea]:hover{\r\n  background: #ff0000;\r\n  color: #fff;\n}\r\n\r\n/*---------------------------------------------\r\n \r\n \r\n        HEADER TOGGLER MENU\r\n\r\n\r\n-----------------------------------------------*/\n.navbar-menu-toggler-md[data-v-6f7e7cea]{\r\n  height: 50px;\r\n  float: left;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  line-height: 50px;\r\n  display: none;\n}\n.navbar-menu-toggler-md[data-v-6f7e7cea]:hover{\r\n  cursor: pointer;\r\n  background: #22b173;\n}\n.active-menu[data-v-6f7e7cea]{\r\n  background: #22b173;\n}\r\n\r\n\r\n/*--------------------------------------\r\n\r\n          PROFILE PICTURE\r\n  \r\n---------------------------------------*/\n.profile-photo-header[data-v-6f7e7cea]{\r\n  float: left;\r\n  width: 100%;\r\n  height: 80px;\r\n  color: #22b173;\n}\n.profile-image-holder-header[data-v-6f7e7cea]{\r\n  width: 100%;\r\n  float: left;\r\n  height: 80px;\r\n  text-align: center;\n}\n.profile-image-holder-header img[data-v-6f7e7cea]{\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 5px;\n}\n.profile-photo-header i[data-v-6f7e7cea]{\r\n  float: left;\r\n  font-size: 80px;\r\n  width: 100%;\n}\n.logo-brand[data-v-6f7e7cea]{\r\n  width: 25px;\r\n  height: 25px;\n}\n.left-menu-icons .account-type[data-v-6f7e7cea]{\r\n  padding: 10px 10px 10px 10px;\r\n  margin-top: 6px;\r\n  margin-left: 5px;\r\n  border-radius: 5px;\r\n  font-size: 11px;\r\n  color: #fff;\r\n  float: left;\n}\n.semester-selector[data-v-6f7e7cea]{\r\n  float: left;\r\n  margin-top: 6px;\n}\n.semester-selector button[data-v-6f7e7cea]{\r\n  height: 36px !important;\r\n  margin-left: 5px;\n}\n.semester-selector .dropdown-menu[data-v-6f7e7cea]{\r\n  min-height: 100px !important;\r\n  overflow-y: hidden;\r\n  margin-top: 7px;\r\n  font-size: 14px !important;\r\n  text-align: left;\n}\n.semester-selector .dropdown-menu .dropdown-item[data-v-6f7e7cea]{\r\n  padding: 0px !important;\r\n  line-height: 30px !important;\n}\n.semester-selector .dropdown-menu .dropdown-item i[data-v-6f7e7cea]{\r\n  padding-left: 5px;\r\n  padding-right: 5px;\n}\n.semester-selector .dropdown-menu .dropdown-item[data-v-6f7e7cea]:hover{\r\n  cursor: pointer;\n}\r\n\r\n/*\r\n\r\n      NOTIFICATION DROPDOWN\r\n\r\n*/\n.notification-header[data-v-6f7e7cea]{\r\n  width: 100%;\r\n  float: left;\r\n  border-bottom: solid 1px #ddd;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  text-align: center;\n}\n.notification-item[data-v-6f7e7cea]{\r\n  width: 100%;\r\n  float: left;\r\n  border-bottom: solid 1px #ddd;\n}\n.notification-item[data-v-6f7e7cea]:hover{\r\n  cursor: pointer;\r\n  background: #efefef;\n}\n.notification-title[data-v-6f7e7cea]{\r\n  width: 96%;\r\n  margin-right: 2%;\r\n  margin-left: 2%;\r\n  float: left;\r\n  font-size: 12px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  font-weight: 600;\n}\n.notification-description[data-v-6f7e7cea]{\r\n  width: 96%;\r\n  margin-right: 2%;\r\n  margin-left: 2%;\r\n  float: left;\r\n  color: #999;\r\n  font-size: 12px;\r\n  text-align: justify;\n}\n.notification-date[data-v-6f7e7cea]{\r\n  width: 96%;\r\n  margin-right: 2%;\r\n  margin-left: 2%;\r\n  float: left;\r\n  color: #999;\r\n  font-size: 11px;\r\n  text-align: justify;\r\n  margin-bottom: 5px;\n}\r\n\r\n/*---------------------------------------------------------          \r\n\r\n                  RESPONSIVE HANDLER\r\n\r\n-----------------------------------------------------------*/\r\n/*-------------- Medium and Large Screens for Tablets and Desktop --------------*/\n@media (min-width: 1200px){\n.system-header[data-v-6f7e7cea]{\r\n      width: 18%;\n}\n.header-navbar[data-v-6f7e7cea]{\r\n      width: 82%;\r\n      margin-left: 18%;\n}\n.header-navbar-nav[data-v-6f7e7cea]{\r\n      width: 15% !important;\n}\n.navbar-menu-toggler-md[data-v-6f7e7cea]{\r\n      display: none;\n}\n.left-menu-icons[data-v-6f7e7cea]{\r\n      width: 40% !important;\n}\n.right-menu-icons[data-v-6f7e7cea]{\r\n      width: 60% !important;\n}\n.nav-item[data-v-6f7e7cea]{\r\n      width: 5% !important;\n}\n}\n@media (max-width: 1199px){\n.system-header[data-v-6f7e7cea]{\r\n      width: 18%;\n}\n.header-navbar[data-v-6f7e7cea]{\r\n      width: 82%;\r\n      margin-left: 18%;\n}\n.header-navbar-nav[data-v-6f7e7cea]{\r\n      width: 30%;\n}\n.navbar-menu-toggler-md[data-v-6f7e7cea]{\r\n      display: none;\n}\n.left-menu-icons[data-v-6f7e7cea]{\r\n      width: 60% !important;\n}\n.right-menu-icons[data-v-6f7e7cea]{\r\n      width: 40%;\n}\n.nav-item[data-v-6f7e7cea]{\r\n      width: 10%;\n}\n}\n@media (max-width: 991px){\n.system-header[data-v-6f7e7cea]{\r\n      width: 30%;\n}\n.header-navbar[data-v-6f7e7cea]{\r\n      width: 70%;\r\n      margin-left: 30%;\n}\n.header-navbar-nav[data-v-6f7e7cea]{\r\n      width: 30%;\n}\n.navbar-menu-toggler-md[data-v-6f7e7cea]{\r\n      width: 10%;\r\n      text-align: center;\r\n      display: block;\n}\n.left-menu-icons[data-v-6f7e7cea]{\r\n      width: 60% !important;\n}\n.right-menu-icons[data-v-6f7e7cea]{\r\n      width: 40% !important;\n}\n.nav-item[data-v-6f7e7cea]{\r\n      width: 10%;\n}\n}\r\n\r\n/*-------------- Small Screen for Mobile Phones --------------*/\n@media (max-width: 767px){\n.header-margin[data-v-6f7e7cea]{\r\n     width: 10% !important;\n}\n.system-header[data-v-6f7e7cea]{\r\n      width: 15%;\n}\n.navbar-brand[data-v-6f7e7cea]{\r\n      width: 100% !important;\r\n      margin: 0px !important;\n}\n.header-navbar[data-v-6f7e7cea]{\r\n      width: 85%;\r\n      margin-left: 15%;\n}\n.nav-item[data-v-6f7e7cea]{\r\n      width: 20%;\n}\n.logo-brand[data-v-6f7e7cea]{\r\n      width: 30px;\r\n      height: 30px;\n}\n.left-menu-icons[data-v-6f7e7cea]{\r\n      width: 40% !important;\n}\n.right-menu-icons[data-v-6f7e7cea]{\r\n      width: 60% !important;\n}\n.hide-on-mobile[data-v-6f7e7cea]{\r\n      display: none !important;\n}\n}\n@media (max-width: 300px){\n.logo-brand[data-v-6f7e7cea]{\r\n      width: 30px;\r\n      height: 30px;\n}\n}\r\n"],sourceRoot:""}])},818:function(a,n,t){var e=t(758);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);t(301)("ebe12b62",e,!0)},908:function(a,n,t){a.exports={render:function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",[e("div",{staticClass:"system-header"},[e("a",{staticClass:"navbar-brand",on:{click:function(n){a.redirect("dashboard")}}},[e("img",{staticClass:"logo-brand",attrs:{src:t(617)}}),a._v(" "),a._m(0)])]),a._v(" "),e("nav",{staticClass:"header-navbar"},[e("span",{staticClass:"navbar-menu-toggler-md",class:{"active-menu":!0===a.menuFlag},attrs:{"data-toggle":"collapse","data-target":"#ClassWorx","aria-controls":"ClassWorx","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(n){a.makeActive("menu")}}},[e("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]),a._v(" "),e("span",{staticClass:"left-menu-icons"},[null!==a.user?e("label",{staticClass:"account-type  hide-on-mobile",class:{"bg-warning":"USER"===a.user.type,"bg-danger":"PARTNER"===a.user.type,"bg-gray":"ADMIN"===a.user.type}},[a._v(a._s(a.user.type))]):a._e()]),a._v(" "),e("span",{staticClass:"right-menu-icons"},[e("div",{staticClass:"dropdown"},[e("span",{staticClass:"nav-item",class:{"active-menu":!0===a.settingFlag},attrs:{"data-toggle":"dropdown",id:"settings","aria-haspopup":"true","aria-expanded":"false",onkeypress:a.makeActive("")},on:{click:function(n){a.makeActive("dropdown")}}},[a._m(1),a._v(" "),e("span",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"settings"}},[e("span",{staticClass:"dropdown-item-profile"},[e("span",{staticClass:"account-picture text-center"},[e("span",{staticClass:"profile-photo-header"},[null!==a.user.profile?e("span",{staticClass:"profile-image-holder-header"},[e("img",{attrs:{src:a.config.BACKEND_URL+a.user.profile.profile_url}})]):e("i",{staticClass:"fa fa-user-circle-o"})])]),a._v(" "),e("span",{staticClass:"account-info text-center"},[a._v(a._s(a.user.username))])]),a._v(" "),a._m(2),a._v(" "),e("span",{staticClass:"dropdown-item",on:{click:function(n){a.redirect("/profile")}}},[e("i",{staticClass:"fa fa-cog"}),a._v(" "),e("label",[a._v("Your Profile")])]),a._v(" "),a._m(3),a._v(" "),e("span",{staticClass:"dropdown-item",on:{click:function(n){a.openModal("#guideModal")}}},[e("i",{staticClass:"far fa-question-circle"}),a._v(" "),e("label",[a._v("Guide")])]),a._v(" "),e("span",{staticClass:"dropdown-item",on:{click:function(n){a.openModal("#privacyModal")}}},[e("i",{staticClass:"fas fa-shield-alt"}),a._v(" "),e("label",[a._v("Privacy Policy")])]),a._v(" "),e("span",{staticClass:"dropdown-item",on:{click:function(n){a.openModal("#termsAndConditionsModal")}}},[e("i",{staticClass:"fa fa-handshake-o"}),a._v(" "),e("label",[a._v("Terms and Conditions")])]),a._v(" "),e("span",{staticClass:"dropdown-item",on:{click:function(n){a.logOut()}}},[e("i",{staticClass:"fas fa-sign-out-alt"}),a._v(" "),e("label",[a._v("Logout")])])])])]),a._v(" "),null!==a.user.messages?e("div",{staticClass:"dropdown"},[null!==a.user.messages.data?e("span",{staticClass:"nav-item",class:{"active-menu":!0===a.notifFlag},attrs:{"data-toggle":"dropdown",id:"notifications","aria-haspopup":"true","aria-expanded":"false"}},[e("span",[e("i",{staticClass:"fas fa-envelope",staticStyle:{"font-size":"22px","margin-top":"2px"}}),a._v(" "),parseInt(a.user.messages.current)>0?e("label",{staticClass:"badge badge-danger",staticStyle:{"margin-left":"-15px"}},[a._v(a._s(a.user.messages.current))]):a._e()]),a._v(" "),e("span",{staticClass:"dropdown-menu dropdown-menu-right dropdown-menu-notification",attrs:{"aria-labelledby":"notifications"}},[e("span",{staticClass:"notification-header",on:{click:function(n){a.redirect("/messenger")}}},[a._v("\n                Messages\n              ")]),a._v(" "),a._l(a.user.messages.data,function(n,t){return null!==a.user.messages.data&&"ac_viewed"!==n.status?e("span",{staticClass:"notification-item"},[e("span",{staticClass:"notification-title"},[a._v(a._s(n.title))]),a._v(" "),e("span",{staticClass:"notification-description"},[a._v(a._s(n.description))]),a._v(" "),e("span",{staticClass:"notification-date"},[a._v("Posted on "+a._s(n.created_at))])]):a._e()})],2)]):a._e()]):a._e(),a._v(" "),null!==a.user.notifications?e("div",{staticClass:"dropdown"},[null!==a.user.notifications.data?e("span",{staticClass:"nav-item",class:{"active-menu":!0===a.notifFlag},attrs:{"data-toggle":"dropdown",id:"notifications","aria-haspopup":"true","aria-expanded":"false",onkeypress:a.makeActive("")},on:{click:function(n){a.makeActive("notif"),a.updateNotif(a.user.notifications.data[0])}}},[e("span",[e("i",{staticClass:"fa fa-bell"}),a._v(" "),parseInt(a.user.notifications.current)>0?e("label",{staticClass:"notifications"},[a._v(a._s(a.user.notifications.current))]):a._e()]),a._v(" "),e("span",{staticClass:"dropdown-menu dropdown-menu-right dropdown-menu-notification",attrs:{"aria-labelledby":"notifications"}},[e("span",{staticClass:"notification-header"},[a._v("\n                Notifications\n              ")]),a._v(" "),a._l(a.user.notifications.data,function(n,t){return null!==a.user.notifications.data&&"ac_viewed"!==n.status?e("span",{staticClass:"notification-item",on:{click:function(t){a.executeNotifItem(n)}}},[e("span",{staticClass:"notification-title"},[a._v(a._s(n.title))]),a._v(" "),e("span",{staticClass:"notification-description"},[a._v(a._s(n.description))]),a._v(" "),e("span",{staticClass:"notification-date"},[a._v("Posted on "+a._s(n.created_at))])]):a._e()})],2)]):a._e()]):a._e(),a._v(" "),a.user.checkout>0&&null!==a.user.checkout?e("span",{staticClass:"nav-item",on:{click:function(n){a.redirect("/checkout")}}},[e("span",[e("i",{staticClass:"fa fa-shopping-cart"}),a._v(" "),a.user.checkout>0&&null!==a.user.checkout?e("label",{staticClass:"badge badge-danger",staticStyle:{"margin-left":"-15px"}},[a._v(a._s(a.user.checkout))]):a._e()])]):a._e()])]),a._v(" "),null!==a.confirmation.message?e("div",{staticClass:"modal",attrs:{id:"timerHeaderModal"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[a._m(4),a._v(" "),e("div",{staticClass:"modal-body"},[a._v("\n          "+a._s(a.confirmation.message)+"\n        ")]),a._v(" "),a._m(5)])])]):a._e(),a._v(" "),e("div")])},staticRenderFns:[function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("label",{staticClass:"navbar-brand hide-on-mobile"},[t("b",{staticClass:"text-white"},[a._v("ID FACTORY")])])},function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("span",[t("i",{staticClass:"fa fa-cog"})])},function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("span",{staticClass:"dropdown-item dropdown-item-menu-title"},[t("label",[a._v("Profile")])])},function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("span",{staticClass:"dropdown-item dropdown-item-menu-title"},[t("label",[a._v("Documents")])])},function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"modal-header"},[t("h4",{staticClass:"modal-title"},[t("i",{staticClass:"fa fa-warning text-danger"}),a._v(" Confirmation!")]),a._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[a._v("×")])])},function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[a._v("Ok")])])}]}}});
//# sourceMappingURL=22.57036974ea49b60bbb98.js.map