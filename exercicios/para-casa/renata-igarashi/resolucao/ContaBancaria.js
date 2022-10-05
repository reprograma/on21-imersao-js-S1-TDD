class ContaBancaria {
    constructor(nome, saldo, limite){
        this.nome = nome,
        this.saldo = saldo,
        this.limite = limite
    }
    saque(valorSaque) {
        let saldoTotal = this.saldo + this.limite

            if(this.saldo > valorSaque) {
                this.saldo -= valorSaque
                return `Valor saque: R$${valorSaque}. Saldo Atual: R$${this.saldo}. Limite: R$${this.limite}`
            }

           if(this.saldo < valorSaque) {
            if(saldoTotal < valorSaque) {
                return `Saldo insuficiente para saque`
            } else 
            saldoTotal -= valorSaque
            return `Valor saque: R$${valorSaque}. Saldo Atual: R$${saldoTotal - this.limite}. Limite: R$${this.saldo + this.limite - valorSaque}`
           }

         
    
    }
}

module.exports = ContaBancaria