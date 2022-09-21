const {
Calculadora
} = require("../calculadora");

describe("Calculadora", () => {
  test("soma", () => {
    expect(Calculadora.soma(5, 1)).toEqual(6);
  });
  test("subtracao", () => {
    expect(Calculadora.subtracao(5, 1)).toEqual(4);
  });
  test("multplicacao", () => {
    expect(Calculadora.multiplicacao(5, 1)).toEqual(5);
  });
  test("divisao", () => {
    expect(Calculadora.divisao(5, 1)).toEqual(5);
  });
  describe("fatorial", () => {
    test("fatorial para numeros naturais", () => {
      expect(Calculadora.fatorial(5)).toEqual(120);
    });
    test("fatorial para numero 0 ou 1", () => {
      expect(Calculadora.fatorial(1)).toEqual(1);
      expect(Calculadora.fatorial(0)).toEqual(1);
    });

    test("retorno para numeros nao naturais", () => {
      expect(Calculadora.fatorial(-2)).toEqual(
        "Não existe fatorial de um número não negativo"
      );
    });
  });
});
