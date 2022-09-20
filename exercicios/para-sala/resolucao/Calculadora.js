class Calculadora {
  static soma(num1, num2) {
    return num1 + num2;
  }

  static subtrai(num1, num2) {
    return num1 - num2;
  }
  static multiplica(num1, num2) {
    return num1 * num2;
  }
  static divide(num1, num2) {
    return num1 / num2;
  }

  static fatorial(numero) {
    let num = 1;
    for (let i = numero; i > 1; i--) {
      num *= i;
    }
    return num;
  }

  static aoQuadrado(num) {
    return num * num;
  }

  static media(num1, num2, num3, num4) {
    const soma = num1 + num2 + num3 + num4 
    const media = soma/4
    return media;
  }
}
module.exports = { Calculadora };
