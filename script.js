const screen = document.querySelector('.screen')
const numberKeys = [...document.querySelectorAll('.numberKeys')]
const operateKeys = [...document.querySelectorAll('.key-event')]
const enter = document.querySelector('.enter')
const clearBtn = document.querySelector('#clear')
const deleteBtn = document.querySelector('#delete')
const allClearBtn = document.querySelector('#allClear')


 

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


clearBtn.addEventListener('click', () => { 
    if(calc.firstNumber){
        calc.secondNumber = ''
        calc.keyListener = ''

    }
    return display()

})

allClearBtn.addEventListener('click', () => {
    calc.keyListener = ''
    calc.firstNumber = 0
    calc.secondNumber = 0
    calc.operation = ''
    calc.result = 0
    screen.classList.remove('screen-display')
    return screen.innerText = '0'

})

deleteBtn.addEventListener('click',(arr) => {
    arr = [...calc.keyListener]
    arr.pop()
    calc.keyListener = arr.join('')
    if(calc.secondNumber){
        calc.secondNumber = calc.keyListener
    }
   else if(calc.firstNumber){
        let strArr = Array.from(calc.firstNumber.toString())
        strArr.pop()
        calc.firstNumber = strArr.join('')
        calc.keyListener = calc.firstNumber
        calc.firstNumber = ''
    }

    return display()
})




//* Listens Numbers Start //

function keyListener(){
    numberKeys.forEach((key) => {
        key.addEventListener('click', () => {

            calc.keyListener += (key.innerText)

            if(calc.firstNumber){
                calc.secondNumber = calc.keyListener
                return display()
            }
            return display()
        })
    })
}

//* Listens Numbers End //



//* Declares operation START // 

function definer(){
    operateKeys.forEach((opKey) =>{

        opKey.addEventListener('click', () => {

                screen.classList.add('screen-display')
                    if(calc.firstNumber){
                        calc.keyListener = ''
                    }

                    else{
                        calc.firstNumber = calc.keyListener
                        calc.keyListener = ''
                    }
                    calc.operation = opKey.innerText
                   
                    operate()

                    if(calc.result != 0){
                        calc.firstNumber = calc.result
                        operate()
                        calc.secondNumber = ''
                    }

                    return display()
                    
            }
        )
    })
}

//* Declares operation START // 



//* Operations START // 

function operate(operator, firstNumber, secondNumber){
    operator = calc.operation
    firstNumber = calc.firstNumber
    secondNumber = calc.secondNumber
    switch(operator){
        case '+':
            calc.result = add(firstNumber, secondNumber)
            return calc.result;
        
        case '-':
            calc.result = subtract(calc.firstNumber, calc.secondNumber)
            return calc.result;
        
        case 'x':
            calc.result = multiply(calc.firstNumber, calc.secondNumber)
            return calc.result;
        
        case '/':
            if(calc.secondNumber){
            calc.result = divide(calc.firstNumber, calc.secondNumber)
            return calc.result
            }
            else{
                if(calc.keyListener == ''){
                    return alert('Please Enter A Number to Divide')
                }
                else{
                calc.secondNumber = calc.keyListener
                calc.result = divide(calc.firstNumber, calc.secondNumber)
                return calc.result;
            }
            }
        
    }
}

//* Declares operation START // 



//* Display On Screen START // 

function display(){

    if(calc.firstNumber != ''){
        return screen.innerHTML = 
        `
            <span class="first-number">${calc.firstNumber}
            <span class="operator">${calc.operation}</span>
            </span>
            <span class="second-number">${calc.keyListener}</span>
        `
    }

    else{
        screen.classList.remove('screen-display')
        return  screen.innerText = calc.keyListener
    }
}

//* Display On Screen END // 




//* Equals Button kind of enter START //

function equals(){
    enter.addEventListener('click', () => {
        operate()

        if(!calc.firstNumber){

            console.log('if çalışltı')
            calc.result = calc.keyListener
            return screen.innerHTML = 
            `
                <span class="operator">=</span>
                </span>
                <span class="second-number">${calc.result}</span>
            `

        }


        else{
            calc.firstNumber = calc.result
            calc.secondNumber = ''
            calc.keyListener = ''
            console.log('else çalışltı', calc)
            return screen.innerHTML = 
            `
                <span class="operator">=</span>
                </span>
                <span class="second-number">${calc.result}</span>
            `
        }

    })
}

//* Equals Button kind of enter END //




// * Math operations START //

function add(x, y){
    return  Number(x) + Number (y)
}

function subtract(x,y) {
    return x - y
}

function multiply(x,y){
    if(((x * y) == (x * y).toFixed(2))){
        return x * y
    }
    else{
        return (x * y).toFixed(2)
    }
}

function divide (x,y){
    if((x % y) == 0){
        return x / y
    }
    else{
        return (x / y).toFixed(2)
    }
}

// * Math operations END //
