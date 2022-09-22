const { Calculadora } = require ('../calculadora');

//Crie uma classe chamada Calculadora;
//Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
//Use a criatividade e crie um último método que utilize pelo menos dois dos métodos criados anteriormente.


describe("Teste Calculadora", () => {
    test("Realizando a soma de dois números", () => {
        expect(Calculadora.soma(4, 5)).toEqual(9)
    });
    
    test("Realizando a subtração de dois números", () => {
        expect(Calculadora.subtracao(10, 5)).toEqual(5)
    });

    test("Realizando a multiplicação entre dois números", () => {
        expect(Calculadora.multiplicacao(2 ,2)).toEqual(4)
    });

    test("Realizando a divisão entre dois números", () => {
        expect(Calculadora.divisao(10, 2)).toEqual(5)
    });

});