
function consulta (saldoAtual, limite) {
    return saldoAtual + limite
};

function saque (saldoAtual, limite, valorDoSaque){
    if (valorDoSaque <= saldoAtual) {
        return saldoAtual - valorDoSaque
    } else if (valorDoSaque <= saldoAtual + limite) {
        return saldoAtual - valorDoSaque
    } else if (valorDoSaque > saldoAtual + limite) {
        return "Saldo insuficiente"
    }
    
}

function deposito (saldoAtual, limite, valorDepositado){
    return saldoAtual + limite + valorDepositado
}

module.exports = {
    consulta,
    saque,
    deposito
}