//number 1

function twoNumbers(num1, num2){
	return num1 + num2;
}
var sum = twoNumbers(5,6);

console.log(sum);

//number 2

function threeNumbers(num1, num2, num3){
	var smallest = num1;
	if (num2 < smallest){
		smallest = num2;
	}
	if (num3 < smallest){
		smallest = num3;
	}
	return smallest;
}

var tiny = threeNumbers(3, 8, 1);

	console.log(tiny);

//number 3

function evenOdd(num1){
	if (num1 % 2 === 0){
		return 'Even';
	} else {
		return 'Odd';
	}
}

var number = evenOdd(8);
console.log(number);

//number 4

function howLong(x){
	var sentence = x.length;
	var partialSentece = x.substring(0, sentence / 2);
	if(sentence <= 20){
		return x + x;
	} else {
		return partialSentece;
	}
}
var stuff = howLong('test test test test test');
console.log(stuff);
