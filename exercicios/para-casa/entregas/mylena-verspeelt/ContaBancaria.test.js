const {
  consultarSaldo,
  saque,
  depositar,
  desativarLimite,
  diminuirLimite,
  aumentarLimite,
} = require("./ContaBancaria");

describe("Consulta de saldo", () => {
  test("Consultar saldo", () => {
    expect(consultarSaldo()).toEqual(100);
  });
  // ***********************************

  describe("Saque", () => {
    test("Se há saldo suficiente", () => {
      const valorSolicitadoParaSaque = 300;
      expect(valorSolicitadoParaSaque).toEqual(false);
    });
    test("Saque com saldo suficiente", () => {
      expect(saque(70)).toEqual(30); //ele vai retornar o valor do saldo que restou
    });

    test("Saque com limite disponível", () => {
      expect(saque(40)).toEqual(-40); //retorna o saldo restante
    });
  });

  // ***********************************
  describe("Depósito", () => {
    test("Depositar dinheiro", () => {
      expect(depositar(30)).toEqual(80); //ele vai retornar o valor do saldo atualizado
    });
  });

  // ***********************************
  describe("Ajudar limite da conta", () => {
    test("Aumentar limite", () => {
      expect(aumentarLimite(100)).toEqual(200); //retorna o valor final do limite disponivel
    });
    test("Diminuir limite", () => {
      expect(diminuirLimite(50)).toEqual(50); //retorna o valor final do limite disponivel
    });
    test("Desativar opção de limite disponivel", () => {
      expect(desativarLimite(true)).toBe(false); //retorna a chave limite_disponivel.ativo
    });
  });
});
