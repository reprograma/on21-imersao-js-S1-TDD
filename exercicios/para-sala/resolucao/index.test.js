const { convertCelsiusToFahrenheit, checkEvenNumber, sum, revert } = require('../index')


describe("Função de conversão", () => {
    test("Deve converter de Celsius para Fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    })
})

describe("Verificando número impar ou par", () => {
    test("Primeiro verifica se é número", () => {
        const resultado = checkEvenNumber("banana")
        expect(resultado).toBeNaN()
    })
})

// A função soma dois números, caso os número sejam iguais, a soma é triplicada
describe("Função de soma", () => {
    test("Soma entre dois números", () => {
        expect(sum(5, 1)).toEqual(6)
    })

    test("soma triplicada caso os números sejam iguais", () => {
        expect(sum(1, 1)).toEqual(6)
    })
})