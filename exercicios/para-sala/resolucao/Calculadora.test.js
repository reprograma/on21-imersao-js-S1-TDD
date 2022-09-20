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
    test('testa a função fatorial', ()=>{
        expect(Calculadora.fatorial(5)).toEqual(120)
    })
    test('testa a função de retornar um número ao quadrado', () => {
        expect(Calculadora.aoQuadrado(4)).toEqual(16)
    })
    test('testa função de calcular média', () => {
        expect(Calculadora.media(2, 4, 6, 8)).toEqual(5)
    })
})



// Crie uma classe chamada Calculadora;
// Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
// Use a criatividade e crie um último método que utilize pelo menos dois dos métodos criados anteriormente.
// 9) Escreva um teste (e depois a função) para uma função calcule como um troco (centavos) será dado em moedas. A função deve receber o valor do troco, e um array com as moedas disponíveis.