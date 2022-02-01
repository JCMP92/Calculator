const numBtns = document.querySelectorAll('.num-bnt');
const clearBtn = document.getElementById('clear');
const delBtn = document.getElementById('delete');
const dotBtn = document.getElementById('.');
const calcDisplay = document.getElementById('clac-display');


numBtns.forEach(btn => btn.addEventListener('click', btnsFunc));
clearBtn.addEventListener('click', clearDisp);
delBtn.addEventListener('click', deleteLast);
dotBtn.addEventListener('click', dotFunc);


let storedVal = ' ';

function btnsFunc() {
        if (calcDisplay.textContent === '0') {
            calcDisplay.textContent = this.id;
        } else {
            calcDisplay.textContent = calcDisplay.textContent + this.id;
        }
    console.log(this.id); 
    storedVal =  calcDisplay.textContent;
};

function clearDisp() {
    calcDisplay.textContent = '0';
    storedVal =  calcDisplay.textContent;
};

function deleteLast() {
    calcDisplay.textContent = calcDisplay.textContent.toString().slice(0,-1);
    storedVal =  calcDisplay.textContent;
};

function dotFunc() {
    if (calcDisplay.textContent.includes('.')) {
        return 
    } else {
    calcDisplay.textContent = calcDisplay.textContent + '.'; 
    }
   
};



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



