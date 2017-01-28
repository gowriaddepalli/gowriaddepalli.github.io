(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemBuyer = this;
  itemBuyer.items = ShoppingListCheckOffService.getItems_buy();
  
   itemBuyer.PushItem = function (itemIdex) {
	/*    name1=itemBuyer.items[itemIdex].name;
	   quantity1=itemBuyer.items[itemIdex].quantity; */
	   
	ShoppingListCheckOffService.pushIt(itemIdex);
    
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemBought = this;

  itemBought.items = ShoppingListCheckOffService.getItems_bought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items_buy = [{ name: "cookies", quantity: 10 },{ name: "pastry", quantity: 4 },{ name: "soup", quantity: 30 },
  { name: "powder", quantity: 7 },{ name: "chips", quantity: 3 }];
  
  var items_bought = [];
  
  
  service.pushIt = function(itemIdex){
	   var item = {
      name: (items_buy[itemIdex].name),
      quantity: (items_buy[itemIdex].quantity)
    }; 
    items_bought.push(item); 
	items_buy.splice(itemIdex, 1);
  };
 /*  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items_bought.push(item);
  };

  service.removeItem = function (itemIdex) {
    items_buy.splice(itemIdex, 1);
  }; */
  
  service.getItems_buy = function () {
    return items_buy;
  };

  service.getItems_bought = function () {
    return items_bought;
  };
}

})();