const { criaConta, deposita, consultaSaldo, consultaLimite, retirar, alteraLimite, desativaLimite } = require('./contaBancaria')

describe("Teste de conta bancária", () => {
    const conta = {
        'titular': 'João da Silva',
        'saldo': 5000,
        'limite': 10000
    }

    test("Criação de conta", () => {
        expect(criaConta(conta.titular, conta.saldo, conta.limite)).toEqual(conta);
    })

    test("Depósito de R$350 em conta com saldo de R$500 = R$850", () => {
        let valorDeposito = 3500;
        let saldoPosDeposito = conta.saldo + valorDeposito;

        expect(deposita(conta, valorDeposito)).toEqual(criaConta(conta.titular, saldoPosDeposito, conta.limite));
    })

    test("Consulta saldo de conta", () => {
        let mensagemRetorno = `O saldo atual de ${conta.titular} é de R$${conta.saldo}`;
        expect(consultaSaldo(conta)).toEqual(mensagemRetorno);
    })

    test("Consulta limite de conta com limite ativo", () => {
        let mensagemRetorno = `${conta.titular}, o limite disponível para a conta é de R$${conta.limite}`;
        expect(consultaLimite(conta)).toEqual(mensagemRetorno);
    })

    test("Saque de valor acima do limite ", () => {
        let valorSaque = 20000;
        let limite = conta.limite != null && conta.limite != undefined ? conta.limite : 0;
        let mensagemRetorno = `Não foi possível realizar o saque. Saldo disponível: R$${conta.saldo + limite} (Saldo + limite)`;
        expect(retirar(conta, valorSaque)).toEqual(mensagemRetorno);
    })

    test("Saque de valor R$100 ", () => {
        let valorSaque = 100;
        let saldoPosSaque = conta.saldo - valorSaque;
        expect(retirar(conta, valorSaque)).toEqual(criaConta(conta.titular, saldoPosSaque, conta.limite));
    })

    test("Altera limite para R$200", () => {
        let novoLimite = 200;
        expect(alteraLimite(conta, novoLimite)).toEqual(criaConta(conta.titular, conta.saldo, novoLimite))
    })

    test("Desativa limite da conta", () => {
        expect(desativaLimite(conta)).toEqual(criaConta(conta.titular, conta.saldo, 0));
    })
})