const { consulta, saque, deposito } = require ("./contaBancaria")

const contaBancaria = {
    titular: "John Doe",
    saldoAtual: 100,
    limiteDaConta: 50,
}

const operacoesBancarias = {
    valorDoSaque: 50,
    valorDoDeposito: 200
}


describe("Consulta de saldo", () => {

    const saldo = consulta(contaBancaria.saldoAtual, contaBancaria.limiteDaConta)
    test("Consultando saldo em conta", () => {
        expect(saldo).toBe(150)
    })
    
})

describe("Saque da conta", () => {
    const saldoAposSaque =  saque(contaBancaria.saldoAtual, contaBancaria.limiteDaConta, operacoesBancarias.valorDoSaque)
    test("Sacando dinheiro da conta", () => {
        expect(saldoAposSaque).toBe(50)
    })
    
})

describe("Depósito em conta", () => {
    test("Depósitando dinheiro na conta", () => {
        expect(deposito(contaBancaria.saldoAtual, contaBancaria.limiteDaConta, operacoesBancarias.valorDoDeposito)).toBe(350)
    })
    
})