const { contaBancaria, saque, consultarSaldo } = require('../contaBancaria')

describe('Conta bancaria', () => {

    test('Validar se a conta bancaria possui titular banana', () => {
    expect(contaBancaria.titular).toBe("banana")
    })
    test('Validar se a conta bancaria possui saldo de 52 reais', () => {
        expect(contaBancaria.saldo).toEqual(52)
    })

    test('Validar se a conta bancaria possui limite no valor de 100 reais', () => {
        expect(contaBancaria.limiteDaConta).toEqual(100)
    })
    test('Validar se a conta bancaria está definida', ( ) => {
        expect(contaBancaria).toBeDefined()
    })

    test('Validar se titular está definido', ( ) => {
        expect(contaBancaria.titular).toBeDefined()
    })
  
    test('Validar se saldo está definido', ( ) => {
        expect(contaBancaria.saldo).toBeDefined()
    })

    test('Validar se limite da conta está definido', ( ) => {
        expect(contaBancaria.limiteDaConta).toBeDefined()
    })

    test('Consultar saldo', () => {
        const saldo = consultarSaldo.saldo
        expect(saldo).toEqual(52)
    })

    test("Saque autorizado", () => {
        const vouSacarIsso = saque(50)
        expect(vouSacarIsso).toEqual(2)
    })
    test("Sem saldo e limite insuficiente", () => {
        const vouSacar = saque(300)     
        expect(vouSacar).toBe("Você não possui saldo e nem limite para saque")
    })

    
})