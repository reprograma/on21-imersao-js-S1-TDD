const {
  checkEvenNumber,
  convertCelsiusToFahrenheit,
  revert,
  sum,
} = require("../index.js");

describe("função de conversão", () => {
  test("deve converter de celsius para farhenheit", () => {});
  expect(convertCelsiusToFahrenheit(60)).toEqual(140);
});

describe("A função deve checar se o parametro é numero ou se o numero é impar ou par", () => {
  test("deve retornar se o parametro é número ", () => {});
  const resultado = checkEvenNumber("banana");
  expect(resultado).toEqual("banana não é um número");
});

describe("Sum function", () => {
  test("soma entre dois números", () => {
    const teste = sum(5, 1);
    expect(teste).toEqual(6);
  });

  test("soma triplicada", () => {
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
