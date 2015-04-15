//number 1
function secondNumber(){
	var number = [2, 4, 5, 9, 10];
	return (number[1])
}
console.log(secondNumber());
// number 2

function numberList(){
	var array = [8, 7, 95, 19, 100];
	for (i = 0; i < 5; i ++){
		return array;
	}
}
console.log(numberList());

// number 3

function sumAll() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} 
console.log(sumAll(1, 123, 115, 44, 88));

//number 4

function largestPosition(){
var array = [56, 32, 5, 89, 32];
var largest = 0;

for (var i = 0; 0 < 100; i++ ) {
    if (array[i] > largest) {
       largest = array[i];
          } 
    return largest //.splice(array);
}
}
console.log(largestPosition());

//number 5

function averageAll() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} 
console.log(averageAll(1, 123, 115, 44, 88) / 5);

//number 6

function splitting(){
	var string = "How are you doing today?";
	var splitApart = string.split(" ");
		return splitApart;
}
console.log(splitting());
