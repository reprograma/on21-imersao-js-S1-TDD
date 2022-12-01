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
        const novolimite = 0
        const novosaldo = this.saldo -= valor

        if (valor >= this.saldo) {

            return novosaldo;
        }
        else {
            const novosaldodisponviel = (this.saldo + this.limite)
            if (novosaldodisponviel <= valor) {
                if (novosaldo < 0) {
                    const novolimite = this.limite - novosaldo
                    this.limite = novolimite
                }

                return novosaldo;
            }
            else {
                return 0;
            }
        }
    }
    deposito(valor) {
        return this.saldo += valor;
    }
}

module.exports = { Banco };