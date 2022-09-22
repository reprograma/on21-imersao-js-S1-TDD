class ContaBancaria {
  constructor(nomeDoTitular, saldoDaConta, limiteDaConta) {
    this.nomeDoTitular = nomeDoTitular;
    this.saldoDaConta = saldoDaConta;
    this.limiteDaConta = limiteDaConta;
  }

  getSaldoDaConta() {
    return this.saldoDaConta;
  }

  getLimiteDaConta() {
    return this.limiteDaConta;
  }
  sacarDinheiro(valorSaque) {
    if (this.saldoDaConta >= valorSaque) {
      this.saldoDaConta -= valorSaque;
      return true;
    } else if (this.saldoDaConta + this.limiteDaConta >= valorSaque) {
      this.saldoDaConta -= valorSaque;
      this.limiteDaConta += this.saldoDaConta;
      return true;
    } else {
      return false;
    }
  }

  depositarDinheiro(valorDeposito) {
    this.saldoDaConta += valorDeposito;
  }

  alterarLimite(valorLimite) {
    this.limiteDaConta = valorLimite;
  }
}
module.exports = ContaBancaria;
