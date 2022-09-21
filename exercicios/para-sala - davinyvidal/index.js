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


function sum(a, b) {
    if(a === b) {
        return (a + b) * 3;
    }
    return a + b;
}

function revert(string) {
    return string.split('').reverse().join('');
}

class Calculadora {
    constructor() {
    }
    soma(a, b) {
        return a + b;
    }
    subtrai(a, b) {
        return a - b;
    }
    multiplica(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
    fatorial(a) {
        if (a === 0) {
            return 1;
        }
        return a * this.fatorial(a - 1);
    }
    SomaAndDivisao(a,b,c){
        const f = this.soma(a,b);
        const g = this.divide(f,c);
        return g;
    }
}


function receberMoedas(valorTroco, moedasDisponiveis) {
    let valorTrocoAtual = valorTroco

    let arrayDeMoedas = []

    for (let i = 0; valorTrocoAtual > 0; i)
     {
      const divisao = parseFloat((valorTrocoAtual / moedasDisponiveis[i]).toFixed(2))
      if (divisao >= 1) {
        arrayDeMoedas.push(moedasDisponiveis[i])
        valorTrocoAtual = parseFloat((valorTrocoAtual - moedasDisponiveis[i]).toFixed(2))
      } else {
        i++
      }
     }  

    return arrayDeMoedas
  }


module.exports = { convertCelsiusToFahrenheit, checkEvenNumber, sum, revert, receberMoedas, Calculadora };