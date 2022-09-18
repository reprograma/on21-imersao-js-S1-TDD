const Calculadora = require("./Calculadora");

describe("Função de calculadora", () => {
  test("soma", () => {
    const result = new Calculadora(3, 2);
    expect(result.sum()).toEqual(5);
  });

  test("subtração", () => {
    const result = new Calculadora(3, 2);
    expect(result.subtraction()).toEqual(1);
  });

  test("divisão", () => {
    const result = new Calculadora(4, 2);
    expect(result.division()).toEqual(2);
  });

  test("fatorial", () => {
    const result = new Calculadora(5);
    expect(result.fatorial()).toEqual(120);
  });
});
