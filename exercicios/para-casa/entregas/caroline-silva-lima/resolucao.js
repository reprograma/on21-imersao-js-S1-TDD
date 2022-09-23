/* 
Considere um objeto que represente uma conta bancária, 
a conta possui o nome do titular, o saldo e o limite da conta. 
É possível fazer operações de consulta de saldo, saque e depósito. 
No caso de saque é necessário verificar se existe saldo suficiente para retirada, 
caso o cliente não tenha saldo suficiente para a operação, 
mas possua limite disponível (e suficiente), o saque poderá ocorrer, 
nesses casos o saldo do cliente ficará negativo após o saque. 
Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. 
Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.*/  

const contaBancaria = require("./database");

function consultaSaldo(id){
    let localizarId = contaBancaria.find((x) => x.id == id);
    const saldoEmconta = localizarId.saldo;
    return saldoEmconta
};

function consultaLimite(id){
    let localizarId = contaBancaria.find((x) => x.id == id);
    const limite = localizarId.limite; 
    return limite
};

function saque(id, numero){
    const recuperaSaldo = consultaSaldo(id);
    const limite = consultaLimite(id); 
    const saldoElimite = recuperaSaldo + limite;

    if (numero<=recuperaSaldo){
        novoSaldo = recuperaSaldo - numero; 
        contaBancaria.saldo=novoSaldo; 
        return `Saque no valor de ${numero} efetuado. Seu nono saldo é de ${novoSaldo}`
    }
    else if (numero>recuperaSaldo){
        if (numero <= saldoElimite){
            novoSaldo = recuperaSaldo - numero;
            contaBancaria.saldo=novoSaldo; 
            return `Saque no valor de ${numero} efetuado. Seu nono saldo é de ${novoSaldo}`
        }
    }
    else if (numero>saldoElimite){}
                return "Saldo insuficiente. Saque não realizado"
}; 

function resjustaLimite (id, numero){
    
    limiteAtual = consultaLimite(id);

    limitePreAprovado = ((limiteAtual/100)*20) + limiteAtual;

    valorLimiteDesejado = numero;

    if (valorLimiteDesejado<=limitePreAprovado){

        novoLimite = valorLimiteDesejado; 

        contaBancaria.limite = novoLimite;

        return `Seu novo limite é de  ${novoLimite}`
    }

    else if (valorLimiteDesejado>limitePreAprovado){
        return "Limite desejado é superior ao pré aprovado. Consulte seu gerente"
    }
}; 

function deposito(id, valor){
    saldoAtual = consultaSaldo(id);
    novoSaldo = saldoAtual + valor; 
    contaBancaria.saldo = novoSaldo;
    return `Seu novo saldo é ${novoSaldo}`
}

module.exports = {consultaSaldo , saque, resjustaLimite, deposito}; 
