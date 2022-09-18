const { convertCelsiusToFahrenheit, checkEvenNumber, sum, revert } = require('../index') //exportando objetos e importando um objeto

describe("Função de conversão", () => {
    test("deve converter de celsius para fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    })
})

describe("checando se é impar ou par", () => {
    test("deve retornar se o parâmetro é um número", () => {
        const resultado = checkEvenNumber("banana")

        expect(resultado).toBeNaN("banana não é um número")
    })
})

// A função soma dois números, caso os números sejam iguais, a soma é triplicada

describe("Sum function", () => {
    test("(5, 1) => 6)", () => {
        expect(sum(5, 1)).toEqual(6);
    });

    test("(1, 1) => 6)", () => {
        expect(sum(1, 1)).toEqual(6);
    });
});

describe("RevertString function", () => {
    test.only("'casa' => 'asac'", () => {
        expect(revert('casa')).toEqual('asac');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
});