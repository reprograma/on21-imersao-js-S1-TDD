class ContaBancaria {
    constructor(nome, saldo, limite){
        this.nome = nome,
        this.saldo = saldo,
        this.limite = limite
    }

    limiteStatus(status) {
        if(status === false) {
            this.limite = false
        } 
        else {
            return this.limite
        }
    }
    aumentarLimite(valor) {
        if(this.limite === false) {
            return 'Não é possível aumentar limite, por favor ative o limite e tente novamente'
        } else {
            this.limite += valor
        }
    }
    reduzirLimite(valor) {
        if(this.limite === false) {
            return 'Não é possível reduzir limite, por favor ative o limite e tente novamente'
        } else {
            this.limite -= valor
        }
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
            if(this.limite) {
                saldoTotal -= valorSaque
                return `Valor saque: R$${valorSaque}. Saldo Atual: R$${saldoTotal - this.limite}. Limite: R$${this.saldo + this.limite - valorSaque}`
               }   
            }
    
    }
}

module.exports = ContaBancaria