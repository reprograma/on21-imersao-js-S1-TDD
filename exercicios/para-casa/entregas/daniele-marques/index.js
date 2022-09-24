const contaBancaria = {
  setTitular: (titular) => titular,
  getTitular: () => `${contaBancaria.setTitular.toString()}`,

  saldo: {
    create: [],
    createSaldo(...money) {
      this.create.push(...money);
      return this.create;
    },

    soma: 0,
    addSaldo() {
      this.create.forEach((valorDoDeposito) => {
        this.soma += valorDoDeposito;
        return this.soma;
      });
      return Number(this.soma);
    },

    removeValor: [],
    retirarSaldo(...valordeRetirada) {
      this.removeValor.push(...valordeRetirada);
      this.soma > 0
        ? this.removeValor.forEach((valor) => (this.soma -= valor))
        : false;
    },

    verSaldo() {
      return `Seu saldo é: ${this.soma}`;
    },
  },

  limite: {
    create: [],
    CreateLimite(...valor) {
      this.create.push(...valor);
      return this.create;
    },

    soma: 0,
    AumentarLimite() {
      contaBancaria.saldo.create
        ? this.create.forEach((valorDoDeposito) => {
            this.soma += valorDoDeposito;
            return this.soma;
          })
        : false;
      return Number(this.soma);
    },

    removeValor: [],
    retirarLimite(...valordeRetirada) {
      this.removeValor.push(...valordeRetirada);
      this.soma > 0
        ? this.removeValor.forEach((valor) => (this.soma -= valor))
        : false;
    },

    verLimite() {
      return `Seu limite é: ${this.soma}`;
    },
  },

  block: (param) => (param === "sim" ? true : false),
  blockSaldoElimite() {
    if ((this.saldo.soma < 1) & (this.limite.soma < 1)) {
      return `
      Seu saldo é: ${this.saldo.soma},
      Seu limite é: ${this.limite.soma}
      Você não pode realizar saques`;
    }
  },
  desableLimite() {
    if (this.block === "sim") {
      return `Você cancelou sua conta`;
    }
    return `Sua conta está ativa`;
  },
};

contaBancaria.setTitular = "Rihanna";

contaBancaria.saldo.createSaldo(10);
contaBancaria.saldo.createSaldo(20);

contaBancaria.saldo.retirarSaldo(5);
contaBancaria.saldo.retirarSaldo(0);

contaBancaria.limite.CreateLimite(5);
contaBancaria.limite.CreateLimite(5);

contaBancaria.limite.retirarLimite(2);
contaBancaria.limite.retirarLimite(0);

contaBancaria.saldo.createSaldo();
contaBancaria.saldo.addSaldo();
contaBancaria.saldo.retirarSaldo();
contaBancaria.limite.CreateLimite();
contaBancaria.limite.AumentarLimite();
contaBancaria.limite.retirarLimite();
contaBancaria.block = "sim";

console.log(contaBancaria.saldo.verSaldo());
console.log(contaBancaria.limite.verLimite());
console.log(contaBancaria.blockSaldoElimite());
console.log(contaBancaria.desableLimite());
module.exports = { contaBancaria };
