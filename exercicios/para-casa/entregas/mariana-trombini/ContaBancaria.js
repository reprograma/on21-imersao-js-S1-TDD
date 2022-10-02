class ContaBancaria {
    constructor(titular, saldo, limite) {
      this.titular = titular;
      this.saldo = saldo;
      this.limite = limite;
    }

    getTitular() {
      return this.titular
    }

    getSaldo() {
      return this.saldo
    }

    getLimite() {
      return this.limite
    }
    
    sacar(valor) {
      if(!valor) return `Não foi possível efetuar o saque. Saldo atual: R$${this.saldo}`
      let limiteSaque = this.saldo + this.limite
        if(this.saldo < valor && limiteSaque < valor) {
          return "Não foi possível realizar o saque. Saldo e limite insuficientes."
        }
      limiteSaque -= valor
      this.saldo -= valor
        if(this.saldo < 0){
          return  `Saque realizado com sucesso utilizando o limite da conta. Saldo atual negativo: R$${this.saldo}.`
        }
          return `Saque realizado com sucesso. Saldo atual: R$${this.saldo}.`
    }

    depositar(valor) {
      if(!valor) return `Não foi possível efetuar o depósito. Saldo atual: R$${this.saldo}`
        this.saldo += valor
        return `Depósito realizado com sucesso. Saldo atual: R$${this.saldo}.`
    }
   
    ativarLimite(status) {
      if(status === false) {
        return this.limite = false
      }
        return this.limite
    }

    aumentarLimite(valor) {
      if(!this.limite) {
        return `Ative seu limite para alterá-lo.`
      }  
        return this.limite += valor
    }

    reduzirLimite(valor) {
      if(!this.limite) {
        return `Ative seu limite para alterá-lo.`
      }
        return this.limite -= valor
    }
}

module.exports = ContaBancaria