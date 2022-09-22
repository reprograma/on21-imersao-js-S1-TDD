class ContaBancaria{

    constructor(titular, saldo, limite,){
     this.titular = titular
     this.saldo = saldo
     this.limite = limite 
       
    }
  
    titular (){
      return this.titular
    }
    saldo () {
    return this.saldo
    }
    limite (){
      return this.limite
    }
  
  };
  
  module.exports = ContaBancaria;