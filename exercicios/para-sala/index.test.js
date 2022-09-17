const {convertCelsiusToFahrenheit, checkEvenNumber, sum, revert} = require('./index');
const  Calculadora  = require('./calculadora');

describe("Função de conversão", () => {
    test("deve converter de celsius para Fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    });
    
});

describe("checando numero é impar ou par", () => {
    test("deve retornar se é o parametro número", () => {
        const result = checkEvenNumber("banana")

        expect(result).toBeNaN()
    });
});

// A função soma dois números, caso os números sejam iguais, a soma é triplicada

describe("Sum function", () => {
    test("soma entre dois numeros", () => {
        expect(sum(5, 1)).toEqual(6);
    });

    test("(1, 1) => 6)", () => {
        expect(sum(1, 1)).toEqual(6);
    });
});

describe("RevertString function", () => {
    test("'casa' => 'asac'", () => {
        expect(revert('casa')).toEqual('asac');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
});

describe("testar calculadora", () => {
    test("soma", () => {
        expect(Calculadora.soma(5, 1)).toEqual(6);
    });

    test("subtracao", () => {
        expect(Calculadora.sub(6, 2)).toEqual(4);
    });
    
    test("multiplicacao", () => {
        expect(Calculadora.mult(3, 3)).toEqual(9);
    });
    
    test("divisao", () => {
        expect(Calculadora.div(10, 2)).toEqual(5);
    });

    test("fatorial", () => {
        expect(Calculadora.fatorial(3)).toEqual(6);
    });
});

