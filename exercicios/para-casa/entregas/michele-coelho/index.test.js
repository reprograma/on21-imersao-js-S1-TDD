const contaBancaria = require('../michele-coelho/index')
describe("Conta Bancária", () => {
    test("testar nome do titular", () => {
        expect(contaBancaria.inforCliente("Misha")).toBe("Misha");
    });
    test("Teste consulta limite", () => {
        expect(contaBancaria.limite()).toBe(200);
    });
    test("Teste reajuste do limite", () => {
        expect(contaBancaria.reajustarLimite(1, 100)).toBe(300);
    });

    test("Teste para ativar ou desativar o limite", () => {
        expect(contaBancaria.ativarDesativarLimite(false)).toBe(false);
    });
    test("Teste consulta saldo", () => {
        expect(contaBancaria.saldo()).toBe(500);
    });
    test("Teste de saque", () => {
        expect(contaBancaria.saque(100)).toBe(100);
    });
    test("Teste de depósito", () => {
        expect(contaBancaria.deposito(350)).toBe(350);
    });
})