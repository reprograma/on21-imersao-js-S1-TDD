const {
  convertCelsiusToFahrenheit,
  checkEvenNumber,
  jokenpo,
  generateCombinations,
  allKeys,
  isObject,
} = require("../index");

describe("Função de conversão", () => {
  test("deve converter de celsius para fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(60)).toEqual(140);
  });
});

describe("Função se é impar ou par", () => {
  test("deve retornar se é um número", () => {
    expect(checkEvenNumber("banana")).toEqual("banana não é um número");
  });
  test("deve voltar par", () => {
    expect(checkEvenNumber(4)).toEqual("4 é um número par");
  });
  test("deve voltar impar", () => {
    expect(checkEvenNumber(7)).toEqual("7 é um número ímpar");
  });
});
