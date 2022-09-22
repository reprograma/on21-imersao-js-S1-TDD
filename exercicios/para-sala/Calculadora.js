class Calculadora {
  static sum(numero1, numero2) {
    return numero1 + numero2;
  }

  static subtraction(numero1, numero2) {
    return numero1 - numero2;
  }

  static division(numero1, numero2) {
    return numero1 / numero2;
  }

  static fatorial(numero1) {
    let resultado = 1;
    for (let i = numero1; i > 1; i--) {
      resultado *= i;
    }
    return resultado;
  }
}

module.exports = Calculadora;
