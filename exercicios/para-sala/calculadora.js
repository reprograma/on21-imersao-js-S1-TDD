
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
        if (num1 === 0 || num1 === 1)
        return 1;
      for (var i = num1 - 1; i >= 1; i--) {
        num1 *= i;
      }
      return num1; 
  }
}

module.exports = Calculadora;