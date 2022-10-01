const saldoAtual = (valor) => {
    if(valor > 0) {
        return true;
    }else {
        return false;
    }
  };

  const valorLimite = () =>  {
    const dadosCliente = {
        "nome":"Ana Paula",
        "saldo": 500,
        "valorLimite": 50
    };
  
    if(dadosCliente.valorLimite > 0 ) {
        console.log(`Você tem valor disponível ${dadosCliente.valorLimite}`);
         return true   
    } else {
        console.log("Você não tem valor disponível" );
        return false
    }
  };
  
  const saqueDisponivel = (valorSacado) =>  {
    const dadosDoCliente = {
        "nome":"Ana Paula",
        "saldo": 500,
        "valorLimite": 50
    };
  
    const valorDisponivel = dadosDoCliente.saldo + dadosDoCliente.valorLimite
  
    if(valorSacado < dadosDoCliente.saldo ) {
        return (`Saque aprovado no valor de  ${dadosDoCliente.saldo}`)
    } else if (valorSacado > dadosCliente.saldo &&  valorSacado < valorDisponivel ){
          return ("Saque aprovado com o uso do limite");
    } else if (valorSacado > dadosDoCliente.saldo && valorSacado > valorDisponivel)
          return ("Não existe valor disponivel para saque");
  }
  
  module.exports = {saldoAtual, valorLimite, saqueDisponivel}

