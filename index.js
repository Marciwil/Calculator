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

let num1 // starting value numbers
let num2
let operator= "";// requires an operator to be entered in

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

function operate(num1 , num2) {
    let result
    if(operator === '+'){
        result = add(num1, num2)
    }
    
    return result
}

const display= document.querySelector(".display");

function updateDisplay(input){
    console.log(input)
    display.textContent= display.textContent + input // take present content and add more to it.
};

function clearDisplay(){
    display.textContent= ""
}

const keys = document.querySelectorAll('.number')
keys.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.value) 
    });
});

const clear= document.querySelector("#clear")
clear.addEventListener('click', () => {
    clearDisplay()
});

const addition= document.getElementById("add")
addition.addEventListener('click', add)