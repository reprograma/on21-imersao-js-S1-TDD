const cliente = require('./cliente')
const Conta = require('./resolucao')

describe('Faz as verificações necessárias em uma conta', () => {
  const novaConta = new Conta(cliente)
  let valorSaque = 0

  test('Verifica dados da conta', () => {
    expect(cliente.nome).toBe('Joice Flores')
    expect(cliente.saldo).toEqual(200)
    expect(cliente.limite).toEqual(300)
  })
  
  test('Verifica se valor para saque esta disponível', () => {
    valorSaque = 135
    let saqueAutorizado = novaConta.verificaSaldo(valorSaque)
    expect(true).toBe(saqueAutorizado.saqueAutorizadoSaldo)

    valorSaque = 450
    saqueAutorizado = novaConta.verificaSaldo(valorSaque)
    expect(true).toBe(saqueAutorizado.saqueAutorizadoLimite)

    valorSaque = 789
    saqueAutorizado = novaConta.verificaSaldo(valorSaque)
    expect(false).toBe(saqueAutorizado.saqueAutorizadoLimite)
  })

  test('Retorna saldo após o saque', () => {
    valorSaque = 135
    let valorSaldoAtualizado = novaConta.sacar(valorSaque)
    expect(valorSaldoAtualizado.saldoAtualizado).toEqual(65)

    valorSaque = 450
    valorSaldoAtualizado = novaConta.sacar(valorSaque)
    expect(valorSaldoAtualizado.limiteAtualizado).toEqual(50)
  })

  test('Ajusta e desativa limite', () => {
    let novoLimite = 135
    novaConta.ajustarLimite(novoLimite)
    expect(novaConta.limite).toEqual(135)
    expect(novaConta.statusLimite).toEqual(true)

    novoLimite = 850
    novaConta.ajustarLimite(novoLimite)
    expect(novaConta.limite).toEqual(850)
    expect(novaConta.statusLimite).toEqual(true)

    novoLimite = 0
    novaConta.ajustarLimite(novoLimite)
    expect(novaConta.statusLimite).toEqual(false)

    novoLimite = -100
    novaConta.ajustarLimite(novoLimite)
    expect(novaConta.statusLimite).toEqual(false)
  })
})