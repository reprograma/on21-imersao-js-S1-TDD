
const {saldo, saque, deposito, ajusteLimite} = require('./resolucao')

describe("Recursos da conta bancária", () =>  {
  describe("Consulta de saldo", () => {
    test("deve retornar o saldo disponivel do cliete", () => {
      expect(saldo(200)).toEqual(200);
    });
  });

  describe("Depósito", () => {
    test("deve retornar o valor do depósito e  o novo saldo disponivel do cliete", () => {
      expect(deposito(200)).toEqual(400);
    });
  });

  describe("Saque", () => {
    test("saque com saldo disponivel", () => {
      expect(saque(50)).toEqual(150);
    });
    test("saque sem saldo disponivel", () => {
      expect(saque(250)).toEqual(-50);
    });
    test("saque sem saldo e sem limite disponivel", () => {
      expect(saque(250)).toEqual("Você não possui saldo nem limite desponível para saque");
    });
  });

  describe("Ajuste de limite", () => {
    test("deve retornar o aumento e o novo limite bancário disponivel do cliete", () => {
      expect(ajusteLimite(200)).toEqual(400);
    });
    test("deve retornar a diminuicao e o novo limite bancário disponivel do cliete", () => {
      expect(ajusteLimite(100)).toEqual(100);
    });
    test("deve retornar a desativação do limite do cliete", () => {
      expect(ajusteLimite()).toEqual("O seu limite foi desativado");
    });
  });
});