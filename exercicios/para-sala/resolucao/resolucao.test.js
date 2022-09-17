const { convertCelsiusToFahrenheit, checkEvenNumber, revert, sum, Calculadora } = require("./resolucao");

describe("Testes resolução", () => {
    describe("Função de conversão", () => {
        it ("Deve converter a temperatura de Celsius para fahrenheit", () => {
            expect(convertCelsiusToFahrenheit(60)).toEqual(140);
        })
    })

    describe("Função para verificar se é numero par ou impar", () => {
        it ("Deve verificar se não é um numero", () => {
            const resultado = checkEvenNumber("Tomate")
            expect(resultado).toEqual("Tomate não é um número")
        })

        it ("Deve verificar se o número é par", () => {
            const resultado = checkEvenNumber(30)
            expect(resultado).toEqual("30 é um número par")
        })
        it ("Deve verificar se o número é par", () => {
            const resultado = checkEvenNumber(35)
            expect(resultado).toEqual("35 é um número ímpar")
        })
    })

    // 6) A função soma dois números, caso os números sejam iguais, a soma é triplicada

    describe("Função soma", () => {
        it ("Testar a soma entre dois números", () => {
            expect(sum(5, 1)).toEqual(6);
        });

        it ("Testar a soma triplicada", () => {
            expect(sum(1, 1)).toEqual(6);
        });
    });

    // 7) Considere o teste abaixo e escreva a função para que o teste passe.
    describe("RevertString function", () => {
        it ("'casa' => 'asac'", () => {
            expect(revert('casa')).toEqual('asac');
        });

        it ("'javascript' => 'tpircsavaj'", () => {
            expect(revert('javascript')).toEqual('tpircsavaj');
        });
    });

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
    });
});