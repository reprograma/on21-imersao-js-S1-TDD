const { Calculadora } = require ('../calculadora')

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

})
