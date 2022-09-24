console.log("Versao 0.1 de Testes - Funciona! ");
module.exports = class Conta {
  contructor(nome, saldo, limite) {
    this.nome = nome;
    this.saldo = saldo;
    this.limite = limite;
  }

  getNome() {
    return this.nome;
  }

  getSaldo() {
    return this.saldo;
  }

  getLimite() {
    return this.limite;
  }
  sacarSaldo(saldo, limite) {
    if (saldo > 0 || limite > 0) {
      return console.log("pode sacar");
    }
  }

  sacar(valor) {
    let resultado = "Saque concluído. Saldo atualizado: ";
    if (this.saldo > valor) {
      this.saldo = this.saldo - valor;
    } else if (this.saldo + this.limite > valor) {
      this.limite = this.limite - (valor - this.saldo);
      this.saldo = this.saldo - valor;
    } else {
      return "Nao possui saldo suficiente";
    }
    return resultado + this.saldo;
  }

  atualizarLimite(valor) {
    if (valor == 0) {
      return "Não possui limite suficiente";
    } else {
      this.limite = valor;
      return "Limite alterado para " + this.limite;
    }
  }
  depositarNaConta(valor) {
    this.saldo = this.saldo + valor;
    return "Depósito concluído. Novo valor do saldo: " + this.saldo;
  }
};
