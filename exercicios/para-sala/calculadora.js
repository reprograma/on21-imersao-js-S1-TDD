class Calculadora {
  constructor() {}
  soma(num1, num2) {
    return num1 + num2;
  }

  subtracao(num1, num2) {
    return num1 - num2;
  }

  multiplicacao(num1, num2) {
    return num1 * num2;
  }

  divisao(num1, num2) {
    return num1 / num2;
  }

  fatorial(num1) {
    let resultado = num1;
    for (let i = 1; i < num1; i++) {
      resultado *= i;
    }
    return resultado;
  }

  identificarOperacao(num1, num2, operacao) {
    if (operacao === "+") {
      return this.soma(num1, num2);
    } else if (operacao === "-") {
      return this.subtracao(num1, num2);
    } else {
      return "operação invalida";
    }
  }
}

module.exports = Calculadora;
