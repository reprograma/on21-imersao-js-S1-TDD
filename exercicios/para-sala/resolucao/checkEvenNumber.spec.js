const checkEvenNumber = require('../resolucao/checkEvenNumber')

describe ('checkEvenNumber', () => {
    it('Verifica que não é um numero ', () => {

        const result = checkEvenNumber("test")
        // expect(result).toBeNaN()
        expect(result).toBe("test não é um número")

    })

    // para numero usamos ToBeEqual

    it('Verificar se o número é par', () => {
        const result = checkEvenNumber(2)
        expect(result).toBe("2 é um número par")
    })

    it('Deve retornar que um número não é ', () => {
        const result = checkEvenNumber(3)
        expect(result).toBe("3 é um número ímpar")



    })
})