/* 
Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da
conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar
se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua 
limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque.
Além disso, o limite de uma conta pode ser reajustado (para mais e para menos)
ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.
*/

const ContaBancaria = require("../resolucao/ContaBancaria");

class Conta {
    nome;
    saldo;
    limite;

    constructor(nome, saldo, limite){
        this.nome = nome;
        this.saldo = saldo;
        this.limite = limite;
    }

    getSaldo(){
        return this.saldo;
    }

    getLimite(){
        return this.limite;
    }

    ativarOuDesativarLimite(ativar) {
        if(ativar === false) {
            return this.limite = "Limite desativado."
        }
        return this.limite
    }

    setLimite(aumentarOuDiminuir, valor) {
        if(this.ativarOuDesativarLimite() == "Limite desativado.") {
            return "Para editar o valor do limite, você precisa ativá-lo."
        } if(aumentarOuDiminuir == 'aumentar') {
            return this.limite += valor
        } if(aumentarOuDiminuir == 'diminuir') {
            return this.limite -= valor
        }
        return this.limite
    }

    saque(valorDoSaque) {
        let limiteTotalDaConta = this.saldo + this.limite

        if(this.saldo < valorDoSaque) {
            if(limiteTotalDaConta < valorDoSaque) {
                return "Você não tem saldo nem limite disponível."
            }
            limiteTotalDaConta -= valorDoSaque

            return this.saldo -= valorDoSaque
        }
        if(this.saldo >= valorDoSaque) {
            return this.saldo -= valorDoSaque
        }
    }

    setDeposito(valorDeposito){
        return this.saldo = this.saldo + valorDeposito;
    }
}

module.exports = ContaBancaria;