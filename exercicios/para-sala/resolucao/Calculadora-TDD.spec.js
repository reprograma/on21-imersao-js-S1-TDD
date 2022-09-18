const  Calculadora  = require("../resolucao/Calculadora-TDD")


describe('Calculadora', () => {

    it('Deve retornar a soma entre dois numeros', () => {
        const soma = Calculadora.soma(4,5)
        expect(soma).toEqual(9)
    })

    it('Deve retornar a subtração entre dois numeros', () => {
        const soma = Calculadora.subtracao(10,5)
        expect(soma).toEqual(5)
    })

    it('Deve retornar a multiplicação entre dois numeros', () => {
        const soma = Calculadora.multiplicacao(5,5)
        expect(soma).toEqual(25)
    })

    it('Deve retornar a divisão entre dois numeros', () => {
        const soma = Calculadora.divisao(5,5)
        expect(soma).toEqual(1)
    })

    it('Deve retornar a divisão entre dois numeros', () => {
        const soma = Calculadora.fatorial(5)
        expect(soma).toEqual(120)
    })

    it.skip('Deve retornar o valor disponivel com o resultado da sona e divisão', () => {
        const dispovivelValor = Calculadora.valorDisponivel(soma,subtracao)
        expect(dispovivelValor).toEqual(120)
    })


})