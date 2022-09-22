const {convertCelsiusToFahrenheit} = require('../index')
const {checkEvenNumber} = require('../index')
const {sum} = require('../index')
const {revert} = require('../index')
describe("Função de conversão", () => {
    test("deve converte de Celsius para Fahrenheit ", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    })
});

describe("checar número se é par ou impar",() => {
    test("deve retornar se o parametro é numero", () => {
        const resultado = checkEvenNumber("banans")

        expect(resultado).toBeNaN()

    })
})

describe("Funcao de soma", () => {
    test("soma entre dois numeros", () => {
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
// describe recebe dois parametros - 1-descrição do teste 2- função anonima
// test descrição + espeficida e funcao anonima
//quando o numero coloca toequal