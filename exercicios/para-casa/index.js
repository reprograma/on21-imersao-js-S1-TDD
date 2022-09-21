class Conta {
  constructor(nome, saldo, limite, isActiveLimite) {
    this.nome = nome;
    this.saldo = saldo;
    this.limite = limite;
    this.isActiveLimite = isActiveLimite;
  }

  getSaldo() {
    return this.saldo;
  }

  fazerDeposito(valor) {
    return (this.saldo = this.saldo + valor);
  }

  ajustarLimiteParaMais(valor) {
    return (this.limite = this.limite + valor);
  }

  ativarLimite(string) {
    if (string === false) {
      return true;
    } else {
      return false;
    }
  }

  ajustarLimiteParaMenos(valor) {
    return (this.limite = this.limite - valor);
  }
  fazSaque(valor) {
    if (
      this.saldo >= valor ||
      (this.isActiveLimite === true && valor <= this.limite)
    ) {
      return this.saldo - valor;
    }
  }
}

module.exports = Conta;
