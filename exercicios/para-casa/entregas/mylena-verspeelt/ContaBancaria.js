
function consultarSaldo() {
  const conta = {
    nome_do_titular: "Maria",
    id: 1,
    saldo: 100,
    limite_disponivel:{
      ativo: true,
      limite: 400
    }
  };
  console.log(conta.saldo)
  return conta.saldo;
}


function saque(valorSolicitado) {


}

function depositar(valorDepositado) {

  const conta = {
    nome_do_titular: "João",
    id: 3,
    saldo: 50,
    limite_disponivel:{
      ativo: true,
      limite: 100
    }
  };

  return conta.saldo += valorDepositado

}

function desativarLimite(booleano){
  const conta = {
    nome_do_titular: "Nathaly",
    id: 4,
    saldo: 100,
    limite_disponivel:{
      ativo: true,
      limite: 0
    }
  };

  return conta.limite_disponivel.ativo = !booleano

}


function diminuirLimite(valor){
  const conta = {
    nome_do_titular: "Jorge",
    id: 5,
    saldo: 100,
    limite_disponivel:{
      ativo: true,
      limite: 100
    }
  };

  return conta.limite_disponivel.limite -= valor
}

function aumentarLimite(valor){
  const conta = {
    nome_do_titular: "Jorge",
    id: 5,
    saldo: 100,
    limite_disponivel:{
      ativo: true,
      limite: 100
    }
  };

  return conta.limite_disponivel.limite += valor
}



module.exports = {
  consultarSaldo,
  saque,
  depositar,
  desativarLimite,
  aumentarLimite,
  diminuirLimite,
};
