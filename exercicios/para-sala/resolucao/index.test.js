const {
  convertCelsiusToFahrenheit,
  checkEvenNumber,
  sum,
  revert,
} = require("../index");

describe("Função de Conversão", () => {
  test("Deve converter de Celsius para Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(60)).toEqual(140);
  });
});

describe("checando funcao checkEvenNumber, se é impar ou par", () => {
  test("Testar se a entrada é um número", () => {
    const resultado = checkEvenNumber("banana");

    expect(resultado).toEqual("banana não é um número");
  });
});

describe("Sum function", () => {
  test("(5, 1) => 6)", () => {
    expect(sum(5, 1)).toEqual(6);
  });

  test("soma triplicada para numeros iguais", () => {
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
