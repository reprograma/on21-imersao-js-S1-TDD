const contaBancaria = require('../contaBancaria')
const consultarSaldo = require('../contaBancaria')

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
        expect(consultarSaldo.saldo).toEqual(52)
    })

    //Testar se o saldo é insuficiente e possui limite, retira o valor do limite

    test("Validar saldo infuciente, valor sacado do limite", () => {
        const saldo = 2
        queroSacar = 50
        expect(saque(queroSacar)).toEqual(-48)
    })
    //testar se o saldo é insuficiente e não possui limite
    test("Saque com saldo insuficiente e sem limite", () => {
        const contaBancaria = {
            titular: "João",
            saldo:0,
            limiteDaConta: 0,
        }
        queroSacar = 300
        expect(saque(queroSacar)).toBe("Você não possui saldo e nem limite para saque")
    })

    
})