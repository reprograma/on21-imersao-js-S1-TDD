const { criarConta, depositar, consultarSaldo, consultarLimite, sacar, alterarLimite, desativarLimite } = require('./contaBancaria')

describe("Teste de conta bancária", () => {
    const contaMock = {
        'nomeTitular': 'João da Silva',
        'saldoConta': 500,
        'limite': 1000
    }

    test("Criação de conta", () => {
        expect(criarConta(contaMock.nomeTitular, contaMock.saldoConta, contaMock.limite)).toEqual(contaMock);
    })

    test("Depósito de R$350 em conta com saldo de R$500 = R$850", () => {
        let valorDeposito = 350;
        let saldoPosDeposito = contaMock.saldoConta + valorDeposito;

        expect(depositar(contaMock, valorDeposito)).toEqual(criarConta(contaMock.nomeTitular, saldoPosDeposito, contaMock.limite));
    })

    test("Consulta saldo de conta", () => {
        let mensagemRetorno = `O saldo atual de ${contaMock.nomeTitular} é de R$${contaMock.saldoConta}`;
        expect(consultarSaldo(contaMock)).toEqual(mensagemRetorno);
    })

    test("Consulta limite de conta com limite ativo", () => {
        let mensagemRetorno = `${contaMock.nomeTitular}, o limite disponível para a conta é de R$${contaMock.limite}`;
        expect(consultarLimite(contaMock)).toEqual(mensagemRetorno);
    })

    test("Saque de valor acima do limite ", () => {
        let valorSaque = 2000;
        let limite = contaMock.limite != null && contaMock.limite != undefined ? contaMock.limite : 0;
        let mensagemRetorno = `Não foi possível realizar o saque. Saldo disponível: R$${contaMock.saldoConta + limite} (Saldo + limite)`;
        expect(sacar(contaMock, valorSaque)).toEqual(mensagemRetorno);
    })

    test("Saque de valor R$100 ", () => {
        let valorSaque = 900;
        let saldoPosSaque = contaMock.saldoConta - valorSaque;
        expect(sacar(contaMock, valorSaque)).toEqual(criarConta(contaMock.nomeTitular, saldoPosSaque, contaMock.limite));
    })

    test("Alterar limite para R$200", () => {
        let novoLimite = 200;
        expect(alterarLimite(contaMock, novoLimite)).toEqual(criarConta(contaMock.nomeTitular, contaMock.saldoConta, novoLimite))
    })

    test("Desativar limite da conta", () => {
        expect(desativarLimite(contaMock)).toEqual(criarConta(contaMock.nomeTitular, contaMock.saldoConta, 0));
    })
})