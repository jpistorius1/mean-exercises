var ask = require('readline-sync');
var colors = ["blue", "red", "yellow", "green", "turquiose"];
var moods = ["hungry", "happy", "bored"];
var FULL_HEALTH = 100; 
//var monsters = undefined;

var monster = function(color){
	this.health = FULL_HEALTH;
	this.mood = "happy";
	this.color = color; 
};

var startOfGame = function(){
	monster = generateMonster();
	timerOfRequest();
	console.log("You have a new Monster! You're lucky and got a " + monster.color);
	console.log("Your monster has " + monster.health + "% and is " + monster.mood);
};

var generateMonster = function(){

	var color = colors[Math.floor(Math.random() * 5)];
	var newMonster = new monster(color);
	return newMonster;	
};

startOfGame();

function timerOfRequest(){
	var fed = false;
	var bored = false;
	setInterval(function () {

		var newMood = moods[Math.floor(Math.random() * 3)];
		monster.mood = newMood;
		console.log("Your monster is " + newMood);

	if (monster.mood == moods[0]){
		var answer = ask.question("Would you like to feed your pet? Yes or No? ");
		if (answer.toLowerCase() == "yes"){
			fed = true;
		} else {
			answer.toLowerCase() == "no";
			fed = false;
			checkFed(fed);
			}
		} 
	else if (monster.mood == moods[1]) {
		
		console.log("You're doing an amazing job. Keep up the great work! ");
	}
	else {
		(monster.mood == moods[2])
		var answerOfGame = ask.question("Would you like to play a game with your pet? Yes or No? ");
		if (answerOfGame.toLowerCase() == "yes"){
			notBored = true;
		} else {
			answerOfGame.toLowerCase() == "no";
			notBored = false;
			checkBored(bored);
		}
	} 
	}, 2000);
} 

function checkFed(fed){
	if (fed == true){
		monster.health += 10;
	} else {
		monster.health -= 10;
		console.log(monster.health);  
		checkHealth();
	}
}


function checkBored(notBored){
	if (notBored == true){
		monster.health += 10;
	} else {
		monster.health -= 10;
		console.log(monster.health); 
		checkHealth();
	}
}

function checkHealth(){
	if (monster.health == 0){
		var endOfTheGame = ask.question("You let them die!!!! Would you like to start over? ")
		if (endOfTheGame.toLowerCase() == 'yes'){
			startOfGame();
		} 
	}
}
