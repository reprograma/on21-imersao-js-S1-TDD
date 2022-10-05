const ContaBancaria = require("./ContaBancaria")

describe('Conta Bancária', () => {
    beforeEach(() => {
        return conta = new ContaBancaria("Renata", 1000, 500)
      })
    test('Deve efetuar saque com sucesso', () => {
        const result = conta.saque(200)
        expect(result).toEqual('Valor saque: R$200. Saldo Atual: R$800. Limite: R$500')
    })

    test('Deve retornar saldo insuficiente para saque', () => {
        const result = conta.saque(2000)
        expect(result).toEqual('Saldo insuficiente para saque')
    })

    test('Deve retornar saldo negativo ao fazer saque do limite', () => {
        const result = conta.saque(1200)
        expect(result).toEqual('Valor saque: R$1200. Saldo Atual: R$-200. Limite: R$300')
    })

    test('Deve retornar limite desativado',() => {
        conta.limiteStatus(false)
        console.log(conta);
        expect(conta.limite).toBe(false)
     })

     test('Deve retornar erro ao tentar sacar valor acima do saldo e sem limite', () => {
        conta.limiteStatus(false)
         const result = conta.saque(3100)
         expect(result).toBe('Saldo insuficiente para saque')
     })
     test('Deve retornar erro ao tentar sacar valor acima do saldo e com limite desativado', () => {
        conta.limiteStatus(false)
         const result = conta.saque(3100)
         expect(result).toBe('Saldo insuficiente para saque')
     })
     
     test('Deve retornar aumentar limite com sucesso', () => {
        conta.aumentarLimite(1000)
         expect(conta.limite).toBe(1500)
     })

     test('Deve retornar reduzir limite com sucesso', () => {
        conta.reduzirLimite(300)
         expect(conta.limite).toBe(200)
     })
     test('Deve retornar erro ao aumentar limite com limite desativado', () => {
        conta.limiteStatus(false)
        const result = conta.aumentarLimite(300)
         expect(result).toBe('Não é possível aumentar limite, por favor ative o limite e tente novamente')
     })

     test('Deve retornar erro ao reeuzir limite com limite desativado', () => {
        conta.limiteStatus(false)
        const result = conta.reduzirLimite(300)
         expect(result).toBe('Não é possível reduzir limite, por favor ative o limite e tente novamente')
     })
})