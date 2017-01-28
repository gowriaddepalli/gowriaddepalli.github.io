(function () {
'use strict';

angular.module('Data')
.component('categoriesList', {
  templateUrl: 'src/Data/templates/categorieslist.template.html',
  bindings: {
    catgs: '<'
  }
});

})();
