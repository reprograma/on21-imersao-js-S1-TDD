const { Calculadora } = require ('./calculadora');

describe("calculadora", ()=> {
    test("testar função soma", () => {
        expect(Calculadora.soma(2, 2)).toEqual(4)
    });
    test("testar função de subtração", () => {
        expect(Calculadora.subtracao(3,2)).toEqual(1)
    });
    test("testar função de multiplicação", () => {
        expect(Calculadora.multiplicacao(2,3)).toEqual(6)
    });
    test("testar função de divisão", () => {
        expect(Calculadora.divisao(6, 2)).toEqual(3)
    });
    test("testar função de fatorial", () => {
        expect(Calculadora.fatorial(6)).toEqual(720)
    });
})
