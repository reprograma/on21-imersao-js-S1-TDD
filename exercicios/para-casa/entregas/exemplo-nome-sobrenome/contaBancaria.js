class ContaBancaria {
  constructor(saldoConta, limiteConta) {
    this.saldoConta = saldoConta;
    this.limiteConta = limiteConta;
  }

  getSaldoDaConta() {
    return this.saldoConta;
  }

  getLimiteDaConta() {
    return this.limiteConta;
  }
  sacarDinheiro(valorSaque) {
    if (this.saldoConta >= valorSaque) {
      this.saldoConta -= valorSaque;
      return true;
    } else if (this.saldoConta + this.limiteConta >= valorSaque) {
      this.saldoConta -= valorSaque;
      this.limiteConta += this.saldoConta;
      return true;
    } else {
      return false;
    }
  }

  depositarDinheiro(valorDeposito) {
    this.saldoConta += valorDeposito;
  }


}
module.exports = ContaBancaria;