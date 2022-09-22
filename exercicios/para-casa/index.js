//     Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. 
//     É possível fazer operações de consulta de saldo, saque e depósito. 
//     No caso de saque é necessário verificar se existe saldo suficiente para retirada, 
// caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), 
// o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. 
//     Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. 
//     Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const SaldoAtual = (valor) => {
  if(valor > 0) {
      return true;
  }else {
      return false;
  }
};
const ValorLimite = () =>  {
  const dadosCliente = {
      "nome":"Fernando",
      "saldo": 1000,
      "valorLimite": 100
  };

  if(dadosCliente.valorLimite > 0 ) {
      console.log(`Você tem disponível ${dadosCliente.valorLimite}`);
       return true   
  } else {
      console.log("Você não tem  disponível" );
      return false
  }
}

const SaqueDisponivel = (valorSacado) =>  {
  const dadosCliente = {
      "nome":"Fernando",
      "saldo": 1000,
      "valorLimite": 100
  };

  const valorDisponivel = dadosCliente.saldo + dadosCliente.valorLimite

  if(valorSacado < dadosCliente.saldo ) {
      return (`Saque aprovado no valor de  ${dadosCliente.saldo}`)
  } else if (valorSacado > dadosCliente.saldo &&  valorSacado < valorDisponivel ){
        return ("Saque aprovado com o limite");
  } else if (valorSacado > dadosCliente.saldo && valorSacado > valorDisponivel)
        return ("Sem valor disponivel para saque");
}

module.exports = {SaldoAtual, ValorLimite, SaqueDisponivel}