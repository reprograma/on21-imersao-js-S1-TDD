const ContaBancaria = require("./ContaBancaria");

describe("Testar transação de saque", () => {
  test("Sacar sem limite e saldo", () => {
    const pessoaBancaria = new ContaBancaria(0, 0);
    const isValorSacado = pessoaBancaria.sacarDinheiro(600);

    expect(isValorSacado).toBe(false);
  });

  test("Sacar sem limite e com saldo", () => {
    const pessoaBancaria = new ContaBancaria(350, 0);
    const isValorSacado = pessoaBancaria.sacarDinheiro(350);

    expect(isValorSacado).toBe(true);
    expect(pessoaBancaria.getSaldoDaConta()).toBe(0);
  });
  test("Sacar com limite e sem saldo", () => {
    const pessoaBancaria = new ContaBancaria(0, 150);
    const isValorSacado = pessoaBancaria.sacarDinheiro(150);

    expect(isValorSacado).toBe(true);
    expect(pessoaBancaria.getSaldoDaConta()).toBe(-150);
    expect(pessoaBancaria.getLimiteDaConta()).toBe(0);
  });

  test("Sacar com limite e com saldo", () => {
    const pessoaBancaria = new ContaBancaria(10000, 8000);
    const isValorSacado = pessoaBancaria.sacarDinheiro(8000);

    expect(isValorSacado).toBe(true);
    expect(pessoaBancaria.getSaldoDaConta()).toBe(0);
    expect(pessoaBancaria.getLimiteDaConta()).toBe(8000);
  });
});

describe("Consultar saldo", () => {
  test("Consultar saldo", () => {
    const pessoaBancaria = new ContaBancaria(8000, 0);

    expect(pessoaBancaria.getSaldoDaConta()).toBe(8000);
  });
});

describe("Testar operação deposito de conta", () => {
  test("Depositar dinheiro", () => {
    const pessoaBancaria = new ContaBancaria(8000, 8000);
    pessoaBancaria.depositarDinheiro(1000);

    expect(pessoaBancaria.getSaldoDaConta()).toEqual(9000);
  });
});