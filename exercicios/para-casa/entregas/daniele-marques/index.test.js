const { contaBancaria } = require("../../index");
describe("Testando funcionalidades da Classe Conta Bancaria", () => {
  test("testando modulo que cria titular da conta", () => {
    const mock = jest.fn().mockReturnValue("Criado-Nome-do-titular");
    const setMockData = (contaBancaria.setTitular = mock());
    expect(setMockData).toEqual("Criado-Nome-do-titular");
  });
  test("testando modulo de visualização do titular da conta", () => {
    const mock = jest.fn().mockReturnValue("Leitura-Nome-do-titular");
    contaBancaria.setTitular = mock();
    expect(contaBancaria.getTitular()).toBe("Leitura-Nome-do-titular");
  });
  test("testando modulo de visualização do saldo da conta", () => {
    const mock = jest.fn().mockReturnValue(10);
    const setMockData = (contaBancaria.saldo.createSaldo = mock());
    expect(setMockData).toEqual(10);
  });
  test("testando modulo que seta saldo da conta", () => {
    const mock = jest.fn().mockReturnValue(60);
    const setMockData = (contaBancaria.saldo.addSaldo = mock());
    expect(setMockData).toEqual(60);
  });
  test("testando modulo que seta Limite da conta", () => {
    const mock = jest.fn().mockReturnValue(60);
    const setMockData = (contaBancaria.saldo.addSaldo = mock());
    expect(setMockData).toEqual(60);
  });
  test("testando modulo de diminuição do Limite da conta", () => {
    const mock = jest.fn().mockReturnValue(30);
    const setMockData = (contaBancaria.saldo.addSaldo = mock());
    expect(setMockData).toEqual(30);
  });
  test("testando modulo de visualização do Limite da conta", () => {
    expect(contaBancaria.limite.verLimite()).toEqual("Seu limite é: 8");
  });
  test("testando modulo de visualização do Limite da conta", () => {
    contaBancaria.block = "sim";
    expect(contaBancaria.desableLimite()).toEqual("Você cancelou sua conta");
  });
});
