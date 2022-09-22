const {checkSaldo, checkLimite, checkValorLimite, checkSaqueDisponivel} = require ('../../index')

describe("Verificação da conta bancária", () => {
    test("Deve ter saldo disponível para saque", () => {
        const saldo = checkSaldo(200);

        expect(saldo).toBe(true);

        // const saldo = checkSaldo(0);

        // expect(saldo).toBe(false);
    });


    test("Limite ativado ou desativado", () => {
        const limiteAtivo = checkLimite();

        expect(limiteAtivo).toBe(true);

    });

    test("Deve ter limite disponível para saque, em caso de saldo indisponível", () => {
        const limite = checkValorLimite()

        expect(limite).toBe(true);

    });

    test("Deve verificar se pode fazer saque", () => {

        const saque = checkSaqueDisponivel(500)

        expect(saque).toBe(true)
    });
  
});