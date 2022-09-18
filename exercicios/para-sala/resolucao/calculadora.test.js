const { Calculadora } = require('./calculadora.js')

/* Exercícios:
Usando TDD:
- Crie uma classe chamada Calculadora;
- Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
- Use a criatividade e crie um último método que utilize pelo menos dois dos métodos criados anteriormente. */

describe("Teste da classe Calculadora", () => {
    test("soma 12 + 2 = 12", () => {
        const calculadora = new Calculadora();
        expect(calculadora.soma(10, 2)).toBe(12);
    })

    test("soma 5 + 'batata' = 'Insira apenas números'", () => {
        const calculadora = new Calculadora();
        expect(calculadora.soma(5, "batata")).toBe("Insira apenas números");
    })

    test("subtração 7 - 4 = 3", () => {
        const calculadora = new Calculadora();
        expect(calculadora.subtracao(7, 4)).toBe(3);
    })

    test("subtração 5 - 12 = -7", () => {
        const calculadora = new Calculadora();
        expect(calculadora.subtracao(5, 12)).toBeLessThan(0);
    })

    test("multiplicação 3 x 5 = 15", () => {
        const calculadora = new Calculadora();
        expect(calculadora.multiplicacao(3, 5)).toBe(15);
    })

    test("divisão 30 / 6 = 5", () => {
        const calculadora = new Calculadora();
        expect(calculadora.divisao(30, 6)).toBe(5);
    })

    test("fatorial !5 = 120", () => {
        const calculadora = new Calculadora();
        expect(calculadora.fatorial(5)).toBe(120);
    })

    test("porcentagem 10% de 100 = 10", () => {
        const calculadora = new Calculadora();
        expect(calculadora.porcentagem(10, 100)).toBe(10);
    })
})