console.log("version 0.1 test - works!");
const conta = require("./conta");

let conta;
describe("Informacoes da Conta Bancária", () => {
  beforeEach(() => {
    conta = new contaBancaria("Mabiá", 40000000, 80000000);
  });
  test("Retorna meu nome Mabiá", () => {
    expect(conta.getNome()).toEqual("Mabiá");
  });
  test("Retorna o saldo de 40000000", () => {
    expect(conta.getSaldo()).toEqual(40000000);
  });
  test("Retorna o limite de 80000000", () => {
    expect(conta.getLimite()).toEqual(80000000);
  });
  test("Tenta o saque de 90000000 e retorna saldo negativo", () => {
    expect(conta.sacar(3000)).toEqual(
      "Saque realizado. Novo valor do saldo: -1000"
    );
  });
  test("Retorna saque insuficiente", () => {
    expect(conta.sacar(100000000000000)).toEqual("Saque insuficiente.");
  });
  test("Altera o limite para 16", () => {
    expect(conta.alterarLimite(16)).toEqual(
      "Limite alterado para 16 dinheiros"
    );
  });
  test("Deve desativar o limite", () => {
    expect(conta.alterarLimite(0)).toEqual("Nao pagou, perdeu o limite");
  });
  test("Faz o depósito de 7 dinheiros e retorna o saldo de 40000007", () => {
    expect(conta.depositar(7)).toEqual("Concluído!. Saldo atulizado: 40000007");
  });
});
