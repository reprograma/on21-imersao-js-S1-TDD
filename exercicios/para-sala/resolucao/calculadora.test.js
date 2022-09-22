const Calculadora = require("../calculadora");
const calc = new Calculadora();

describe("Operação Soma", () => {
    test("Operação deve realizar a soma", () => {});
    expect(calc.soma(1,5)).toEqual(6);
  });

  describe ("Operação Subtração", () => {
    test("Operação deve realizar subtração", () => {});
    expect(calc.subtracao(5,1)).toEqual(4);
  });

  describe ("Operação Multiplicação", () => {
    test("Operação deve realizar multiplicação", () => {});
    expect(calc.multiplicacao(10,1)).toEqual(10);
  });

  describe ("Operação Divisão", () => {
    test("Operação deve realizar divisão", () => {});
    expect(calc.divisao(10,1)).toEqual(10);
  });

  describe ("Operação fatorial", () => {
    test("Operação deve realizar fatoração", () => {});
    expect(calc.fatorial(2)).toEqual(2);
  });

  describe ("Identificar operação", () => {
    test("Identificar se é uma operação de soma ou subtração", () => {});
    expect(calc.identificarOperacao(2,2,"+")).toEqual(4);
  });
