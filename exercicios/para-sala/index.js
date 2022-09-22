function convertCelsiusToFahrenheit(temperature){
    var tempConverte = temperature * 9 / 5 + 32;
     
    return tempConverte
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
function sum(num1,num2){
    if(num1==num2){
        return 3*(num1+num2)
    }
    return num1 + num2
}
function revert(string){
    return string.split("").reverse().join("")
}
//Crie uma classe chamada Calculadora;
//Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
// Use a criatividade e crie um último método que utilize pelo menos dois dos métodos criados anteriormente.
module.exports = {convertCelsiusToFahrenheit, checkEvenNumber, sum, revert};
