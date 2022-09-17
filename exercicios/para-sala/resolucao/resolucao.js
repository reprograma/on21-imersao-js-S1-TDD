//1) Escreva um teste para função abaixo:

function convertCelsiusToFahrenheit(temperature){
    var tempConverted = temperature * 9 / 5 + 32;
     
    return tempConverted
}

//2) Escreva ao menos um teste para a função abaixo:

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
    if(num1 == num2) {
        return 3*(num1+num2)
    }
    return num1+num2
}

function revert(string) {
    return string.split("").reverse().join("")
}

class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2
    }

    soma() {
        return this.num1 + this.num2
    }

    subtracao() {
        return this.num1 - this.num2
    }

    multiplicacao() {
        return this.num1 * this.num2
    }

    divisao() {
        return this.num1 / this.num2
    }

    fatoracao() {
        let fat = this.num1;
        for(let i = 0; i < this.num1; i++){
            fat = fat * (this.num1--)
        }
        return fat
    }
}

module.exports = {
    convertCelsiusToFahrenheit,
    checkEvenNumber, 
    sum,
    revert,
    Calculadora
};