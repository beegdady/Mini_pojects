

const dText = document.getElementById('dText');
const dRes = document.getElementById('dRes');
var buttons = document.getElementsByClassName('btn');
let currentValue = "";



for (i = 0; i < buttons.length; i++){
    const button = buttons[i];


    button.addEventListener('click', function() {
        let buttonValue = button.value;
        let dispVal = dText.value;

        if (buttonValue == 'C'){
            currentValue = "";
            // dText.value = currentValue;

        }else if (buttonValue == '/'){
            currentValue += '÷';
           
        
        }else if (buttonValue == 'x'){
            currentValue += '*';

        }else if(buttonValue == '%'){
            let number = Number(dispVal);

            if (isNumeric(number)) {
                let result = number/100;
                dRes.value = result;
            }
        }else if(buttonValue =='()'){
            if (!dispVal.includes('(')){
                currentValue += '(';
            }else{
                let lastChar = dispVal.slice(-1);
                if (!isNaN(lastChar) || lastChar === ')'){
                    currentValue += ')'
                }else{
                    currentValue += '('
                }
            }
        }else if(buttonValue == '='){
            let expression = dispVal;
            dRes.value = calculateExpression(expression)
        }else{
            currentValue += buttonValue;
            console.log(currentValue);
        }

        dText.value = currentValue;
        
    });
}


function isNumeric(input) {
    return /^\d+$/.test(input);
}

function multiply(input){
    let result = input;
}

function calculateExpression(expression) {
    const precedence = {
        '^': 4,
        '*': 3,
        '/': 3,
        '+': 2,
        '-': 2,
    };

    const numberStack = [];
    const operatorStack = [];

    function applyOperator() {
        const operator = operatorStack.pop();
        const right = numberStack.pop();
        const left = numberStack.pop();
        switch (operator) {
            case '+':
                numberStack.push(left + right);
                break;
            case '-':
                numberStack.push(left - right);
                break;
            case '*':
                numberStack.push(left * right);
                break;
            case '/':
                numberStack.push(left / right);
                break;
            case '^':
                numberStack.push(Math.pow(left, right));
                break;
            default:
                break;
        }
    }

    for (let i = 0; i < expression.length; i++) {
        const char = expression.charAt(i);

        if (char === ' ') {
            continue; // Skip whitespace
        }

        if (char in precedence) {
            while (
                operatorStack.length > 0 &&
                precedence[char] <= precedence[operatorStack[operatorStack.length - 1]]
            ) {
                applyOperator();
            }
            operatorStack.push(char);
        } else if (char === '(') {
            operatorStack.push(char);
        } else if (char === ')') {
            while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
                applyOperator();
            }
            operatorStack.pop(); // Pop the '('
        } else {
            let num = '';
            while (i < expression.length && /[0-9.]/.test(expression.charAt(i))) {
                num += expression.charAt(i);
                i++;
            }
            i--; // Move back one step to avoid skipping the next character.
            numberStack.push(parseFloat(num));
        }
    }

    while (operatorStack.length > 0) {
        applyOperator();
    }

    if (numberStack.length === 1) {
        return numberStack[0];
    } else {
        return "Error";
    }
}

// Example usage:
const userInput = "3 + 4 * (2 - 1)";
const result = calculateExpression(userInput);
console.log("Result:", result);
