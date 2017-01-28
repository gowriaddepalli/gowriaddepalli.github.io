(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signUpCtrl = this;
 
   signUpCtrl.submit = function () {
     signUpCtrl.completed = true;
     var val_no = signUpCtrl.user.menunumber;
     var value = val_no.toUpperCase();
     var val_user = (signUpCtrl.user);
     MenuService.saveData(val_user);
     signUpCtrl.answer = MenuService.getFavMenuItem(value).then(function(response) {
     signUpCtrl.text =  "Your information has been saved";
     return response;
     }, function(error) {
     signUpCtrl.text = "No such menu number exists";
     });

 };

}


})();