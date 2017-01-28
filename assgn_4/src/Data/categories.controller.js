(function () {
'use strict';

angular.module('Data')  
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService','catgs'];
function CategoriesListController(MenuDataService,catgs) {
  var categories = this;
  categories.catgs = catgs;
  console.log("*******");
  console.log(categories.catgs);
}

})();
