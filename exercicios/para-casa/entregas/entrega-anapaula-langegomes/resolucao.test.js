const {SaldoAtual, ValorLimite, SaqueDisponivel} = require ('./index.js')

describe("Validação das operações da conta bancária", () => {
    
    test("Validar saldo disponível para saque", () => {
        const saldo = SaldoAtual (50);
        expect(saldo).toBe(true);
    });

    test("Validar uso do limite", () => {
        const limite = ValorLimite()
        expect(limite).toBe(true);
    });

    test("Validar operação de saque", () => {
        const saque = SaqueDisponivel(600)
        expect(saque).toBe("Sem valor disponivel para saque")
    });

});

