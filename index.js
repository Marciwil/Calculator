//Pseudocode
// Make a on-screen caluculator
//Math Functions: Add, Subtract, Multiply, Divide
//Math function example: 3 + 5; Create a variable for each: (a) (+) (b) 
//Create an operate function that takes the operator and two numbers and then
//calls one of the above functions on the numbers.

//Create functions that populate a display when you click a button.
//Store the display content (number) in a variable

//Now make the calculator functional!
//Store the 1st & 2nd numbers input by user
//Operate on them when the user press (=) with the specific operator.

//!The Caluculator should evaluate more than one number pair at a time.
//!Process: evaluate first pair = results; results + next number = results etc.
//!Round long decimels to avoid errors
//! (=) shouldn't process without an evaluation
//!Pressing clear should wipe out the screen
let num1= 0;
let num2= 0;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}



let diplay= document.getElementById("display");
