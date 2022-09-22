class contaBancaria {
  constructor(nomeTitular, saldo, limiteConta) {
    this.nomeTitular = nomeTitular;
    this.saldo = saldo;
    this.limiteConta = limiteConta;
  }

  validaNome() {
    return this.nomeTitular;
  }
  validaSaldo() {
    return this.saldo;
  }
  validaLimiteconta() {
    return this.limiteConta;
  }
  fazerSaque(valorSaque) {
    if (valorSaque >= this.saldo && valorSaque <= this.limiteConta) {
      this.saldo = this.saldo - valorSaque;
      this.limiteConta = this.limiteConta + this.saldo;

      return this.saldo;
    } else if (this.saldo < valorSaque && this.limiteConta < valorSaque) {
      return "saldo Indisponível";
    }
    return (this.saldo = this.saldo - valorSaque);
  }
  fazerDeposito(valorDeposito) {
    const saldoAtualizado = this.saldo + this.limiteConta + valorDeposito;
    return saldoAtualizado;
  }
}
module.exports = { contaBancaria };
