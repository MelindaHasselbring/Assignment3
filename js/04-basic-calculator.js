/*eslint-env browser*/

/*eslint-env browser*/
/*
The Basic Calculator (20 points)
In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:*/

//1.	Prompt the user for a number and store that in a variable.

//2.	Prompt the user for a second number and store that in a variable.

//3.	Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.

//4.	Create a new named function called calculate() that accepts 3 parameters.

//5.	Call the calculate function and pass in the 3 variables as parameters.
//HINT: You will need to convert the 2 numbers from strings to numbers.

//6.	Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.


//7.	Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.



var firstNum;
var operand = 'operand';
var secondNum;

//1.	Prompt the user for a number and store that in a variable.
// Will keep asking for the first number if non number was entered
while(isNaN(firstNum)){
    firstNum = window.prompt("Please enter a valid number");
}



//3. Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
// Will keep asking for a valid operand which should be one of the following +-/*
while(!("+-/*".indexOf(operand) !== -1)){
    operand = window.prompt("Please enter a valid operation such as +, -, / or *");
}

//2.	Prompt the user for a second number and store that in a variable.
// Will keep asking for the first number if non number was entered
while(isNaN(secondNum)){
    secondNum = window.prompt("Please enter a valid number");
}

// Use eval to get the result... We have to make sure that eval does not execute any unsafe code

window.document.write(firstNum + " " + operand + " " + secondNum + " = " + eval(firstNum + " " + operand + " " + secondNum));

//4.	Create a new named function called calculate() that accepts 3 parameters.
// function calculate(num1, num2, operand) {
// 	"use strict";
// 	firstNum = Number(num1);
// 	secondNum = Number(num2);
// 	operand  = "";
//
// 	switch (operand) {
//     case "plus":
//         operand = "+";
// 		break;
// 	case "minus":
// 		operand = "-";
// 		break;
// 	case "multiply":
// 		operand = "*";
// 		break;
// 	case "divide":
// 		operand = "/";
// 	    break;
// 	default:
//         operand = "c";
// 	}
// }
// calculate(firstNum, secondNum, operand);
//
// function add() {
// 	"use strict";
// 	result = firstNum + secondNum;
// 	window.document.write(firstNum + " + " + secondNum + " = " + result);
// }
// add(operation);
//
// function minus(operation) {
// 	"use strict";
// 	result = firstNum - secondNum;
// 	window.document.write(firstNum + " + " + secondNum + " = " + result);
// }
// minus(operation);
//
// function divide(operation) {
// 	"use strict";
// 	result = firstNum / secondNum;
// 	window.document.write(firstNum + " + " + secondNum + " = " + result);
// }
// divide(operation);
//
// function multiply(operation) {
// 	"use strict";
// 	result = firstNum * secondNum;
// 	window.document.write(firstNum + " + " + secondNum + " = " + result);
// }
// multiply(operation);
//
// function clear(operation) {
// 	"use strict";
// 	result = 0;
// 	window.document.write(result);
// }
// clear(operation);
