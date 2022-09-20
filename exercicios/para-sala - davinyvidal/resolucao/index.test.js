const { convertCelsiusToFahrenheit, checkEvenNumber, sum, revert, Calculadora } = require('../index');

describe('Function ConvertToCelsiusToFahrenheit()', () => {
    test("", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);

    });
})

describe('Function checkEvenNumber()', () => {
    test("", () => {
        const result = checkEvenNumber('a')
        expect(result).toBeNaN();  
        });
    })

// A função soma dois números, caso os números sejam iguais, a soma é triplicada

describe("Sum function", () => {
    test("soma de dois número", () => {
        expect(sum(5, 1)).toEqual(6);
    });
    test("soma triplicada", () => {
        expect(sum(1, 1)).toEqual(6);
    });
});

// Considere o teste abaixo e escreva a função para que o teste passe.

describe("RevertString function", () => {
    test("'casa' => 'asac'", () => {
        expect(revert('casa')).toEqual('asac');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
});


describe("criar calculadora", () => {
    const calculando = new Calculadora();
    test('Somatoria', () => {
        expect(calculando.soma(1, 2)).toEqual(3);
    }
    )
    test('Subtração', () => {
        expect(calculando.subtrai(1, 1)).toEqual(0);
    }
    )
    test('Multiplicação', () => {
        expect(calculando.multiplica(1, 1)).toEqual(1);
    }
    )
    test('Divisão', () => {
        expect(calculando.divide(1, 1)).toEqual(1);
    }
    )
    test('faltorial', () => { 
        expect(calculando.fatorial(5)).toEqual(120);
    }
    )
    test('SomaAndDivisao', () => {
        expect(calculando.SomaAndDivisao(2, 2, 2)).toEqual(2);
    }
    )
})
