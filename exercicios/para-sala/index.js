//exercício 1
// 1) Escreva um teste para função abaixo:

function convertCelsiusToFahrenheit(temperature){
  var tempConverted = temperature * 9 / 5 + 32;

  return tempConverted;
}


// exercício 2
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

//exercício 3
//3) Escreva ao menos um teste para a função abaixo:


function jokenpo(jogada1, jogada2){

  if (jogada1 === jogada2){
      return 'Empate!';
  } 
  if ((jogada1 === 'pedra' && jogada2 === 'papel')
      || (jogada1 === 'papel' && jogada2 === 'tesoura')
      || (jogada1 === 'tesoura' && jogada2 === 'pedra')) {
    return 'Jogador 2 venceu!';
  }

  return 'Jogador 1 venceu!';
}

//exercício 4
//4) Escreva um para a função abaixo, ela retorna as possíveis combinações de caracteres de uma string em um array.

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

//exercício 5
//5) Escreva um teste para as funções abaixo:

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

//USANDO TDD
//6) Considere o teste abaixo e escreva a função para que o teste passe.
// A função soma dois números, caso os números sejam iguais, a soma é triplicada


//7) Considere o teste abaixo e escreva a função para que o teste passe.



//8) Usando TDD:
//Crie uma classe chamada Calculadora;
//Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
//Use a criatividade e crie um último método que utilize pelo menos dois dos métodos criados anteriormente.


//9) Escreva um teste (e depois a função) para uma função calcule como um troco (centavos) será dado em moedas. A função deve receber o valor do troco, e um array com as moedas disponíveis.
function calculadora( num1, num2){
  function soma(x, y)
  {return (x+y);
  }
  
  function subtracao(x, y)
  {return (x-y);
  }
  
  function multiplicacao(x, y)
  { return (x*y);
  }
  
  function divisao(x, y)
  { return (x/y);
  }
}

module.exports = {convertCelsiusToFahrenheit, checkEvenNumber, generateCombinations, jokenpo, allKeys, isObject, calculadora};