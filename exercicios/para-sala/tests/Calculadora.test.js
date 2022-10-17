const Calculadora = require("../Calculadora")
// Crie uma classe chamada Calculadora;
// Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
// Use a criatividade e crie um último método que utilize pelo menos dois dos
// métodos criados anteriormente.

describe("Calculadora", () => {
    const calculadoraBasica = new Calculadora(2, 2)

    test("Soma", () => {
        expect(calculadoraBasica.soma()).toEqual(4)
    })

    test("Subtração", () => {
        expect(calculadoraBasica.subtracao()).toEqual(0)
    })

    test("Multiplicao", () => {
        expect(calculadoraBasica.multiplicacao()).toEqual(4)
    })

    test("Divisao", () => {
        expect(calculadoraBasica.divisao()).toEqual(1)
    })

    test("Fatorial", () => {
        expect(calculadoraBasica.fatorial()).toEqual(2)
    })

    test("Fatorial da Soma", () => {
        expect(calculadoraBasica.fatorialSoma()).toEqual(24)
    })
})