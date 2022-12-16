const ContaBancaria = require('./ContaBancaria');


describe("Testes da classe Conta Bancaria", () => {
    beforeEach(() => {
        return contaEvelin = new ContaBancaria("Evelin", 500.00, 300.00)
    })
    
    test("Deve retornar o saldo", () => {
        expect(contaEvelin.getSaldo()).toEqual(500.00)
    })

    test("Deve realizar um depósito", () => {
        expect(contaEvelin.setDeposito(100)).toEqual(600);
    })

    test("deve retornar mensagem de erro caso não tenha limite disponível para saque", () => {
        const saque = contaEvelin.saque(1000.00)

        expect(saque).toEqual("Você não tem saldo nem limite disponível.")
    })
})