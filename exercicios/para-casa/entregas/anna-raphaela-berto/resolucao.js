const contaBancaria = {
  nomeTitular: "Raphaela Berto",
  saldo: 200,
  limiteDaConta: 200,
};

function saldo() {
  return contaBancaria.saldo;
}

function deposito(num) {
  novoSaldo = contaBancaria.saldo + num;
  return novoSaldo;
}

function saque(valorSaque) {
  let novoSaldo = contaBancaria.saldo - valorSaque;
  const limiteTotal = contaBancaria.saldo + contaBancaria.limiteDaConta;

  if (valorSaque > limiteTotal) {
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
