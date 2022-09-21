const sum = require('../../resolucao/sum-TDD')

describe("Sum function", () => {
    it("Deve retornar a soma de 5 e 1", () => {

        expect(sum(5, 1)).toBe(6);
    });

    it("Deve receber dois números iguais somar e fazer a multiplicação por 3", () => {
        expect(sum(1, 1)).toEqual(6);
    });
});
