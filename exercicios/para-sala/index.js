function convertCelsiusToFahrenheit(temperature){
    var tempConverted = temperature * 9 / 5 + 32;
     
    return tempConverted
}

function checkEvenNumber(num){
    let result = '';

    if(isNaN(num)) {
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

module.exports = convertCelsiusToFahrenheit, checkEvenNumber;