const ContaBancaria = require("./ContaBancaria");

describe("Testando operação saque da conta bancária", () => {
  test("tentando sacar sem limite e sem saldo", () => {
    const pessoaBancaria = new ContaBancaria("Cláudia", 0, 0);
    const isValorSacado = pessoaBancaria.sacarDinheiro(20);

    expect(isValorSacado).toBe(false);
  });

  test("tentando sacar sem limite e com saldo", () => {
    const pessoaBancaria = new ContaBancaria("Cláudia", 20, 0);
    const isValorSacado = pessoaBancaria.sacarDinheiro(20);

    expect(isValorSacado).toBe(true);
    expect(pessoaBancaria.getSaldoDaConta()).toBe(0);
  });
  test("tentando sacar com limite e sem saldo", () => {
    const pessoaBancaria = new ContaBancaria("Cláudia", 0, 20);
    const isValorSacado = pessoaBancaria.sacarDinheiro(20);

    expect(isValorSacado).toBe(true);
    expect(pessoaBancaria.getSaldoDaConta()).toBe(-20);
    expect(pessoaBancaria.getLimiteDaConta()).toBe(0);
  });

  test("tentando sacar com limite e com saldo", () => {
    const pessoaBancaria = new ContaBancaria("Cláudia", 20, 20);
    const isValorSacado = pessoaBancaria.sacarDinheiro(20);

    expect(isValorSacado).toBe(true);
    expect(pessoaBancaria.getSaldoDaConta()).toBe(0);
    expect(pessoaBancaria.getLimiteDaConta()).toBe(20);
  });
});

describe("Testando operação consulta de saldo", () => {
  test("consultando saldo", () => {
    const pessoaBancaria = new ContaBancaria("Cláudia", 20, 0);

    expect(pessoaBancaria.getSaldoDaConta()).toBe(20);
  });
});

describe("Testando operação deposito de conta", () => {
  test("depositando dinheiro", () => {
    const pessoaBancaria = new ContaBancaria("Cláudia", 20, 20);
    pessoaBancaria.depositarDinheiro(10);

    expect(pessoaBancaria.getSaldoDaConta()).toEqual(30);
  });
});

describe("Testando operações limite de conta", () => {
  const pessoaBancaria = new ContaBancaria("Cláudia", 20, 20);
  test("desativando o limite", () => {
    pessoaBancaria.alterarLimite(null);

    expect(pessoaBancaria.getLimiteDaConta()).toEqual(null);
  });

  test("alterando limite de conta para R$10", () => {
    pessoaBancaria.alterarLimite(10);

    expect(pessoaBancaria.getLimiteDaConta()).toEqual(10);
  });
});
