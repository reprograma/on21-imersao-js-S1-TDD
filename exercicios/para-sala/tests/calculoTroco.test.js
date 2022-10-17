const calculaTrocoCentavosEmMoedas = require("../calculoTroco")

// 9) Escreva um teste (e depois a função) para uma função que calcule como um
// troco (em centavos) será dado em moedas. A função deve receber o valor do troco, e um array com as moedas disponíveis

describe("Calcular troco em centavos", () => {
    const moedas = [1, 5, 10, 25, 50]
    const resultado = "O troco será de 7 moedas de 50 centavos."
    test("deve retornar as moedas utilizadas no troco", () => {
        expect(calculaTrocoCentavosEmMoedas(350, moedas)).toEqual(resultado)
    })
})