/* Exercício - Conta Bancária
Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, 
o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. 
No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente
para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente
ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.*/

const contaBancaria = {
    'nomeTitular': '',
    'saldoConta': 0,
    'limite': 0
}

function getSaldoTotalConta(conta) {
    let limite = conta.limite != null && conta.limite != undefined ? conta.limite : 0;
    return conta.saldoConta + limite;
}

function criarConta(nomeTitular, saldoInicial, limite) {
    contaBancaria.nomeTitular = nomeTitular;
    contaBancaria.saldoConta = saldoInicial;
    contaBancaria.limite = limite;
    return contaBancaria;
}

function depositar(conta, valorDeposito) {
    if (conta.saldoConta == null || conta.saldoConta == undefined) {
        conta.saldoConta = 0;
    }
    conta.saldoConta += valorDeposito;
    return conta;
}

function consultarSaldo(conta) {
    return `O saldo atual de ${conta.nomeTitular} é de R$${conta.saldoConta}`;
}

function consultarLimite(conta) {
    return `${conta.nomeTitular}, o limite disponível para a conta é de R$${conta.limite}`;
}

function sacar(conta, valorSaque) {
    if (getSaldoTotalConta(conta) >= valorSaque) {
        conta.saldoConta -= valorSaque;
        return conta;
    }
    return `Não foi possível realizar o saque. Saldo disponível: R$${getSaldoTotalConta(conta)} (Saldo + limite)`;
}

function alterarLimite(conta, novoLimite) {
    if (novoLimite == null || novoLimite == undefined) {
        return "Por favor, informe o novo limite (R$) da conta";
    }
    conta.limite = novoLimite;
    return conta;
}

function desativarLimite(conta) {
    return alterarLimite(conta, 0);
}

module.exports = { criarConta, depositar, consultarSaldo, consultarLimite, sacar, alterarLimite, desativarLimite };