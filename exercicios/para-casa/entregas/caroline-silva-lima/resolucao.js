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

const database = require("./dados");


function consultaSaldo(id) {
    let idConta = database.find((x) => x.id == id);
    console.log(`Seu saldo ${database.titular} é ${database.saldo}`);
    return true
}; 

function saque (numero){
    
    let saldoEmconta = contaBancaria.saldo;
    let limiteDaConta = contaBancaria.limite;
    let saldoElimite = saldoEmconta + limiteDaConta;

    if (numero<=saldoEmconta){
        novoSaldo = saldoEmconta - numero; 
        return `Seu saldo agora é de ${novoSaldo}`
    }
    else if (numero>saldoEmconta){
        if (numero <= saldoElimite){
            novoSaldo = saldoEmconta - numero;
            return `Seu saldo agora é ${novoSaldo}`
        }
    }
    else if (numero>saldoElimite){}
                return "Saldo insuficiente. Saque não realizado"
}; 
exports = {consultaSaldo , saque}; 
