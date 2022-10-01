const ContaBancaria = require('./index')


describe("Conta Bancária", () => {
    let conta = new ContaBancaria("Maya", "100", "200");

    test("verificar o titular", () => {
        expect(conta.titular()).toEqual('Maya')

    });
    test("verificar o saldo", () => {
        expect(conta.saldo()).toEqual(100)

    });
    test("verificiar o limite", () => {
        expect(conta.limite()).toEqual(200)

    });
});
