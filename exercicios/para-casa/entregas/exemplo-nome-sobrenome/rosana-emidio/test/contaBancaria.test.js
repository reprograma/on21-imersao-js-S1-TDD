const contaBancaria = require('../contaBancaria')


describe('Conta bancaria', () => {
    test('Validar se a conta bancaria possui titular banana', () => {
    expect(contaBancaria.titular).toBe("banana")
    })
    test('Validar se a conta bancaria possui saldo de 52 reais', () => {
        expect(contaBancaria.saldo).toEqual(52)
    })

    test('Validar se a conta bancaria está definida', ( ) => {
        // const titular = contaBancaria.titular
        expect(contaBancaria).toBeDefined()
    })

    test('Validar se titular está definido', ( ) => {
        // const titular = contaBancaria.titular
        expect(contaBancaria.titular).toBeDefined()
    })
    
})