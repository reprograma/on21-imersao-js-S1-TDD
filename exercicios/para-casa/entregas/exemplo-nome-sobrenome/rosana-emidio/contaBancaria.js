    const contaBancaria = {
        titular: "banana",
        saldo: 52,
        limiteDaConta: 100,
    }

    const consultarSaldo = () => contaBancaria.saldo

    const saque = (queroSacar) => {
        let saldoDisponivel = contaBancaria.saldo
        if(saldoDisponivel >= queroSacar ){
            let valorSacado = saldoDisponivel-queroSacar
            console.log(valorSacado)
            return valorSacado
            
        } else if(queroSacar > saldoDisponivel && saldoDisponivel === 0 && this.limiteDaConta === 0 ){
            const message = "Você não possui saldo e nem limite para saque"
            return message
        }
        return saque
    }
module.exports = {contaBancaria, consultarSaldo, saque }