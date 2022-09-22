const { convertCelsiusToFahrenheit } = require("../index");
const { checkEvenNumber } = require("../index");
const { sum } = require("../index");
const { revert } = require("../index");
const { Calculadora } = require("../index");

describe("Função de conversão", () => {
  test("Deve converter de celsius para fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(60)).toEqual(140);
  });
});

describe("Função de checagem se é numero par ou impar", () => {
  test("Deve verificar se é um numero", () => {
    expect(checkEvenNumber("string")).toBe("string não é um número");
  });
});

describe("Sum function", () => {
  test("(5, 1) => 6)", () => {
    expect(sum(5, 1)).toEqual(6);
  });

  test("(1, 1) => 6)", () => {
    expect(sum(1, 1)).toEqual(6);
  });
});

describe("Reverte function", () => {
  test("(casa) => asac)", () => {
    expect(revert("casa")).toEqual("asac");
  });
});

describe("", () => {
  const calculando = new Calculadora();
  test("", () => {
    expect(calculando.soma(1, 1)).toBe(2);
  });
  test("", () => {
    expect(calculando.subtrai(2, 1)).toBe(1);
  });
  test("", () => {
    expect(calculando.multiplica(2, 2)).toBe(4);
  });
  test("", () => {
    expect(calculando.divide(6, 2)).toBe(3);
  });
});
