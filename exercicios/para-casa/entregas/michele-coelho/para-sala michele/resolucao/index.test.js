const { convertCelsiusToFahrenheit, checkEvenNumber, sum, revert } = require('../index');
const calculadora = require('./calculadora.js')

describe("Converter Celcius para Fahrenheit", () => {
    test('Converter graus de Celcius para Fahrenheit', () => {
        expect(convertCelsiusToFahrenheit(40)).toBe(104)
    })
})
describe("Checar número", () => {
    test('Checando se é um número', () => {
        expect(checkEvenNumber('oi')).toBeNaN();
    })
})
describe("Soma dois números", () => {
    test('soma de dois números diferentes', () => {
        expect(sum(7, 3)).toBe(10);
    })
    test('números iguais, soma e multriplica a soma ', () => {
        expect(sum(1, 1)).toBe(6);
    })
})
describe("Reverter a string", () => {
    test('Reverte uma palavra', () => {
        expect(revert("amor")).toBe("roma")
    })
})

describe("Calculadora", () => {
    test('Soma de dois números', () => {
        expect(calculadora.somar(4, 2)).toBe(6)
    })
    test('Subtração de dois números', () => {
        expect(calculadora.subtrair(4, 2)).toBe(2)
    })
    test('Divisão de dois números', () => {
        expect(calculadora.dividir(8, 2)).toBe(4)
    })
    test('Multiplicação de dois números', () => {
        expect(calculadora.multiplicar(4, 10)).toBe(40)
    })
    test('Fatorial de um número', () => {
        expect(calculadora.fatorial(3)).toBe(6)
    })

})