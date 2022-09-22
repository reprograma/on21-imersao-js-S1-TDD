const { Calculadora } = require('../calculadora')

describe("Realiza funções da Calculadora", () => {
    test("soma", () => {
        expect(Calculadora.soma(5,1)).toEqual(6)
    })

    test("subtração", () => {
        expect(Calculadora.subtracao(5,1)).toEqual(4)
    })

    test("divisao", () => {
        expect(Calculadora.divisao(10,2)).toEqual(5)
    })

    test("multiplicacao", () => {
        expect(Calculadora.multiplicacao(7,1)).toEqual(7)
    })

    test("fatorial", () => {
        expect(Calculadora.fatorial(5)).toEqual(120)
    })

    test("área do triangulo", () => {
        expect(Calculadora.areaDoTriangulo(4,6)).toEqual(12)
    })
})