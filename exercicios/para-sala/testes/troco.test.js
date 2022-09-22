// Escreva um teste (e depois a função) para uma função calcule como um troco (centavos) será dado em moedas. A função deve receber o valor do troco, e um array com as moedas disponíveis.

const calculaTroco = require("../calculoTroco")


describe('Troco',() => {
    const moedasDisponiveis = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
    
    test('troco para  R$ 1  e retornar 1 array [1]', () => {
        
        const moedasRetornadasDoTroco = calculaTroco(1, moedasDisponiveis)
        const resultadoEsperado = [1];

        expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado)
    });

    test('troco para 1,50 retornar um array[1, 0.5]', () => {

        const moedasRetornadasDoTroco = calculaTroco(1.50, moedasDisponiveis)
        const resultadoEsperado = [1, 0.5];

        expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);
    });

    test('troco para R$ 2,00 retornar um array[1, 1]', () => {
        const moedasRetornadasDoTroco = calculaTroco(2.00, moedasDisponiveis)
        const resultadoEsperado = [1, 1];

        expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado)
    });

    test('troco para R$ 2,50 retornar um array[1, 1, 0.50]', () => {
        const moedasRetornadasDoTroco = calculaTroco(2.50, moedasDisponiveis)
        const resultadoEsperado = [1, 1, 0.50];

        expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado)
    });

    test('troco para R$ 3,00 retornar um array[1, 1, 1]', () => {
        const moedasRetornadasDoTroco = calculaTroco(3.00, moedasDisponiveis)
        const resultadoEsperado = [1, 1, 1];

        expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado)
    });
});