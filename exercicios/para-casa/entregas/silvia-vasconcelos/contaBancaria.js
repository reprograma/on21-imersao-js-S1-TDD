class Conta {
    constructor(titular, saldo, limiteDaConta){
        this.titular = titular;
        this.saldo = saldo;
        this.limiteDaConta = limiteDaConta;
    }

    consultaSaldo() {
        return this.saldo;
    }

    saque(valor) {
        if (this.saldo - valor < 0) {
            const saldoNeg = this.saldo - valor;
            return saldoNeg;
        } else {
            return this.saldo -= valor;
        }
    }

    deposito(valor) {
        return this.saldo += valor; 
    }
}

module.exports = {
    Conta
};