const {
  convertCelsiusToFahrenheit,
  checkEvenNumber,
  sum,
  revert,
} = require("../index");

describe("Função de conversão", () => {
  test("deve converter de celsius para fahrenheit", () => {
    const result = convertCelsiusToFahrenheit(60);
    expect(result).toEqual(140);
  });
});

describe("Função se é impar ou par", () => {
  test("deve retornar se é um número", () => {
    const result = checkEvenNumber("banana");
    expect(result).toEqual("banana não é um número");
  });
  test("deve voltar par", () => {
    const result = checkEvenNumber(4);
    expect(result).toEqual("4 é um número par");
  });
  test("deve voltar impar", () => {
    const result = checkEvenNumber(7);
    expect(result).toEqual("7 é um número ímpar");
  });
});

// A função soma dois números, caso os números sejam iguais, a soma é triplicada
describe("Função de soma", () => {
  test("soma de 5 com 1 deve retornar 6", () => {
    expect(sum(5, 1)).toEqual(6);
  });

  test("soma de 1 com 1 deve retornar triplicado 6", () => {
    expect(sum(1, 1)).toEqual(6);
  });
});
describe("RevertString function", () => {
  test("'casa' => 'asac'", () => {
    expect(revert("casa")).toEqual("asac");
  });

  test("'javascript' => 'tpircsavaj'", () => {
    expect(revert("javascript")).toEqual("tpircsavaj");
  });
});
