(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/Data/templates/home.template.html'
  })

  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/Data/templates/categories.template.html',
    controller: 'CategoriesListController as categories',
    resolve: {
      catgs: ['MenuDataService', function (MenuDataService) {
		 // console.log("lolo" + MenuDataService.getAllCategories());
        return MenuDataService.getAllCategories();
      }]
    }
  })
  
   // Items list page
 .state('items', {
  url: '/{shortname}/items',
  templateUrl: 'src/Data/templates/items.template.html',
  controller: 'ItemsListController as items',
   resolve: {
     item: ['$stateParams', 'MenuDataService', function ($stateParams,MenuDataService) {
		// console.log($stateParams);
		// console.log($stateParams.shortname);
		// console.log("laughoutloud" + MenuDataService.getItemsForCategory($stateParams.shortname));
       return MenuDataService.getItemsForCategory($stateParams.shortname);
       }]
    }
	
 })

 

}

})();
