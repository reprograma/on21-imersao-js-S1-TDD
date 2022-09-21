//1) Escreva um teste para função abaixo:

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

function sum(num1, num2) {
    if(num1 == num2) {
        return 3*(num1+num2)
    }
    return num1+num2
}

function revert(string) {
    return string.split("").reverse().join("")
}

function jokenpo(jogador1, jogador2){

    if (jogador1 === jogador2){
        return 'Empate!';
    }

    if ((jogador1 === 'pedra' && jogador2 === 'papel')
        || (jogador1 === 'papel' && jogador2 === 'tesoura')
        || (jogador1 === 'tesoura' && jogador2 === 'pedra')) {
      return 'Jogador 2 venceu!';
   }

   return 'Jogador 1 venceu!';
}

// 4) Escreva um para a função abaixo, ela retorna as possíveis combinações de caracteres de uma string em um array.

function generateCombinations(word)
{
    const chars = [];
    for (let x = 0, y = 1; x < word.length; x++, y++) 
    {
        chars[x] = word.substring(x, y);
    }
    const combinations = [];
    let temp = "";
    const combinationsLen = Math.pow(2, chars.length);

    for (let i = 0; i < combinationsLen; i++)
    {
        temp = "";
        for (let j = 0; j < chars.length; j++) {
            if ((i & Math.pow(2,j))){ 
                temp += chars[j];
            }
        }
        if (temp !== "")
        {
            combinations.push(temp);
        }
    }
    
    return combinations;
}


// 5) Escreva um teste para as funções abaixo:

function allKeys(obj) {
    if (!isObject(obj)) {
        return [];
    }
    
    const keys = [];
    for (const key in obj){
        keys.push(key);
    } 
    return keys;
}
function isObject(obj) {
    const type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

module.exports = {
    convertCelsiusToFahrenheit,
    checkEvenNumber, 
    sum,
    revert,
    jokenpo,
    generateCombinations,
    allKeys,
    isObject
};