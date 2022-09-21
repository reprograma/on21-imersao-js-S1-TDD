const { ContaBancaria } = require ('./ContaBancaria.js')

describe("Conta Bancaria", () => {
    const conta = new ContaBancaria('Artemiza', 3000, 6000, 250);

    test("retornar nome do titular", () => {
           expect(conta.nomeDoTitular()).toEqual('Artemiza')

    });
    test("saldo", () => {
        expect(conta.saldo()).toEqual(3000)

    });
    test("Limite da conta", () => {
       expect(conta.limiteDisponivél()).toEqual(6000)

    });
   test("Possível deposito", () => {
    expect(conta.PossívelDeposito()).toEqual(250)

});

});

