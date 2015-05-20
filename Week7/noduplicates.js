//input
var input = 'bookkeeper larry';
var noDuplicates = "";
var extras = "";
var stringArray = [];

var stringToArray = input.split('');

for (var i = 0; i < input.length; i++){
	var letter = stringToArray.shift();
	if(stringToArray.indexOf(letter) !== -1){
		extras = extras + letter;
	} else { 
		noDuplicates = noDuplicates + letter;
	}
};

console.log(noDuplicates);
console.log(extras);


// output
// No duplicates: 'bokepr lay'
// The Misfits: 'okeerr'