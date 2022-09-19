class Calculadora {
  static soma(num1, num2) {
    return num1 + num2;
  }
  static subtracao(num1, num2) {
    return num1 - num2;
  }
  static divisao(num1, num2) {
    return num1 / num2;
  }
  static multiplicacao(num1, num2) {
    return num1 * num2;
  }
  static fatorial(num1) {
    if (num1 < 0) {
      return "Não existe fatorial de um número não negativo";
    }
    if (num1 === 0 || num1 === 1) {
      return 1;
    } else {
      let contador = 1;
      for (let i = num1; i > 1; i--) {
        contador *= i;
      }
      return contador;
    }
  }
};
module.exports = {
  Calculadora
};