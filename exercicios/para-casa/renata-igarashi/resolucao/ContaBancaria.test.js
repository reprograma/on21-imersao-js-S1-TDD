const ContaBancaria = require("./ContaBancaria")

describe('Conta Bancária', () => {
    test('Deve efetuar saque com sucesso', () => {
        const contaBancaria = new ContaBancaria('Renata', 300, 1000)
        const result = contaBancaria.saque(200)
        expect(result).toEqual('Valor saque: R$200. Saldo Atual: R$100. Limite: R$1000')
    })

    test('Deve retornar saldo insuficiente para saque', () => {
        const contaBancaria = new ContaBancaria('Renata', 300, 50)
        const result = contaBancaria.saque(500)
        expect(result).toEqual('Saldo insuficiente para saque')
    })
    test('Deve retornar saldo negativo ao fazer saque do limite', () => {
        const contaBancaria = new ContaBancaria('Renata', 100, 50)
        const result = contaBancaria.saque(140)
        expect(result).toEqual('Valor saque: R$140. Saldo Atual: R$-40. Limite: R$10')
    })
})