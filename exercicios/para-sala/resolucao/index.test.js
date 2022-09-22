const {convertCelsiusToFahrenheit, checkEvenNumber, soma, revert, receberMoedas,jokenpo } = require('../index')

describe("Função de conversão", () => {
    test("deve converter de celsius para fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    })
})

describe("Função checar números pares e ímpares", () => {
    test("deve retornar se o parametro é número", () => {
        const resultado = checkEvenNumber("banana")
        expect(resultado).toBeNaN()
    })
})

describe("Função jokenpo", () => {
    test("deve retornar empate", () => {
        expect(jokenpo('pedra', 'pedra')).toBe("Empate!")
    })
})

describe("Sum function", () => {
    test("(5, 1) => 6)", () => {
        expect(soma(5, 1)).toEqual(6);
    });

    test("(1, 1) => 6)", () => {
        expect(soma(1, 1)).toEqual(6);
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

describe("Calcular Troco", () => {
    const moedasDisponiveis = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

    test("troco para 1 real retorna 1 moeda de 1 real", () => {
        expect(receberMoedas(1, moedasDisponiveis)).toEqual([1])
    })

    test('troco para 1,50 retornar um array [1, 0.5]', () => {
        expect(receberMoedas(1.5, moedasDisponiveis)).toEqual([1, 0.50])
    })

    test('troco para 2 retornar array [1,1]', () => {
        expect(receberMoedas(2.0, moedasDisponiveis)).toEqual([1,1])
    })

})
