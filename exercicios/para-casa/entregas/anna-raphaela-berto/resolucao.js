const contaBancaria = {
  nomeTitular: "Raphaela Berto",
  saldo: 200,
  limiteDaConta: 200,
};

function saldo() {
  return contaBancaria.saldo;
}

function deposito(valorDeposito) {
  novoSaldo = contaBancaria.saldo + valorDeposito;
  if (valorDeposito < 0) {
    novoSaldo = "Você não pode fazer esta operação";
  }
  return novoSaldo;
}

function saque(valorSaque) {
  let novoSaldo = contaBancaria.saldo - valorSaque;
  const limiteTotal = contaBancaria.saldo + contaBancaria.limiteDaConta;

  if (valorSaque < 0) {
    novoSaldo = "Você não pode fazer esta operação";
  } else if (valorSaque > limiteTotal) {
    novoSaldo = "Você não possui saldo nem limite desponível para saque";
  }
  return novoSaldo;
}

function ajusteLimite(reajuste) {
  let novoLimite = contaBancaria.limiteDaConta + reajuste;
  if (novoLimite < 0) {
    novoLimite = 0;
  } else if (reajuste === "desativar") {
    novoLimite = "O seu limite foi desativado";
  }
  return novoLimite;
}

module.exports = {
  saldo,
  deposito,
  saque,
  ajusteLimite,
};
