var app = angular.module('uglyThings', []);

app.controller('uglyItems', function($scope){
	$scope.pushedUglyItems = [];
	$scope.awfulItem = {
		title: "Title",
		img_url: "Image link",
		description: "Description"
	}

$scope.clickedButton = function(){
	$scope.pushedUglyItems.push($scope.awfulItem);
	$scope.awfulItem = {};
	}


});

