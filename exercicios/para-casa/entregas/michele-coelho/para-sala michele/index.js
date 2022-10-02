
function convertCelsiusToFahrenheit(temperature) {
    var tempConverte = temperature * 9 / 5 + 32;
    return tempConverte;
}


function checkEvenNumber(num) {
    let result = '';

    if (isNaN(num)) {
        result = num + " não é um número";
    } else {
        if (num % 2 == 0) {
            result = num + " é um número par";
        } else {
            result = num + " é um número ímpar";
        }
    }

    return result;
}

//A função soma dois números, caso os números sejam iguais, a soma é triplicada

const sum = (num1, num2) => {
    if (num1 == num2) {
        return 3 * (num1 + num2);
    }
    return num1 + num2;
}


//Quesão 7
const revert = (str) => {
    return str.split('').reverse().join("");
}

module.exports = { convertCelsiusToFahrenheit, sum, checkEvenNumber, revert };
