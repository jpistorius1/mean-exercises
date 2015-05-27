var app = angular.module('moreCartoonNostalgia', []);

app.controller('cartoonController', function($scope, cartoonServices){
	$scope.newCharacter = {};
	$scope.allCharacters = cartoonServices.allCharacters;

	$scope.sumbitCharacter = function(){
		cartoonServices.allCharacters.push($scope.newCharacter);
		// cartoonServices.allCharacters.push(newCharacter);
		$scope.newCharacter = {};


	}

});