class ContaBancaria {
    constructor(name, saldo, limite, deposito, saque) {
        this.name = name;
        this.saldo = saldo;
        this.limite = limite;
        this.deposito = deposito;
        this.saque = saque;
    }

    visualizarDadosDoTitular() {
        return this.name && this.saldo && this.limite;
    }

    consultaDeSaldo() {
        return this.saldo;
    }

    verificarDeposito() {
        return this.deposito;
    }

    realizarSaqueBancario() {
        if (this.saldo >= this.saque) {
            return "Saque realizado! Saldo atual: " + (this.saldo - this.saque);
        }
        if (this.saldo <= this.saque) {
            const verificarLimite = (this.limite + this.saldo) >= this.saque ? "Conseguimos liberar para você! Mas no momento você está no negativo. O saldo atual do seu limite: " + -((this.saldo - this.saque) + this.limite) : "Lamentamos, mas você não possui saldo suficiente para realizar o saque.";
            return verificarLimite;
        } else {
            return "Lamentamos, mas não foi possível realizar o saque";
        }
    }

    aumentoNoLimite() {
        return "Conforme seu cadastro, conseguimos liberar mais R$: 200,00 para aumentar o seu limite. Seu novo limite é: " + (this.limite + 200);
    }

    diminuirLimite() {
        return "Iremos diminuir o seu limite em R$: 200,00. Seu novo limite é: " + (this.limite - 200);
    }

    pegarDesativarLimite() {
        return "Seu limite foi desativado com sucesso!";
    }

}


module.exports = { ContaBancaria };