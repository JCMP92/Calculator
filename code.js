const numBtns = document.querySelectorAll('.num-btn');
const operBtns = document.querySelectorAll('.operator-btn');
const clearBtn = document.getElementById('clear');
const delBtn = document.getElementById('delete');
const dotBtn = document.getElementById('.');
const equalBtn = document.getElementById('=');
const calcDisplay = document.getElementById('clac-display');
const secondDisplay = document.getElementById('second-display');


numBtns.forEach(btn => btn.addEventListener('click', btnsFunc));
operBtns.forEach(btn => btn.addEventListener('click', operatorFunc));
clearBtn.addEventListener('click', clearDisp);
delBtn.addEventListener('click', deleteLast);
dotBtn.addEventListener('click', dotFunc);
equalBtn.addEventListener('click', equalFunc);


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
                throw "Can't divide by 0!"
              } else {
                return divide(a, b);	
              }   
        default:
            return null;
    }
};


let storedVal = ' ';
let operatorVal = ' ';
let secondVal = ' ';
let result = ' ';
let resultCounter = 0;


function btnsFunc() {
        if (calcDisplay.textContent === '0') {
            calcDisplay.textContent = this.id;
        } else {
            calcDisplay.textContent = calcDisplay.textContent + this.id;
        }
    console.log(this.id); 
};

function operatorFunc() {
    storedVal =  calcDisplay.textContent;
    operatorVal = this.id;
    secondDisplay.textContent = storedVal + this.id;
    calcDisplay.textContent = '0';
    resultCounter = 0;

}

function clearDisp() {
    calcDisplay.textContent = '0';
    secondDisplay.textContent =' ';
};

function deleteLast() {
    calcDisplay.textContent = calcDisplay.textContent.toString().slice(0,-1);
};

function dotFunc() {
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
    resultCounter ++;
}

function roundedNumber(num) {
    return Math.round(num * 10000) / 10000
  }

