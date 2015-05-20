var app = angular.module('uglyThings', []);

app.controller('uglyItems', function($scope){
	$scope.pushedUglyItems = [];
	$scope.awfulItem = {
		title: "Tested data",
		img_url: "More Tested Data",
		description: "https://angularjs.org/img/AngularJS-large.png"
	}

	$scope.pushedUglyItems.push($scope.awfulItem);
$scope.clickedButton = function(){
	$scope.pushedUglyItems.push($scope.awfulItems);
	$scope.awfulItem = {};
}


});

