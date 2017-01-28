(function () {
'use strict';

angular.module('Data')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['MenuDataService','item'];
function ItemsListController(MenuDataService, item) {
  var items = this;
    items.values = item;
	//console.log("1212" + items.values);
	//console.log("112" + items.values.menu_items);
}

})();
