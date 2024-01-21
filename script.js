const screen = document.querySelector('.screen')
const numberKeys = [...document.querySelectorAll('.numberKeys')]
const operateKeys = [...document.querySelectorAll('.key-event')]


const calc = {
    keyListener : '',
    firstNumber : '',
    secondNumber : '',
    operation : '',
    result: 0
}



keyListener()
definer()





function keyListener(){
    numberKeys.forEach((key) => {
        key.addEventListener('click', () => {
            calc.keyListener += (key.innerText)
            console.log(calc)
            if(calc.firstNumber){
                calc.secondNumber = calc.keyListener
                return screen.innerHTML = 
                `
                    <span class="first-number">${calc.firstNumber}
                    <span class="operator">${calc.operation}</span>
                    </span>
                    <span class="second-number">${calc.keyListener}</span>
                `
            }
            else{
            return  screen.innerText = calc.keyListener
            }
        })
    })
}

function firstNumber(){
    calc.firstNumber = calc.keyListener
    calc.keyListener = ''
    calc.secondNumber = calc.keyListener
}


function definer(){
    operateKeys.forEach((opKey) =>{
        opKey.addEventListener('click', () => {
                firstNumber()
                calc.operation = opKey.innerText
                screen.classList.add('screen-display')

                if(opKey.innerText == '='){ 
                    return screen.innerHTML = 
                    `
                    <span class="operator">${calc.operation}</span>
                    </span>
                    <span class="second-number">${calc.result}</span>
                    `
                }

                else{
                
                    return screen.innerHTML = 
                    `
                    <span class="first-number">${calc.firstNumber}
                    <span class="operator">${calc.operation}</span>
                    </span>
                    <span class="second-number">${calc.keyListener}</span>
                    `
                }
        })
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

