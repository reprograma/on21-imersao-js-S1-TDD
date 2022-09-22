
const checkSaldo = (valor) => {
    if(valor > 0) {
        return true;
    }else {
        return false;
    }
};

const checkLimite = () => {
    const dadosDoCliente = {
        "nome":"Joana",
        "saldo": 2000,
        "limite":true,
        "valorLimite": 800
    };
E
    if(dadosDoCliente.limite === true) {
        return true;
    } else {
        return false;
    }
};

const checkValorLimite = () =>  {
    const dadosDoCliente = {
        "nome":"Joana",
        "saldo": 3000,
        "limite":true,
        "valorLimite": 800
    };

    if(dadosDoCliente.valorLimite > 0 ) {
        console.log(`Você tem disponível ${dadosDoCliente.valorLimite}`);
         return true   
    } else {
        console.log("Você não tem  disponível" );
        return false
    }

    
}

const checkSaqueDisponivel = (valorSacado) =>  {
    const dadosDoCliente = {
        "nome":"Joana",
        "saldo": 3000,
        "limite":true,
        "valorLimite": 800
    };

    const valorDisponivel = dadosDoCliente.saldo + dadosDoCliente.valorLimite

    if(valorSacado < dadosDoCliente.saldo ) {
        console.log(`Saque aprovado no valor de  ${dadosDoCliente.saldo}`);
        return true   
    } else if (valorSacado > dadosDoCliente.saldo &&  valorSacado < valorDisponivel ){
        console.log("Saque aprovado com limite do cheque especial")
        return true
    } else if (valorSacado > dadosDoCliente.saldo && valorSacado > valorDisponivel)
    console.log("Você não tem valor disponível para saque")
        return true

}

module.exports = {checkSaldo, checkLimite, checkValorLimite, checkSaqueDisponivel}