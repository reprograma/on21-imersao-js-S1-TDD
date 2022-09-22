const {SaldoAtual, ValorLimite, SaqueDisponivel} = require ('./index.js')

describe("Verificação de situações possíveis na conta bancária", () => {
    test("Com saldo disponível para saque", () => {
        const saldo = SaldoAtual (100);
        expect(saldo).toBe(true);
    });

    test("Verifica se pode usar o limite", () => {
        const limite = ValorLimite()
        expect(limite).toBe(true);
    });

    test("Verifica se pode sacar", () => {
        const saque = SaqueDisponivel(1200)
        expect(saque).toBe("Sem valor disponivel para saque")
    });

});