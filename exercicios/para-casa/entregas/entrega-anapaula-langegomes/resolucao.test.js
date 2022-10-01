const {saldoAtual, valorLimite, saqueDisponivel} = require ('./index.js')

describe("Validação das operações da conta bancária", () => {
    
    test("Validar saldo disponível para saque", () => {
        const saldo = saldoAtual (50);
        expect(saldo).toBe(true);
    });

    test("Validar uso do limite", () => {
        const limite = valorLimite()
        expect(limite).toBe(true);
    });

    test("Validar operação de saque", () => {
        const saque = saqueDisponivel(600)
        expect(saque).toBe("Sem valor disponivel para saque")
    });

});

