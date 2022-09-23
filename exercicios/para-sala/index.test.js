const convertCelsiusToFahrenheit = require('../index');
const checkEvenNumber = require('../index');

describe("Função de conversão", () => {
    test("Deve converter de Celsius para Fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);
    });
});

describe("Função testa se um numero é par, ímpar ou se não é um número", () => {
    test("Deve testar se é um número", () => {
        expect(checkEvenNumber("Palavra")).toBe();
    });
});