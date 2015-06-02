var app = angular.module('pokemonList', []);

app.controller('pokeController', function($scope, pokeService){
	$scope.pokemon;

	$scope.loadPokeList = function(){
		pokeService.getPokeList(function(data){
			$scope.pokemon = data.pokemon;
			console.log(data);
		}, dataFailed);
	};

	function dataFailed(error){
		alert("Your request failed");
	};

});