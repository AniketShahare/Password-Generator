const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.innerText);
    alert("Copied the Password:" + resultEl.innerText);
})

generateEl.addEventListener('click', () => {
    console.log(uppercaseEl.checked);
    generatePassword(randomFunc.lower(), randomFunc.upper(), randomFunc.number(), randomFunc.symbol(), lengthEl.value );
})


// Function for generating Password
function generatePassword(lower, upper, number, symbol, length) {
    let value = lower+upper+number+symbol;
    console.log(value);
    let randompass = '';
    for (let i = 0; i < length; i++) {
       randompass = randompass + value[Math.floor(Math.random()*value.length)];
    }
    resultEl.innerText = randompass;
}



// Function for getting random Lower case
function getRandomLower() {
    let password = '';
    if (lowercaseEl.checked) {
        let value = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < value.length/2; i++) {
          password = password + value[Math.floor(Math.random()*25)];  
        }
        return password;
    } else {
        return password;
    }
}


// Function for getting random Upper case
function getRandomUpper() {
    let password = '';
    if (uppercaseEl.checked) {
        let value = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < value.length/2; i++) {
          password = password + value[Math.floor(Math.random()*25)];  
        }
        return password;
    } else {
        return password;
    }
    
}


// Function for getting random number
function getRandomNumber() {
    let password = '';
    if (numbersEl.checked) {
        let value = '0123456789';
        for (let i = 0; i < value.length; i++) {
          password = password + value[Math.floor(Math.random()*value.length)];  
        }
        return password;
    } else {
        return password;
    }
}



// Function for getting random symbol
function getRandomSymbol() {
    let password='';
    if(symbolsEl.checked){
        let value = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        for(let i = 0; i < value.length; i++){
            password = password + value[Math.floor(Math.random()*value.length)];
        }
        return password;
        } else {
            return password;
        }
}