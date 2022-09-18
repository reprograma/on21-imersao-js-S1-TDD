class Calculadora {
  constructor(numero1, numero2) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }

  sum() {
    return this.numero1 + this.numero2;
  }

  subtraction() {
    return this.numero1 - this.numero2;
  }

  division() {
    return this.numero1 / this.numero2;
  }

  fatorial() {
    let resultado = 1;
    for (let i = this.numero1; i > 1; i--) {
      resultado *= i;
    }
    return resultado;
  }
}

module.exports = Calculadora;
