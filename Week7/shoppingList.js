var app = angular.module('shoppingList', []);

app.controller('groceryList', function($scope){
	$scope.theList = []
	$scope.userInput = "";

	$scope.saveGroceryItem = function(){
		$scope.theList.push($scope.userInput);
		console.log($scope.theList)
	}
	$scope.deleteGroceryItem = function(index){
		$scope.theList.splice(index, 1);
		$scope.userInput = "";
		console.log(index);
	}
});