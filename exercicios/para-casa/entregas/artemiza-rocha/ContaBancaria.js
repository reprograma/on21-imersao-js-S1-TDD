
class ContaBancaria{
  
  constructor(nome, saldoInicial, limite, deposito ){
   this.nome = nome 
   this.saldoInicial = saldoInicial
   this.limite = limite 
   this.deposito = deposito
   
  }
  
  nomeDoTitular (){
    return this.nome 
  }
  saldo () {
  return this.saldoInicial
  }
  limiteDisponivél(){
    return this.limite
  }
  
  PossívelDeposito(){
    return this.deposito
  }
};

module.exports = {ContaBancaria};