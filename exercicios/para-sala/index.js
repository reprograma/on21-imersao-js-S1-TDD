function convertCelsiusToFahrenheit(temperature){
    var tempConvert = temperature * 9 / 5 + 32;
     
    return tempConvert
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

function sum(num1, num2) {
    if(num1==num2) {
       return 3*(num1+num2)

    }
    return num1+num2
}

  function revert(string) {
    return string.split("").reverse().join("")
  }
   

class Calculadora {
    soma = (num1, num2) => num1+num2
    subtrai = (num1, num2) => num1-num2
    multiplica = (num1, num2) => num1*num2
    divide = (num1, num2) => num1/num2
    fatorial = (num1) => {
        if(num1 === 0) {
            return 1
        }
        return num1 * this.fatorial(num1 - 1)
    }
    somaDivide = (num1, num2, num3) = {
        const soma = this.soma(num1)
        
     }
}
    
module.exports = {convertCelsiusToFahrenheit,checkEvenNumber,sum,revert,};
module.exports = {Calculadora};