const { checkSaldo, checkLimite, checkSaldoLimite, checkSaque } = require("./index");

describe("verificar a conta bancaria", () => {
  test("deve ter saldo disponivel para operacao", () => {
    const saldo = checkSaldo(200);

    expect(saldo).toBe(true);
  });

  test("deve verificar se tem limite ativado ou desativo", () => {
    const limiteAtivo = checkLimite();

    expect(limiteAtivo).toBe(true);
  });

  test("deve ter um valor no limite", () => {
    const limite = checkSaldoLimite();

    expect(limite).toBe(true);
  });

  test("deve avaliar se é possivel sacar", () => {
    const saque = checkSaque(3700);

    expect(saque).toBe(true);
  });

});

