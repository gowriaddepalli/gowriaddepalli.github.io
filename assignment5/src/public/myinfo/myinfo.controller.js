(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var myInfoCtrl = this;

  if(MenuService.Favmenuitemvalues === undefined || MenuService.Favmenuitemvalues.length == 0)
  {
        myInfoCtrl.text = " Sign up Now!";
        myInfoCtrl.test = true;
 }
 else
 {
     var p= MenuService.fetchData();   
	myInfoCtrl.firstname = p.firstname;
     myInfoCtrl.lastname = p.lastname;
     myInfoCtrl.email = p.email;
     myInfoCtrl.phone = p.phone;
     myInfoCtrl.shortname= MenuService.Favmenuitemvalues.short_name;
     myInfoCtrl.name=MenuService.Favmenuitemvalues.name;
     myInfoCtrl.image = "https://frozen-mesa-24287.herokuapp.com/images/" + myInfoCtrl.shortname + ".jpg";
     myInfoCtrl.description= MenuService.Favmenuitemvalues.description;
     myInfoCtrl.pricesmall= MenuService.Favmenuitemvalues.price_small;
     myInfoCtrl.pricelarge= MenuService.Favmenuitemvalues.price_large;
     myInfoCtrl.smallportionname= MenuService.Favmenuitemvalues.small_portion_name;
     myInfoCtrl.largeportionname= MenuService.Favmenuitemvalues.large_portion_name;
     myInfoCtrl.testelse = true;
     MenuService.Favmenuitemvalues = [];
     MenuService.signupdata = [];

}

}


})();