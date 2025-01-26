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
let previousButtonPressed

function add(a, b) {
    return Number(a) + Number(b);
}

function sub(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate() {
    if(num1 && !operator) {
        updateDisplay(num1)
    }
    if(!num1 || !operator) {
        console.log('here')
        return 
    }
    if(!num2) {
        console.log('display',display.textContent)
        num2 = display.textContent
    } 
    let result
    if(operator === '+') {
        result = add(num1, num2)
    }
    if(operator  === "-") {
        result = sub(num1, num2)
    }
    if(operator === 'x') {
        result = multiply(num1, num2)
    }
    if(operator === '/') {
        result = divide(num1, num2)
    }
    num1= ""
    num2= ""
    operator = ""
    updateDisplay(result)
};

const display= document.querySelector(".display");

function updateDisplay(input){
    console.log(input)
    if(previousButtonPressed === "operator"){
        return
    }
    if(previousButtonPressed!="operator" && previousButtonPressed != 'equals'){
        display.textContent= display.textContent + input // take present content and add more to it.
    } else {
        display.textContent= input
    }
};

function clearDisplay(){
    display.textContent= ""
};

const keys = document.querySelectorAll('.number')
keys.forEach((button) => {
    button.addEventListener('click', () => {
        previousButtonPressed= button.value
        updateDisplay(button.value) 
    });
});

const operatorKeys = document.querySelectorAll('.operator')
operatorKeys.forEach((button) => {
    button.addEventListener('click', () => {
        previousButtonPressed= 'operator'
        updateDisplay(button.value)
    });
});

const clear= document.querySelector("#clear")
clear.addEventListener('click', () => {
    clearDisplay()
});

const addition= document.querySelector("#add")
addition.addEventListener('click', () => {
    operator= "+"
    previousButtonPressed= "operator"
    if (!num1){
        num1 = display.textContent
    }

    clearDisplay();
    })
    

const subtract= document.querySelector("#subtract")
subtract.addEventListener('click', () => {
    operator= "-"
    previousButtonPressed= "operator"
   
    clearDisplay()
    });

const product= document.querySelector("#multiply")
product.addEventListener('click', () => {
    operator= '*'
    operate(operator);
    previousButtonPressed= "operator"
    clearDisplay()
});

const division= document.querySelector("#divide")
division.addEventListener('click', () => {
    operator= "/"
    previousButtonPressed= "operator"
    clearDisplay()
});

const allClear=document.querySelector("#allclear")
allClear.addEventListener('click', () => {
    clearDisplay() 
    num1= ""
    num2= ""
    operator = ""
});

const equal=document.querySelector("#exe")
equal.addEventListener('click', () => {
    previousButtonPressed= "equals"
    operate()
});