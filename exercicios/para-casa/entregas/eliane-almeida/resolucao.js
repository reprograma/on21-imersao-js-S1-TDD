class ContaBancaria {
    constructor(id, nomeTitular, saldo, limite) {
        this.id = id;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
        this.limite = limite
    }

    consultarSaldo() {
        return this.saldo
    }

    saque(valor) {
        if(this.saldo < valor && this.limite < valor) {
            return "Saldo e limite insuficiente"
        } else if (this.saldo < valor && this.limite >= valor) {
            this.saldo = this.saldo - valor
            this.limite = this.limite + this.saldo

            return this.saldo 
        }
            return this.saldo = this.saldo - valor
    }

    deposito(valor) {
        if(!this.saldo){
            return this.saldo = valor
        } else if(this.saldo < 0 ) {
            if(valor >= this.saldo) {
                this.limite = this.limite + valor }
                this.saldo = this.saldo + valor
                
                return this.saldo
        }
            return this.saldo + valor
    }
}



module.exports = { ContaBancaria }