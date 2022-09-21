const Conta = require("../../index");

var contaCriada = new Conta("Amanda", 500, 1000, true);
beforeEach(() => {
  contaCriada = new Conta("Amanda", 500, 1000, true);
});
describe("Saldo da conta", () => {
  it("Pegar saldo", () => {
    expect(contaCriada.getSaldo()).toEqual(500);
  });
});

describe("Depósito na conta", () => {
  it("Fazer depósito", () => {
    expect(contaCriada.fazerDeposito(50)).toEqual(550);
  });
});

describe("Saque", () => {
  it("Faz saque caso tenha saldo suficiente", () => {
    expect(contaCriada.fazSaque(100)).toEqual(400);
  });
  it("Faz saque caso tenha saldo insuficiente, mas limite disponível", () => {
    expect(contaCriada.fazSaque(550)).toEqual(-50);
  });
});

describe("Limite", () => {
  it("Ajustar limite para mais", () => {
    expect(contaCriada.ajustarLimiteParaMais(350)).toEqual(1350);
  });

  it("Ajustar limite para menos", () => {
    expect(contaCriada.ajustarLimiteParaMenos(350)).toEqual(650);
  });

  it("Ativar limite", () => {
    expect(contaCriada.ativarLimite(false)).toBeTruthy();
  });

  it("Desativar limite", () => {
    expect(contaCriada.ativarLimite(true)).toBeFalsy();
  });
});
