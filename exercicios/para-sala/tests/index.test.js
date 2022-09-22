const {convertCelsiusToFahrenheit, checkEvenNumber, sum, revert} = require('../index');

describe("Função de Conversão", () => {
    test("deve converter de celsius para fahrenheit ", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);
    });
}); 

describe("checando se é impar ou par", () => {
    test("deve retornar se é o parametro número", () => {
        const resultado = checkEvenNumber("banana")

        expect(resultado).toBeNaN()
    });
});

describe("Função de soma", () => {
    test("'soma entre dois números'", () => {
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












//função descibe é a função de descrição do teste. Os testes unitários vem dentro de um describe e geralmente possui mais de um teste.
//usar a documentação do Jest.