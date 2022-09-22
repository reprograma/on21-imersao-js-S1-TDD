const Calculadora = require("../Calculadora");

describe("Função de calculadora", () => {
  test("soma", () => {
    expect(Calculadora.sum(3, 2)).toEqual(5);
  });

  test("subtração", () => {
    expect(Calculadora.subtraction(3, 2)).toEqual(1);
  });

  test("divisão", () => {
    expect(Calculadora.division(4, 2)).toEqual(2);
  });

  test("fatorial", () => {
    expect(Calculadora.fatorial(5)).toEqual(120);
  });
});
