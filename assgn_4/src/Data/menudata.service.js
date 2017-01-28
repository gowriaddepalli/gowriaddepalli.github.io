(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
  
  service.getAllCategories = function () {
     return  $http({
      method: 'GET',
      url: (" https://davids-restaurant.herokuapp.com/categories.json")	   
    }).then(function (result){
	var response=result.data;
    return response;
	}) ;
    
  }
  
  service.getItemsForCategory = function (categoryShortName) {
     return  $http({
      method: 'GET',
      url: (" https://davids-restaurant.herokuapp.com/menu_items.json?category="),
	  params: {
          category: categoryShortName
        }
    }).then(function (result){
	var response=result.data.menu_items;
	return response;
	
  /*     var foundItems = [];	
	  
	  for (var i = 0; i < response.length; i++) {
		  
		  
      if (categoryShortName.toLowerCase().indexOf(response[i].short_name.toLowerCase() )!== -1) {
        foundItems.push(response[i]);
      } 
      if (response[i].short_name.toLowerCase().indexOf(categoryShortName.toLowerCase()) !== -1) {
        foundItems.push(response[i]);
      }
    }
	return foundItems; */
	}) ;
    
  };
  
  
}




/* function MenuDataService($q, $timeout,$http) {
  var service = this;

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };
} */

})();
