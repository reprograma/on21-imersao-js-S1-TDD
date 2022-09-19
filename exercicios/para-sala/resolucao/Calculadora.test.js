const {Calculadora} = require('./Calculadora')

describe("calculadora",()=>{
    test('testa função de soma', ()=>{
        expect(Calculadora.soma(2, 2)).toEqual(4)
    })
    test('testa função de subtração', ()=>{
        expect(Calculadora.subtrai(5, 2)).toEqual(3)
    })
    test('testa função de multiplicação', ()=>{
        expect(Calculadora.multiplica(3, 2)).toEqual(6)
    })
    test('testa função de divisao', ()=>{
        expect(Calculadora.divide(10, 2)).toEqual(5)
    })
})