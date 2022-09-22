const {Calculadora} = require('../calculadora')

describe("Somar dois numeros", () => {
    test("soma entre dois numeros", () => {
        expect(soma(2, 2)).toEqual(4);
    });

    test("soma dois números", () => {
        expect(soma(4, 4)).toEqual(10);
    });
});