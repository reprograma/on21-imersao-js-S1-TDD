class contaBancaria {
  constructor(nomeTitular, saldo, limite) {
    this.nomeTitular = nomeTitular;
    this.saldo = saldo;
    this.limite = limite;
  }

  validaNomeTitular(){return this.nomeTitular};
  validaSaldo(){return this.saldo};
  validaLimite(){return this.limite};

  realizaSaque(valorSaque){
    if (this.saldo >= valorSaque) {
      return true;
    } if (this.saldo < valorSaque && this.limite > this.saldo) {
      return "Seu saque foi realizado, mas agora você está negativo";
    } else {
      return "Você não tem saldo e nem limite suficiente para realizar saque";
    }
  };

  aumentoDeLimite() {
    const novoLimite = this.limite + 400;
    return novoLimite;
  };

  diminuirLimite() {
    const novoLimite = this.limite - 500;
    return novoLimite;
  };

  desativarConta() {
    return true;
  }
}

module.exports = {contaBancaria};