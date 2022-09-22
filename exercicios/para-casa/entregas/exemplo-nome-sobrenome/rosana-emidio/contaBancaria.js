    const contaBancaria = {
        titular: "banana",
        saldo: 52,
        limiteDaConta: 100,
    }

    const consultarSaldo = () => this.saldo

    const saque = (queroSacar) => {
        if(consultarSaldo >= queroSacar ){
            return this.saldo-queroSacar
        } if(queroSacar > consultarSaldo && consultarSaldo === 0 && this.limiteDaConta === 0 ){
            const message = "Você não possui saldo e nem limite para saque"
            return message
        }

        return saque
    }
module.exports = contaBancaria, consultarSaldo, saque  