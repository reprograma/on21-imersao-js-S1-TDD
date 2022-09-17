const {convertCelsiusToFahrenhei} = require ('../index')
const {checkEvenNumber} = require ('../index.js')
const {sum} = require ('../index')
const {revert} = require ('../index')
const {Calculadora} = require ('../index')

describe ("Função de conversão", () => {
    test ("deve converter de calsius para fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    })
}) ;

describe("checando se é impar ou par", () => {
    test("deve retornar se é o parametro número", () => {
        const resultado = checkEvenNumber("banana")

        expect(resultado).toBeNaN()
    })
})

// A função soma dois números, caso os números sejam iguais, a soma é triplicada
describe("Função de soma", () => {
    test("soma entre dois némeros", () => {
        expect(sum(5, 1)).toEqual(6);
    });

    test("soma triplicada", () => {
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

describe("Criar calculadora", () => {
    const calculando = new Calculadora();

    test("soma", () => {
        expect(calculando.soma(1,1)).toEqual(2)
    })
    test("subtrai", () => {
        expect(calculando.subtrai(1,1)).toEqual(0)
   })
   test("multiplica", () => {
    expect(calculando.multiplica(1,1)).toEqual(1)

})
test("divide", () => {
    expect(calculando.divide(1,1)).toEqual(1)
})
test("fatorial", () => {
    expect(calculando.fatorial(5)).toEqual(120)
})

test("soma com divisão", () => {
    expect(calculando.somaAndDivide(8,4,2)).toEqual(6)
})
})