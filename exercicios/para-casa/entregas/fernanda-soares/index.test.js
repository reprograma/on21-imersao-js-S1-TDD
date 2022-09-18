const contaBancaria = require("../../index");

let conta;
describe("Testes de Conta Bancária", () => {
  beforeEach(() => {
    conta = new contaBancaria("Fernanda", 2000, 5000);
  });
  test("Deve retornar o nome 'Fernanda'", () => {
    expect(conta.getNomeDoTitular()).toEqual("Fernanda");
  });
  test("Deve retornar o saldo de 2000", () => {
    expect(conta.getSaldo()).toEqual(2000);
  });
  test("Deve retornar o limite de 5000", () => {
    expect(conta.getLimite()).toEqual(5000);
  });
  test("Deve realizar o saque de 3000 e retornar um saldo negativo", () => {
    expect(conta.sacar(3000)).toEqual(
      "Saque realizado. Novo valor do saldo: -1000"
    );
  });
  test("Deve retornar saque inválido", () => {
    expect(conta.sacar(20000)).toEqual("Saque inválido.");
  });
  test("Deve alterar o limite para 500", () => {
    expect(conta.alterarLimite(500)).toEqual("Limite alterado para 500");
  });
  test("Deve desativar o limite", () => {
    expect(conta.alterarLimite(0)).toEqual("Limite desativado");
  });
  test("Deve realizar o depósito de 250 e retornar o saldo de 2250", () => {
    expect(conta.depositar(250)).toEqual(
      "Depósito realizado. Novo valor do saldo: 2250"
    );
  });
});
