class ContaBancaria {
  constructor(nome, saldo, limite, ativacaoLimite) {
    this.nome = nome;
    this.limite = limite;
    this.ativacaoLimite = ativacaoLimite;
    this.saldo = saldo;
  }

  consultaSaldo() {
    return this.saldo;
  }

  realizaSaque(valor) {
    let saldoTotal = this.saldo + this.limite
    if (saldoTotal > valor) {
      this.saldo = this.saldo - valor;
      return (
        "Saque de " +
        valor +
        " realizado. Seu saldo atual é de " +
        this.saldo
      );
    }
      return "Saldo e limite da conta insuficientes para realizar saque";
  }

  realizaDeposito(valor) {
    let novoSaldo = this.saldo;

    novoSaldo = novoSaldo + valor;

    return (
      "Depósito de " + valor + " realizado. Seu saldo atual é de " + novoSaldo
    );
  }

  ajustaLimite(opcao, valor) {
    let novoLimite = this.limite;

    if (opcao === "+") {
      novoLimite = novoLimite + valor;
      return novoLimite;
    } else if (opcao === "-") {
      novoLimite = novoLimite - valor;
      return novoLimite;
    }
  }

  handleLimite(condicao) {
    return (this.ativacaoLimite = condicao);
  }
}

module.exports = ContaBancaria;
