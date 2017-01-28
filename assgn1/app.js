(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController );
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.textValue = "";
  $scope.msg="";
  $scope.bor="black";
  $scope.colour="black";
  
  $scope.checkIfTooMuch = function () {
	var arrayOfStrings = $scope.textValue.split(',');
	var totalStringValue = calculatNumericForString(arrayOfStrings);
	if (totalStringValue <= 3  && totalStringValue > 0)
	{
		$scope.msg ="Enjoy!";
		  $scope.bor="green";
          $scope.colour="green";
	}
	else if(totalStringValue>3)
	{
		$scope.msg ="Too much!";
		$scope.bor="green";
        $scope.colour="green";
	}
	if(totalStringValue==0)
	{
		$scope.msg ="Please enter data first";
		$scope.bor="red";
        $scope.colour="red";
	}
    
   
  };


  function calculatNumericForString(arrayOfStrings) {
    var totalStringValue = arrayOfStrings.length;
    for (var i = 0; i < arrayOfStrings.length; i++) {
	  if(arrayOfStrings[i].trim()=="")
      totalStringValue--;
    }

    return totalStringValue;
  }

}


})();