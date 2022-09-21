const {Calculadora} = require('./Calculadora')
describe("Testar Calculadora",()=>{
    test('Testa função de soma', ()=>{
        expect(Calculadora.soma(2, 2)).toEqual(4)
    })
    test('Testa função de subtração', ()=>{
        expect(Calculadora.subtrai(5, 2)).toEqual(3)
    })
    test('Testa função de multiplicação', ()=>{
        expect(Calculadora.multiplica(3, 2)).toEqual(6)
    })
    test('Testa função de divisao', ()=>{
        expect(Calculadora.divide(10, 2)).toEqual(5)
    })
    test('Testa a função fatorial', ()=>{
        expect(Calculadora.fatorial(5)).toEqual(120)
    })
    test('Testa a função de retornar um número ao quadrado', () => {
        expect(Calculadora.aoQuadrado(4)).toEqual(16)
    })
    test('Testa função de calcular média', () => {
        expect(Calculadora.media(2, 4, 6, 8)).toEqual(5)
    })
})

