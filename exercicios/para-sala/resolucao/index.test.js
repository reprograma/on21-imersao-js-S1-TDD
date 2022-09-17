const {convertCelsiusToFahrenheit} = require('../index')
const {checkEvenNumber} = require('../index')
const {sum} = require('../index')
const {revert} = require('../index')

describe("Função de conversão", () => {
  test("deve converter de celsius para fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(60)).toBe(140)
  })
});

describe("checando se é impar ou par", () => {
  test("deve retornar se é o parametro número", () => {
    const resultado = checkEvenNumber("banana")
    expect(resultado).toBeNaN()
  })
})


// A função soma dois números, caso os números sejam iguais, a soma é triplicada
describe("Função de soma", () => {
  test("(5, 1) => 6)", () => {
      expect(sum(5, 1)).toEqual(6);
  });

  test("soma triplicada", () => {
      expect(sum(1, 1)).toEqual(6);
  });
});

describe("RevertString function", () => {
  test("'casa' => 'asac'", () => {
      expect(revert('casa')).toEqual('asac');
  });

  test("'javascript' => 'tpircsavaj'", () => {
      expect(revert('javascript')).toEqual('tpircsavaj');
  });
});
