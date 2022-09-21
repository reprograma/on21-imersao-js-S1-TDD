const ContaBancaria = require('../gabriela-tavares/ContaBancaria')


describe("ContaBancaria --> Consulta Saldo", () => {
  let conta = new ContaBancaria("Gabriela Tavares", 2100, 500);
  it("Deve retornar a consulta do valor disponível na conta (2100)", () => {
    const consultaSaldo = conta.consultaSaldo(conta.saldoConta);
    const valorNaConta = conta.saldoConta;
    expect(consultaSaldo).toEqual(valorNaConta);
  });
});

describe("ContaBancaria --> Saque", () => {
  let conta = new ContaBancaria("Gabriela Tavares", 2100, 500);
  it("Deve realizar o saque, e retornar o valor disponível após o saque (1850)", () => {
    const valorSaque = 250;
    const realizaSaque = conta.saque(valorSaque);
    const saldoConta = 1850;
    expect(realizaSaque).toEqual(saldoConta);
  });

  it("Deve realizar o saque utilizando o limite da conta ", () => {
    let conta = new ContaBancaria("Gabriela Tavares", 0, 500);
    const valorSaque = 450;
    const realizaSaque = conta.saque(valorSaque);
    const saldoConta = -50;
    expect(realizaSaque).toEqual(saldoConta);
  });

  it("Deve retonar que o saque não é possível, pois não há saldo suficiente", () => {
    const valorSaque = 2700;
    const realizaSaque = conta.saque(valorSaque);
    expect(realizaSaque).toBe(
      "Não é possível fazer o saque, pois não há saldo e limite suficiente"
    );
  });
});

describe("ContaBancaria --> Depósito", () => {
  let conta = new ContaBancaria("Gabriela Tavares", 2100, 500);

  it("Deve realizar o depósito e retornar o valor após o saque (2450)", () => {
    const deposito = 350;
    const realizadeposito = conta.deposito(deposito);
    expect(realizadeposito).toEqual(2450);
  });
});

describe("ContaBancaria --> Depósito", () => {
  let conta = new ContaBancaria("Gabriela Tavares", 2100, 500);

  it("Deve aumentar o limite da conta para R$ 650,00 ", () => {
    const novoLimite = 650;
    const aumentaLimite = conta.aumentaLimite(novoLimite);
    expect(aumentaLimite).toEqual(novoLimite);
  });

  it("Deve diminuir o limite da conta para R$ 450,00 ", () => {
    const novoLimite = 200;
    const diminuiLimite = conta.diminuiLimite(novoLimite);
    expect(diminuiLimite).toEqual(450);
  });

  it("Deve desativar o limite da conta  ", () => {
    const desativaLimite = conta.desativaLimiteConta(true);
    expect(desativaLimite).toBeTruthy();
    expect(desativaLimite).toBe("Limite da Conta desativado!");
  });
});


