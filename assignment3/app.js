(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    } 
  };

  return ddo;
}



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.inp="";
  
  
  menu.isEmpty = function() {
      return menu.found != undefined && menu.found.length === 0;
    }
    menu.findItems = function () {
		if (menu.inp === "") {
        menu.found = [];
        return;
      }
    var promise = MenuSearchService.getMatchedMenuItems(menu.inp);

    promise.then(function (response) {
		menu.found = response;
    })
    .catch(function (error) {
      console.log(error);
    })
  }; 
  
    menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  service.getMatchedMenuItems = function (searchTerm) {
	   
    return  $http({
      method: 'GET',
      url: (ApiBasePath + "/menu_items.json")	   
    }).then(function (result){
	var response=result.data.menu_items;

      var foundItems = [];	
	  
	  for (var i = 0; i < response.length; i++) {
      
      if (response[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
        foundItems.push(response[i]);
      }
    }
	return foundItems;
	}) ;
    
  };
}


}
)();