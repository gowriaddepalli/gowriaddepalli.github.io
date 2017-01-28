(function () {
'use strict';

angular.module('Data')
.component('itemsList', {
  templateUrl: 'src/Data/templates/itemslist.template.html',
  bindings: {
    lol: '<'
  }
});

})();
