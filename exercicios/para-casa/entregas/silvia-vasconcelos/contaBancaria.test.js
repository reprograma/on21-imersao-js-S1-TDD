const { Conta } = require('./contaBancaria')

// Simular com sucesso esses dados 
//     titular: "banana",
//     saldo: 52,
//     limiteDaConta: 100

describe("Testando o exercicio de Conta Bancária", () => {
    const contaBancaria = new Conta()
    
    test("Tem nome?", () => {
        const titular = "banana" ;
        contaBancaria.titular = "banana";
        expect(contaBancaria.titular).toEqual(titular);
    })

    test("Tem saldo?", () => {
        const saldo = 52;
        contaBancaria.saldo = 52;
        expect(contaBancaria.saldo).toEqual(saldo);
    })

    test("Tem limite?", () => {
        const limite = 100;
        contaBancaria.limiteDaConta = 100;
        expect(contaBancaria.limiteDaConta).toEqual(limite);
    })

    test("Vamos ver se tem saldo", () => {
        const saldo = 52;
        contaBancaria.saldo = 52;
        expect(contaBancaria.saldo).toEqual(saldo);
    })

    test("Vamos Sacar", () => {
        const saque = 50;
        contaBancaria.saldo = 52;
        contaBancaria.limiteDaConta = 100;
        expect(contaBancaria.saque(2)).toEqual(saque);
    })

    test("Vamos depositar", () => {
        const deposito = 500;
        contaBancaria.saldo = 2;
        expect(contaBancaria.deposito(498)).toEqual(deposito);
    })
})