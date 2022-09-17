const calculadora = require('./calculator')

describe("calculadora", ()=> {
    test("testar função soma", () => {
        expect(calculadora.soma(2, 2).toEqual(4))
    });
    test("testar função de subtração", () => {
        expect(calculadora.subtracao(2,3).toEqual(1))
    });
    test("testar função de multiplicação", () => {
        expect(calculadora.multiplicacao(2,3).toEqual(6))
    });
    test("testar função de divisão", () => {
        expect(calculadora.divisao(6, 2).toEqual(3))
    });
    test("testar função de fatorial", () => {
        expect(calculadora.fatorial(6).toEqual(720))
    });
})
