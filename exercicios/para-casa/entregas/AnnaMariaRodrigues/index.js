class Banco {
    constructor(saldo, limite, nometitular) {
        this.nometitular = nometitular;
        this.saldo = saldo;
        this.limite = limite;
    }
    consultaSaldo() {
        return this.saldo;
    }
    saque(valor) {
        if (this.saldo - valor < 0) {
            const saldoNegativo = this.saldo - valor;
            return saldoNegativo;
        }
        return this.saldo -= valor;
    }
    deposito(valor) {
        return this.saldo += valor;
    }
}

module.exports = { Banco };