function consultarSaldo() {
  const conta = {
    nome_do_titular: "Maria",
    id: 1,
    saldo: 100,
    limite_disponivel: {
      ativo: true,
      limite: 400,
    },
  };
  return conta.saldo;
}

function saque(valorSolicitado) {
  const conta = {
    nome_do_titular: "Marta",
    id: 2,
    saldo: 100,
    limite_disponivel: {
      ativo: true,
      limite: 400,
    },
  };

  if (valorSolicitado <= conta.saldo) {
    return conta.saldo - valorSolicitado;
  } else if (
    valorSolicitado > conta.saldo &&
    conta.limite_disponivel.ativo === true &&
    valorSolicitado <= conta.limite_disponivel.limite
  ) {
    return conta.saldo - valorSolicitado;
  } else {
    return "Não é possível realizar o saque.";
  }
}

function depositar(valorDepositado) {
  const conta = {
    nome_do_titular: "João",
    id: 3,
    saldo: 50,
    limite_disponivel: {
      ativo: true,
      limite: 100,
    },
  };

  return (conta.saldo += valorDepositado);
}

function desativarLimite(booleano) {
  const conta = {
    nome_do_titular: "Nathaly",
    id: 4,
    saldo: 100,
    limite_disponivel: {
      ativo: true,
      limite: 0,
    },
  };

  return (conta.limite_disponivel.ativo = !booleano);
}

function diminuirLimite(valor) {
  const conta = {
    nome_do_titular: "Ana",
    id: 5,
    saldo: 100,
    limite_disponivel: {
      ativo: true,
      limite: 100,
    },
  };

  return (conta.limite_disponivel.limite -= valor);
}

function aumentarLimite(valor) {
  const conta = {
    nome_do_titular: "Jorge",
    id: 6,
    saldo: 100,
    limite_disponivel: {
      ativo: true,
      limite: 100,
    },
  };

  return (conta.limite_disponivel.limite += valor);
}

module.exports = {
  consultarSaldo,
  saque,
  depositar,
  aumentarLimite,
  diminuirLimite,
  desativarLimite,
};
