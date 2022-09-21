class ContaBancaria {
    constructor(name, saldo, limite, deposito, saque) {
        this.name = name;
        this.saldo = saldo;
        this.limite = limite;
        this.deposito = deposito;
        this.saque = saque;
    }

    PegarDadosDoTitular() {
        return this.name && this.saldo && this.limite;
    }

    PegarConsultaDeSaldo() {
        return this.saldo;
    }

    PegarDeposito() {
        return this.deposito;
    }

    PegarSaqueBancario() {
        if (this.saldo >= this.saque) {
            return "Saque realizado! Saldo atual: " + (this.saldo - this.saque);
        }
        if (this.saldo <= this.saque) {
            const VerificarLimite = (this.limite + this.saldo) >= this.saque ? "Conseguimos liberar para você! Mas no momento você está no negativo. O saldo atual do seu limite: " + -((this.saldo - this.saque) + this.limite) : "Lamentamos, mas você não possui saldo suficiente para realizar o saque.";
            return VerificarLimite;
        } else {
            return "Lamentamos, mas não foi possível realizar o saque";
        }
    }

    PegarAumentoNoLimite() {
        return "Conforme seu cadastro, conseguimos liberar mais R$: 200,00 para aumentar o seu limite. Seu novo limite é: " + (this.limite + 200);
    }

    PegarDiminuirLimite() {
        return "Iremos diminuir o seu limite em R$: 200,00. Seu novo limite é: " + (this.limite - 200);
    }

    PegarDesativarLimite() {
        return "Seu limite foi desativado com sucesso!";
    }

}

const contaBancaria = new ContaBancaria('Aline Viana', 1000, 200, 0, 1001);


console.log(contaBancaria.PegarSaqueBancario());
// console.log(contaBancaria.PegarDesativarLimite());

module.exports = { ContaBancaria };