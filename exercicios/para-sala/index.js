
function converterCelsiusPraFahrenheit(temperatura) {
  var temperaturaConvertida = (temperatura * 9) / 5 + 32;

  return temperaturaConvertida;
}

// *****************
function verificarNumero(inputUsuario) {
  let resultado = "";

  if (isNaN(inputUsuario)) {
    resultado = inputUsuario + " não é um número";
  } else {
    if (inputUsuario % 2 == 0) {
      resultado = inputUsuario + " é um número par";
    } else {
      resultado = inputUsuario + " é um número ímpar";
    }
  }
  return resultado;
}

// *****************
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

// *****************
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

// *****************
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


// ***************** TDD
function soma(num1, num2) {
    if (num1 !== num2) {
      return num1 + num2;
    } else {
      return 3 * (num1 + num2);
    }
  }
  
    // *****************
  function reverterString(string) {
    return string.split("").reverse().join("");
  }
  


module.exports = {
  converterCelsiusPraFahrenheit,
  verificarNumero,
  soma,
  reverterString,
  jokenpo,
};
