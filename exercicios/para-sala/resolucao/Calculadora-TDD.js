class Calculadora {
  constructor(numero1, numero2) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }

  static soma(numero1, numero2) {
    return numero1 + numero2;
  }

  static subtracao(numero1, numero2) {
    return numero1 - numero2;
  }

  static multiplicacao(numero1, numero2) {
    return numero1 * numero2;
  }

  static divisao(numero1, numero2) {
    return numero1 / numero2;
  }

  static fatorial(numero1) {
    let fatorial = numero1;
    var resultado = fatorial;
    for (let i = 1; i < fatorial; i++) {
      resultado *= i;
    }

    return resultado;
  }

  static valorDisponivel(valor1, valor2, valor3){
    const soma = this.soma(valor1, valor2)

    return this.divisao(soma, valor3)
  }
}

module.exports = Calculadora;
