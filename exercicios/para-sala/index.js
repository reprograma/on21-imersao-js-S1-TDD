const convertCelsiusToFahrenheit = (temperature) => {
  var tempConverte = temperature * 9 / 5 + 32;
   
  return tempConverte
}

const checkEvenNumber = (num) => {
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

function sum(num1, num2) {
  if(num1==num2) {
      return 3*(num1+num2)
  }
  return num1+num2
}

function revert(string) {
  return string.split("").reverse().join("")
}

//Crie uma classe chamada Calculadora;
//Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
// Use a criatividade e crie um último método que utilize pelo menos dois dos métodos criados anteriormente.

class Calculadora {
  static soma = (num1, num2) => {
    return num1 + num2
  }

  static sub = (num1, num2) => {
    return num1 - num2
  }

  static mult = (num1, num2) =>{
    return num1 * num2
  }

  static div = (num1, num2) => {
    return num1 / num2
  }

  static fatorial = (num1) => {
    if (num1 === 0 || num1 === 1){
      return 1;
    } else {
      for (var i = num1 - 1; i >= 1; i--) {
        num1 *= i;
      }
      return num1; 
    }
  }
}

module.exports = {
  convertCelsiusToFahrenheit,
  revert,
  checkEvenNumber,
  jokenpo,
  generateCombinations,
  Calculadora,
  sum
}