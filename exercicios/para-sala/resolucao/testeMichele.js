class ContaBancaria {
    constructor(titular, saldo, limite) {
      this.titular = titular;
      this.saldo = saldo;
      this.limite = limite;                                                
    }

    get saldoBancario() {
        return this.saldo
    }

    get limiteBancario() {
      return this.limite
    }    

    aumentarLimite(novoLimite) {

        this.limite = novoLimite
        return `Seu limite agora é ${this.limiteBancario()}`

    }

    realizandoSaque(saqueRealizado){
         const limiteSomadoSaldo = this.limite + this.saldo 

         if(limiteSomadoSaldo > saqueRealizado){
            const saldoAtual = this.saldo - saqueRealizado
            this.saldo = saldoAtual
            this.limite = saldoAtual + this.limite

            return 'saque realizado com sucesso'
         }
    }

    realizandoDeposito(novoDeposito) {
        this.saldo + novoDeposito
        return `Seu limite agora é ${this.saldoBancario()}`
    }    

  }
  module.exports = ContaBancaria;