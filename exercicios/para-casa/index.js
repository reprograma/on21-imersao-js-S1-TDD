const SaldoAtual = (valor) => {
    if(valor > 0) {
        return true;
    }else {
        return false;
    }
  };

  const ValorLimite = () =>  {
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
  
  const SaqueDisponivel = (valorSacado) =>  {
    const dadosCliente = {
        "nome":"Ana Paula",
        "saldo": 500,
        "valorLimite": 50
    };
  
    const valorDisponivel = dadosCliente.saldo + dadosCliente.valorLimite
  
    if(valorSacado < dadosCliente.saldo ) {
        return (`Saque aprovado no valor de  ${dadosCliente.saldo}`)
    } else if (valorSacado > dadosCliente.saldo &&  valorSacado < valorDisponivel ){
          return ("Saque aprovado com o uso do limite");
    } else if (valorSacado > dadosCliente.saldo && valorSacado > valorDisponivel)
          return ("Não existe valor disponivel para saque");
  }
  
  module.exports = {SaldoAtual, ValorLimite, SaqueDisponivel}

