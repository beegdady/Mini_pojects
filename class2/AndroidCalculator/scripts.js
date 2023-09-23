

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
        }
        
        else{
            currentValue += buttonValue;
            console.log(currentValue);
        }

        dText.value = currentValue;
        
    });
}


function isNumeric(input) {
    return /^\d+$/.test(input);
}





const togSci = document.querySelector('.sci-more');
const togSci1 = document.querySelector('.sci-more1');

const scient = document.querySelector('.scientific-1');
const scient1 = document.querySelector('.scientific-2');


togSci.addEventListener('click', ()=> {
    scient.style.display = 'none';
    scient1.style.display = 'block';
});

togSci1.addEventListener('click', ()=> {
    scient1.style.display = 'none';
    scient.style.display = 'block';
});


