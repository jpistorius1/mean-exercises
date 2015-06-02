var app = angular.module('pokemonList');

app.service('pokeService', function($http){
	var URL_BASE = "http://pokeapi.co/api";
    var URL_VERSION = "/v1";
    var URL_ALLPOKEMON = "/pokedex/1/";

    this.getPokeList = function(dataWorked, dataFailed){
    	$http.get(URL_BASE + URL_VERSION + URL_ALLPOKEMON)
    	.success(dataWorked)
    	.error(dataFailed)
    };
});