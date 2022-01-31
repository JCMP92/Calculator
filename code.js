function operand (a, b, c){
    let result = 0;
    switch (c) {
        case '+':
            result = a + b;	
            break;
        case '-':
            result = a - b;	
            break; 
        case '*':
            result = a * b;	
            break;    
        case '/':
            if (b === 0) {
                throw "Can't divide by 0!"
              } else {
                result = a / b;	
              }
              break;    
        default:
            break;
    }
    return result;
};



