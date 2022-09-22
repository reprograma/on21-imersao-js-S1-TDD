const contaBancaria = require("../maria-aparecida-sousa/index");

let conta = new contaBancaria("Maria", 200, 400);

describe("Consultar saldo", () => {
  test("Exibir saldo da conta", () => {});

  expect(conta.saldo).toEqual(200);
});

describe("Realizar saque", () => {
  test("Realizar saque com saldo disponível", () => {});
  expect(conta.saque(100)).toEqual(100);

  test("Saldo disponível após saque", () => {});
  expect(conta.saldo).toEqual(100);

  test("Realizar saque com saldo insuficiente e limite suficiente", () => {});
  expect(conta.saque(400)).toEqual(400);

  test("Saldo disponível após saque", () => {});
  expect(conta.saldo).toEqual(-300);

  test("Realizar saque com saldo e limite insuficiente", () => {});
  expect(conta.saque(700)).toEqual("Saldo ou limite insuficiente");
});
