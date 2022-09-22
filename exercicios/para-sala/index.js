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

function soma(num1, num2){
    if(num1==num2){
        return 3*(num1+num2)
    }
    return num1+num2
}

function revert(string){
    return string.split("").reverse().join("")
}

module.exports = {convertCelsiusToFahrenheit, checkEvenNumber, soma, revert, receberMoedas,jokenpo};