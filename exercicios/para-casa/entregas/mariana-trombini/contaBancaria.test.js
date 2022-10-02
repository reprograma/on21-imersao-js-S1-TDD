const ContaBancaria = require("./ContaBancaria")

describe("Conta Bancária", () => {
  beforeEach(() => {
    return contaBancaria = new ContaBancaria("Mari", 2000.00, 1500.00)
  })
  
  test('Deve retornar a titular da conta.', () => {
    expect(contaBancaria.getTitular()).toEqual('Mari')
    expect(contaBancaria.getTitular()).toContain("Mari")
    expect(contaBancaria.getTitular()).toBeTruthy()
  })
  
  test("Deve retornar o saldo inicial da conta bancária.", () => {
    expect(contaBancaria.getSaldo()).toEqual(2000.00)
    expect(contaBancaria.getSaldo()).not.toBeNull()
  })
  
  test("Deve realizar saque com o saldo da conta bancária.", () => {
    const saque = contaBancaria.sacar(1150.00)
    expect(saque).toEqual("Saque realizado com sucesso. Saldo atual: R$850.")
  })
  
  test("Deve realizar saque com limite da conta bancária e negativar saldo.", () => {
    const saque = contaBancaria.sacar(2150.00)
    expect(saque).toEqual("Saque realizado com sucesso utilizando o limite da conta. Saldo atual negativo: R$-150.")
  })
  
  test("Deve retornar erro e não efetuar saque devido a saldo e limite insuficientes.", () => {
    const saque = contaBancaria.sacar(6500.00)
    expect(saque).toEqual("Não foi possível realizar o saque. Saldo e limite insuficientes.")
  })

  test("Não deve realizar o saque se nenhum valor for fornecido.", () => {
    expect(contaBancaria.sacar(null)).toEqual("Não foi possível efetuar o saque. Saldo atual: R$2000")
  })

  test("Deve realizar o depósito de um valor fornecido.", () => {
    expect(contaBancaria.depositar(500.00)).toEqual("Depósito realizado com sucesso. Saldo atual: R$2500.")
    expect(contaBancaria.saldo).toBeGreaterThan(2000.00)
  })
  
  test("Não deve realizar o depósito se nenhum valor for fornecido.", () => {
    expect(contaBancaria.depositar(null)).toEqual("Não foi possível efetuar o depósito. Saldo atual: R$2000")
  })

  test("Deve aumentar o limite da conta bancária.", () => {
    const aumentarLimite = contaBancaria.aumentarLimite(100.00)
    expect(aumentarLimite).toEqual(1600.00)
  })

  test("Deve reduzir o limite da conta bancária.", () => {
    const diminuirLimite = contaBancaria.reduzirLimite(100.00)  
    expect(diminuirLimite).toEqual(1400.00)
  })

  test("Deve desativar o limite da conta bancária.", () => {
    expect(contaBancaria.ativarLimite(false)).toEqual(false)
    expect(contaBancaria.getLimite()).toBeFalsy()
  })

  test("Deve ativar o limite da conta bancária.", () => {
    expect(contaBancaria.ativarLimite(true)).toEqual(1500.00)
    expect(contaBancaria.getLimite()).toEqual(1500.00)
  })
})