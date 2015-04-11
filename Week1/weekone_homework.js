var ask = require('readline-sync');
var math_question = ask.question("Please enter your math equation (+, -, *, /):");
var operator_pos = mathQuestion.search(/[\+\-\*\/]/);

if(operator_pos != -1){
	var string_first = mathQuestion.substr(0, operator_pos);
	var string_second = mathQuestion.substr(operator_pos + 1);

	var integer1 = parseInt(string_first);
	var integer2 = parseInt(string_second);
	var operator_array = mathQuestion.match(/[\+\-\*\/]/);
	var answer;
	
	switch (operator_array[0]){
		case '+':
			console.log("adding");
			answer = add_nums(integer1, integer2);
			break;
		case '-':
			answer = subtract(integer1, integer2);
			break;
		case '*':
			answer = multiply(integer1, integer2);
			break;
		case '/':
			answer = divide(integer1, integer2);
			break;
		default:
			console.log('default');
			break;
	}


	console.log("first = " + integer1);
	console.log("second = " + integer2);
	console.log("operator = " + operator_array.toString());
	console.log("position of op = " + operator_pos);
	console.log("answer = " + answer);
} else {
	console.log('');
} 

function add_nums(first, second){
	console.log("adding");
	return first + second;
}
function subtract(first, second){
	return first - second;
}
function multiply(first, second){
	return first * second;
}
function divide(first, second){
	return first / second;
}

