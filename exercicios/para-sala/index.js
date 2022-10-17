// 1) Escreva um teste para função abaixo:
function convertCelsiusToFahrenheit(temperature){
    var tempConverted = temperature * 9 / 5 + 32;
     
    return tempConverted
}

// 2) Escreva ao menos um teste para a função abaixo:
function checkEvenNumber(num){
    let result = '';

    if(isNaN(num)) {
        result = num + " is not a number";
    } else {
        if (num % 2 == 0) {
            result = num + " is not an even number";
        } else {
            result = num + " is an even number";
        }
    }

    return result;
}

// ------------------ exercicios de tdd --------------------

function sum(num1, num2) {
    if(num1==num2) {
        return 3*(num1+num2)
    }
    return num1+num2
}

function revert(string) {
    return string.split("").reverse().join("")
}

module.exports = {
    convertCelsiusToFahrenheit,
    checkEvenNumber,
    sum,
    revert
};