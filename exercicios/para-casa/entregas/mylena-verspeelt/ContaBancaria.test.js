const {
  consultarSaldo,
  saque,
  depositar,
  aumentarLimite,
  diminuirLimite,
  desativarLimite,
} = require("./ContaBancaria");

describe("Consulta de saldo", () => {
  test("Consultar saldo", () => {
    expect(consultarSaldo()).toEqual(100);
  });
// **************

  describe("Saque", () => {
    test("Saque com saldo suficiente", () => {
      expect(saque(70)).toEqual(30);                       
    });
    test("Saque com limite especial", () => {
      expect(saque(300)).toBe(-200);              
    });
    test('Saque indisponivel', ()=> {
      expect(saque(800)).toEqual('Não é possível realizar o saque.')
    })
  });

// **************
  describe("Depósito", () => {
    test("Depositar dinheiro", () => {
      expect(depositar(30)).toEqual(80); 
    });
  });

// **************
  describe("Ajustar limite da conta", () => {
    test("Aumentar limite", () => {
      expect(aumentarLimite(100)).toEqual(200); 
    });
    test("Diminuir limite", () => {
      expect(diminuirLimite(50)).toEqual(50);
    });
    test("Desativar opção de limite disponivel", () => {
      expect(desativarLimite(true)).toBe(false); 
    });
  });
});
