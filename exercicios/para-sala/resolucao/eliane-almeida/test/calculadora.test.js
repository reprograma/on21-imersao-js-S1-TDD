const { Calculadora } = require("../calculadora");

/**
 8) Usando TDD:
- Crie uma classe chamada Calculadora;
- Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
- Use a criatividade e crie um último método que utilize pelo menos dois dos métodos criados anteriormente.
*/

describe("Calculadora", () => {
    it("testar a função soma", () => {
        const calc = new Calculadora(2, 2)
        const result = calc.soma()
        expect(result).toEqual(4);
    });

    it("testar a função subtração", () => {
        const calc = new Calculadora(8, 3)
        const result = calc.subtracao()
        expect(result).toEqual(5);
    });

    it("testar a função multiplicação", () => {
        const calc = new Calculadora(2, 3)
        const result = calc.multiplicacao()
        expect(result).toEqual(6);
    });

    it("testar a função divisão", () => {
        const calc = new Calculadora(15, 5)
        const result = calc.divisao()
        expect(result).toEqual(3);
    });

    it("testar a função fatorial", () => {
        const calc = new Calculadora(6)
        const result = calc.fatoracao()
        expect(result).toEqual(720);
    });

    it("testar a função expressao numerica de dois tipos", () => {
        const calc = new Calculadora(5, 2)
        const result = calc.expressaoNumerica()
        expect(result).toEqual(17);
    });
});
