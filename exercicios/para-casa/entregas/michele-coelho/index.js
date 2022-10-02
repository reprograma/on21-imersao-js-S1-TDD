const dadosCliente = {
    nome: "Misha",
    limite: 200,
    ativarLimite: true,
    saldo: 500,
    saque: 0,
    deposito: 0
}

const contaBancaria = {

    inforCliente() {
        return dadosCliente.nome;
    },

    saldo() {
        return dadosCliente.saldo;
    },

    saque(valor) {
      
        if (dadosCliente.saldo < valor) {
            if (dadosCliente.limite > valor) {
                dadosCliente.limite = dadosCliente.limite - valor;
                return valor;
            }
            return "Saldo insuficiente"
        }
        dadosCliente.saldo = dadosCliente.saldo - valor;
        return valor;
    },


    deposito(valor) {
        dadosCliente.saldo = dadosCliente.saldo + valor;
        return valor;
    },

    limite() {
        return dadosCliente.limite
    },
    reajustarLimite(reajustar, valor) {
        if (reajustar == 1) {
            return dadosCliente.limite = dadosCliente.limite + valor;
        } if (reajustar == 2) {
            return dadosCliente.limite = dadosCliente.limite - valor;
        }
    },

    ativarDesativarLimite(condicao) {
        return dadosCliente.ativarLimite = condicao;
    }

}

module.exports = contaBancaria;