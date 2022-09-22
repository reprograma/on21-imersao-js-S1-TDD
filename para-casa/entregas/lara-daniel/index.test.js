const ContaBancaria  = require("./index")

describe("Testar funções de uma conta bancária", () => {
    const cliente = new ContaBancaria("João", 7000, 10000, true);

      test("Deve retornar o saldo de 2000", () => {
        expect(cliente.consultaSaldo()).toEqual(7000);
      });

      test("Recebendo um valor para saque menor do que o saldo disponível, deve realizar o saque e retornar o novo saldo", () => {
        expect(cliente.realizaSaque(2000)).toBe("Saque de 2000 realizado. Seu saldo atual é de 5000")
      })

      test("Recebendo um valor para saque maior do que o saldo disponível, deve verificar se este pode ser completado com o limite disponível. Se sim, deve realizar o saque e negativar o saldo da conta", () => {
        expect(cliente.realizaSaque(8000)).toBe("Saque de 8000 realizado. Seu saldo atual é de -1000")
      })

      test("Recebendo um valor para saque menor do que o saldo diponível e limite da conta, deve negar a realização do saque", () => {
        expect(cliente.realizaSaque(8000)).toBe("Saque de 8000 realizado. Seu saldo atual é de -1000")
      })

      test("Realiza depósito", () => {
        expect(cliente.realizaDeposito(2000)).toBe("Depósito de 2000 realizado. Seu saldo atual é de 9000")
      })

      test("Aumentar limite da conta", () => {
        expect(cliente.ajustaLimite("+",100)).toEqual(10100)
      })

      test("Reduzir limite da conta", () => {
        expect(cliente.ajustaLimite("-",100)).toEqual(9900)
      })

      test("Desativar limite", () => {
        expect(cliente.handleLimite(false)).toEqual(false)
      })
})