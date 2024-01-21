const screen = document.querySelector('.screen')
const numberKeys = [...document.querySelectorAll('.numberKeys')]
const operateKeys = [...document.querySelectorAll('.key-event')]
const enter = document.querySelector('.enter')



const calc = {
    keyListener : '',
    firstNumber : '',
    secondNumber : '',
    operation : '',
    result: 0,
}



keyListener()
definer()
equals()




function keyListener(){
    numberKeys.forEach((key) => {
        key.addEventListener('click', () => {
            calc.keyListener += (key.innerText)

            if(calc.firstNumber){
                calc.secondNumber = calc.keyListener
                console.log(calc)
            }


            display()
        })
    })
}

// function firstNumber(){
//     calc.firstNumber = calc.keyListener
//     calc.keyListener = ''
// }


function definer(){
    operateKeys.forEach((opKey) =>{

        opKey.addEventListener('click', () => {
                screen.classList.add('screen-display')
                    calc.firstNumber = calc.keyListener
                    calc.keyListener = ''

                    calc.operation = opKey.innerText
                    console.log(calc)
                    return screen.innerHTML = display()
                
            
            }
        )
    })
}



function operate(operator, firstNumber, secondNumber){
    operator = calc.operation
    firstNumber = calc.firstNumber
    secondNumber = calc.secondNumber
    switch(operator){
        case '+':
            calc.result = add(calc.firstNumber, calc.secondNumber)
            return calc.result;
        
        case '-':
            calc.result = subtract(calc.firstNumber, calc.secondNumber)
            return calc.result;
        
        case 'x':
            calc.result = multiply(calc.firstNumber, calc.secondNumber)
            return calc.result;
        
        case '/':
            calc.result = divide(calc.firstNumber, calc.secondNumber)
            return calc.result;
        
    }
}


function display(){

    if(calc.firstNumber){
        return screen.innerHTML = 
        `
            <span class="first-number">${calc.firstNumber}
            <span class="operator">${calc.operation}</span>
            </span>
            <span class="second-number">${calc.secondNumber}</span>
        `
    }

    else{
        return  screen.innerText = calc.keyListener
    }
}

function equals(){
    enter.addEventListener('click', () => {
        operate()
        console.log(calc)
        return screen.innerHTML = 
        `
            <span class="operator">=</span>
            </span>
            <span class="second-number">${calc.result}</span>
        `
    })
}




function add(x, y){
    return  Number(x) + Number (y)
}

function subtract(x,y) {
    return x - y
}

function multiply(x,y){
    return x * y
}

function divide (x,y){
    return (x / y).toFixed(2)
}






//function operate(operator){
    //     operator = calc.operation
    //     switch(operator){
    //         case '+':
    //             return calc.result = add(calc.firstNumber, calc.secondNumber);
    //         case '-':
    //             return subtract(calc.firstNumber, calc.secondNumber);
    //         case 'x':
    //                 return subtract(calc.firstNumber, calc.secondNumber);
    //         case '/':
    //             return subtract(calc.firstNumber, calc.secondNumber);
    //         case '=':
    //             return console.log('D')
    //     }
    // console.log(calc.result)
    // }