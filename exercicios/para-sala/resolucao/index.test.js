const { convertCelsiusToFahrenheit, checkEvenNumber, sum, revert } = require('../index')

describe('convertCelsiusToFahrenheit', () => {
    test('should return 32 when temperature is 0', () => {
        expect(convertCelsiusToFahrenheit(60)).toBe(140)
    })
})

describe("checando se o numero é impar ou par", () => {
    test("deve retornar se o parametro é um número", () => {
        const resultado = checkEvenNumber("banana")
        expect(resultado).toBeNaN()
    })
})

describe("função de soma", () => {
    test("(5, 1) => 6", () => {
        expect(sum(5, 1)).toBe(6);
    });
    test("soma triplicada", () => {
        expect(sum(1, 1)).toEqual(6);
    });
})

describe("Reverter String", () => {
    test("deve reverter a string", () => {
        expect(revert("casa")).toBe("asac");
    });
});





