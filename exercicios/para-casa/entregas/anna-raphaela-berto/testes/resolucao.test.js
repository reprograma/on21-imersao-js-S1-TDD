const { saldo, saque, deposito, ajusteLimite } = require("../resolucao");

describe("Recursos da conta bancária", () => {
  describe("Consulta de saldo", () => {
    test("deve retornar o saldo disponivel", () => {
      expect(saldo()).toEqual(200);
    });
  });

  describe("Depósito", () => {
    test("deve testar se o depósito é um número negativo", () => {
      expect(deposito(-200)).toEqual("Você não pode fazer esta operação");
    });
    test("deve retornar o novo saldo após depósito", () => {
      expect(deposito(200)).toEqual(400);
    });
  });

  describe("Saque", () => {
    test("deve testar que o saque é um número negativo", () => {
      expect(saque(-200)).toEqual("Você não pode fazer esta operação");
    });
    test("saque com saldo disponivel em conta", () => {
      expect(saque(50)).toEqual(150);
    });
    test("saque sem saldo disponivel em conta", () => {
      expect(saque(250)).toEqual(-50);
    });
    test("saque sem saldo e sem limite disponivel", () => {
      expect(saque(1000)).toEqual(
        "Você não possui saldo nem limite desponível para saque"
      );
    });
  });

  describe("Ajuste de limite", () => {
    test("deve retornar o novo limite bancário após a aumento", () => {
      expect(ajusteLimite(200)).toEqual(400);
    });
    test("deve retornar o novo limite bancário após a diminuição", () => {
      expect(ajusteLimite(-100)).toEqual(100);
    });
    test("deve retornar a desativação do limite do cliete", () => {
      expect(ajusteLimite("desativar")).toEqual("O seu limite foi desativado");
    });
    test("deve retornar 0 se o novo limite for negativo", () => {
      expect(ajusteLimite(-300)).toEqual(0);
    });
  });
});