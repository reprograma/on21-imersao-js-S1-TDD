    const contaBancaria = {
        titular: "banana",
        saldo: 52,
        limiteDaConta: 100,
    }

    const consultarSaldo = () => contaBancaria.saldo

    const saque = (queroSacar) => {
        let saldoDisponivel = contaBancaria.saldo       
        let valoresParaSaque = saldoDisponivel + contaBancaria.limiteDaConta
        
        if(saldoDisponivel >= queroSacar ){
            let valorSacado = saldoDisponivel-queroSacar
            return valorSacado
            
        } else if(queroSacar > saldoDisponivel && queroSacar > valoresParaSaque){ 
            const message = "Você não possui saldo e nem limite para saque"
            return message
        }
        return 
    }
module.exports = {contaBancaria, consultarSaldo, saque }