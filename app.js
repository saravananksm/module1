(function () {
	"use strict"
	angular.module("LunchCheck",[])			
			.controller("LunchChecksController",LunchChecksController);

				LunchChecksController.$inject=[$scope];				
				function LunchChecksController($scope){
				$scope.menuItems="";
				$scope.msgMenuFeedBack="";
				$scope.findMenuFeedBack =	function(){	
				$scope.msgMenuFeedBack = prepareFeedBack($scope.menuItems);
				}
			}
				function prepareFeedBack(menuItems){
					var menuItemsArray = menuItems.split(',');
					var noOfItemsOrdered = menuItemsArray.length;
					var feedback ="";
					if(noOfItemsOrdered === 1 && menuItemsArray[0]==""){
						feedback = "Please enter data first";
					}else if(noOfItemsOrdered<=3){
						feedback = "Enjoy!";
					}else if(noOfItemsOrdered>3){
						feedback = "Too much!";
					}
					return feedback;

				}
				
})();