module.exports = class ContaBancaria {
  constructor(nomeDoTitular, saldo, limite) {
    this.nomeDoTitular = nomeDoTitular;
    this.saldo = saldo;
    this.limite = limite;
  }
  getNomeDoTitular() {
    return this.nomeDoTitular;
  }
  getSaldo() {
    return this.saldo;
  }
  getLimite() {
    return this.limite;
  }
  sacar(num) {
    let result = "Saque realizado. Novo valor do saldo: ";
    if (this.saldo > num) {
      this.saldo = this.saldo - num;
    } else if (this.saldo + this.limite > num) {
      this.limite = this.limite - (num - this.saldo);
      this.saldo = this.saldo - num;
    } else return "Saque inválido.";

    return result + this.saldo;
  }
  alterarLimite(num) {
    if (num == 0) {
      return "Limite desativado";
    } else {
      this.limite = num;
      return "Limite alterado para " + this.limite;
    }
  }
  depositar(num) {
    this.saldo = this.saldo + num;
    return "Depósito realizado. Novo valor do saldo: " + this.saldo;
  }
};
