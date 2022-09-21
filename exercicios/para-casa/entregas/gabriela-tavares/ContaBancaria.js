class ContaBancaria {
  constructor(nomeTitular, saldoConta, limiteConta) {
    (this.nomeTitular = nomeTitular),
      (this.saldoConta = saldoConta),
      (this.limiteConta = limiteConta);
  }

  consultaSaldo(saldoConta) {
    return saldoConta;
  }

  saque(valor) {
    const somaValorDisponivel = this.saldoConta + this.limiteConta;

    if (this.saldoConta >= valor) {
      return this.saldoConta - valor;
    } else if (valor > this.saldoConta && valor < somaValorDisponivel) {
      return valor - somaValorDisponivel;
    } else {
      return "Não é possível fazer o saque, pois não há saldo e limite suficiente";
    }
  }

  deposito(valor) {
    return this.saldoConta + valor;
  }

  aumentaLimite(valor) {
    this.limiteConta = valor;
    return valor;
  }

  diminuiLimite(valor) {
    const novoLimite = this.limiteConta - valor;
    return novoLimite;
  }

  desativaLimiteConta(condicao) {
    if (condicao === true) {
      return "Limite da Conta desativado!";
    } else {
      return "O Limite da sua conta continua ativo!";
    }
  }
}

module.exports = ContaBancaria;
