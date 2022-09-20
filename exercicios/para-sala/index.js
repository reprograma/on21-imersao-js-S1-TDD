function convertCelsiusToFahrenheit(temperature) {
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

function soma(num1 , num2){
    if(num1 == num2) {
        return 3*(num1 + num2)
    }
    return num1 + num2
}

function revert (string) {
    return string.split('').reverse().join('')
}

class Calculadora {
    
    soma(num1, num2) {
        return num1 + num2
    }

    subtracao(num1, num2) {
        return num1 - num2
    }

    multiplicacao(num1, num2) {
        return num1 * num2
    }

    divisao(num1, num2) {
        return num1 / num2
    }

    fatorial(num) {
        var fatorial = num;
        var resultado = fatorial;
        for (var i = 1; i < fatorial; i++) {
            return resultado *= i;
        }
        return resultado
    }

    
    // fatorial (num) {
    //     for (var i = 1 ; i < num; i++) {
    //         var fatorialCalc =1
    //         fatorialCalc *= i;
    //     }
    //     return fatorialCalc
    // }

    /*
    function Calculadora() {
  function soma(num1, num2) {
    return num1 + num2
  }

  function subtracao(num1, num2) {
    return num1 - num2
  }

  function divisao(num1, num2) {
    return num1 / num2
  }

  function multiplicacao(num1, num2) {
    return num1 * num2
  }

  function fatorial(num) {
    var fatorialCalc = num
    var resultado = fatorialCalc
    for(var i = 1; i < fatorialCalc; i++) {
      resultado *= i;
    }
    return resultado
  }

  return {
    soma,
    subtracao, 
    divisao,
    multiplicacao,
    fatorial,
  }
}
 */
    
}




module.exports = {
    convertCelsiusToFahrenheit, 
    checkEvenNumber, 
    soma, 
    revert,
    Calculadora
}

