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
            break;
    }
};



