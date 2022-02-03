//SELECTORS-------------------------------------
const numBtns = document.querySelectorAll('.num-btn');
const operBtns = document.querySelectorAll('.operator-btn');
const clearBtn = document.getElementById('clear');
const delBtn = document.getElementById('delete');
const dotBtn = document.getElementById('.');
const equalBtn = document.getElementById('=');
const calcDisplay = document.getElementById('clac-display');
const secondDisplay = document.getElementById('second-display');

//EVENT LISTENERS--------------------------------
numBtns.forEach(btn => btn.addEventListener('click', btnsFunc));
operBtns.forEach(btn => btn.addEventListener('click', operatorFunc));
clearBtn.addEventListener('click', clearDisp);
delBtn.addEventListener('click', deleteLast);
dotBtn.addEventListener('click', dotFunc);
equalBtn.addEventListener('click', equalFunc);
window.addEventListener('keydown', keyboardPressed)

//OPERANDS FUNCTIONS-----------------------------
function sum (a, b){
    return a + b;	
};
function subtract (a, b){
    return a - b;	
};
function multiply (a, b){
    return a * b;	
};
function divide (a, b){
    return a / b;	
};

function operand (a, b, c){
    switch (c) {
        case '+':
            return sum (a, b);
        case '-':
            return subtract (a, b);	
        case '*':
            return multiply (a, b);	 
        case '/':
            if (b === 0) {
                alert("You can't divide by 0!");
              } else {
                return divide(a, b);	
              }   
        default:
            return null;
    }
};

//VARIABLES TO STORE VALUES--------------------
let storedVal = ' ';
let operatorVal = ' ';
let secondVal = ' ';
let result = ' ';
let resultCounter = 0;
let operandCounter = 0;

//BUTTONS AND KEY FUNCTIONS--------------------
function btnsFunc() {
        if (resultCounter !== 0) {
            clearDisp();
        }
         if (calcDisplay.textContent === '0' ) {
            calcDisplay.textContent = this.id;
        } else {
            calcDisplay.textContent = calcDisplay.textContent + this.id;
        };
    console.log(this.id); 
};

function keyboardFunc(value) {
    if (resultCounter !== 0) {
        clearDisp();
    }
     if (calcDisplay.textContent === '0' ) {
        calcDisplay.textContent = value;
    } else {
        calcDisplay.textContent = calcDisplay.textContent + value;
    };
console.log(value); 
};

function operatorFunc() {
    if (operandCounter !== 0) {
        equalFunc();
        resultCounter = 0;
    } 
    storedVal =  calcDisplay.textContent;
    operatorVal = this.id;
    secondDisplay.textContent = storedVal + ' ' + this.id;
    calcDisplay.textContent = '0';
    resultCounter = 0;
    operandCounter ++;
    
}

function keyboardOperatorFunc(e) {
    if (operandCounter !== 0) {
        equalFunc();
        resultCounter = 0;
    } 
    storedVal =  calcDisplay.textContent;
    operatorVal = e.key;
    secondDisplay.textContent = storedVal + ' ' + e.key;
    calcDisplay.textContent = '0';
    resultCounter = 0;
    operandCounter ++;
    
}

function clearDisp() {
    calcDisplay.textContent = '0';
    secondDisplay.textContent =' ';
    storedVal = ' ';
    operatorVal = ' ';
    secondVal = ' ';
    result = ' ';
    resultCounter = 0;
    operandCounter = 0;
};

function deleteLast() {
    calcDisplay.textContent = calcDisplay.textContent.toString().slice(0,-1);
};

function dotFunc() {
    if (resultCounter !== 0) {
        clearDisp();
    }
    if (calcDisplay.textContent.includes('.')) {
        return 
    } else {
    calcDisplay.textContent = calcDisplay.textContent + '.'; 
    }
   
};

function equalFunc() {
    if (resultCounter !== 0) {
        return;
    }
    secondVal =  calcDisplay.textContent;
    result = roundedNumber(operand (parseFloat(storedVal), parseFloat(secondVal), operatorVal));
    calcDisplay.textContent = result;
    secondDisplay.textContent =  storedVal + ' ' + operatorVal + ' ' + secondVal + ' ' + '=';
    resultCounter ++;
}

//ROUND DECIMAL NUMBERS--------------------
function roundedNumber(num) {
    return Math.round(num * 10000) / 10000
}

//DEPENDING ON THE EVENT KEY, THIS FUNCTION CALLS ANOTHER FUNCTION--------------------
function keyboardPressed(e) {
    if (e.key >= 0 && e.key <= 9) {
    keyboardFunc(e.key);
    } else if  (e.key === '.') {
        dotFunc();
    } else if (e.key === '=' || e.key === 'Enter') {
        equalFunc();
    } else if (e.key === 'Backspace') {
        deleteLast();
    } else if (e.key === 'Escape') {
        clearDisp();
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        keyboardOperatorFunc(e);
    }
}
