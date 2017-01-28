(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  
  service.getFavMenuItem = function(shortName) {
  service.Favmenuitemvalues = [];
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
    .then(function(response) {
      service.Favmenuitemvalues = response.data;
      return response.data;
    });
  };

  service.saveData = function(data){
       service.signupdata = data;

  };

  service.fetchData = function(){
    return service.signupdata;
  };

}



})();
