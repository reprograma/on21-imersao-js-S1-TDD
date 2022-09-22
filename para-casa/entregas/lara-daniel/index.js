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
    let valorSaque = valor;
    let novoSaldo = this.saldo;
    let limite = this.limite;
    let devedor = 0;

    if (novoSaldo > valorSaque) {
      novoSaldo = novoSaldo - valorSaque;
      return (
        "Saque de " +
        valorSaque +
        " realizado. Seu saldo atual é de " +
        novoSaldo
      );
    } else {
      novoSaldo = novoSaldo - valorSaque;
      devedor = novoSaldo * -1;

      if (devedor <= limite) {
        return (
          "Saque de " +
          valorSaque +
          " realizado. Seu saldo atual é de " +
          novoSaldo
        );
      }
      return "Saldo e limite da conta insuficientes para realizar saque";
    }
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
