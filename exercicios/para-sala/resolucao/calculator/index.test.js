const { Calculator, Fatorial } = require('./calculator');
describe("calculadora", () => {
    test("testar função soma", () => {
        const calculator = new Calculator(1, 2);
        expect(calculator.getSoma()).toEqual(3);
    });
    test("testar função de subtração", () => {
        const calculator = new Calculator(1, 2);
        expect(calculator.getSubtracao()).toEqual(-1);
    });
    test("testar função de multiplicação", () => {
        const calculator = new Calculator(9, 9);
        expect(calculator.getMultiplicacao()).toEqual(81);
    });
    test("testar função de divisão", () => {
        const calculator = new Calculator(6, 2);
        expect(calculator.getDivisao()).toEqual(3);
    });
})
describe("fatorial", () => {
    test("testar função de fatorial", () => {
        const fatorial = new Fatorial(6);
        expect(fatorial.getFatorial()).toEqual(720);
    });
}); 
