const Calculadora = require("../Calculadora")
// Crie uma classe chamada Calculadora;
// Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
// Use a criatividade e crie um último método que utilize pelo menos dois dos
// métodos criados anteriormente.

describe("Calculadora", () => {
    const calculadoraBasica = new Calculadora(2, 2)

    test("Deve fazer a soma entre dois números", () => {
        expect(calculadoraBasica.soma()).toEqual(4)
    });
    test("Deve fazer a subtracao entre dois números", () => {
        expect(calculadoraBasica.subtracao()).toEqual(0)
    });
    test("Deve fazer a divisao entre dois números", () => {
        expect(calculadoraBasica.divisao()).toEqual(1)
    });

    test("Deve fazer a multiplicação entre dois números", () => {
        expect(calculadoraBasica.multiplicacao()).toEqual(4)
    });
})