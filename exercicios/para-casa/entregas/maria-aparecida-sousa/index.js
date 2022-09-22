class ContaBancaria {
  constructor(titular, saldo, limite) {
    this.titular = titular;
    this.saldo = saldo;
    this.limite = limite;
  }

  saldo() {
    return this.saldo;
  }

  saque(valor){
    if(valor <= this.saldo){
      this.saldo = this.saldo - valor;
      return valor;
    } else if (valor > this.saldo && valor <= this.limite + this.saldo){
      this.saldo = this.saldo - valor;
      this.limite = this.limite - this.saldo;
      return valor;
    } 
    else{
      return "Saldo ou limite insuficiente"
    }
  }
}

module.exports = ContaBancaria;
