(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://frozen-mesa-24287.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
