class Conta {
  constructor(dadosCliente) {
    this.nome = dadosCliente.nome
    this.saldo = dadosCliente.saldo
    this.limite = dadosCliente.limite
    this.statusLimite = dadosCliente.statusLimite
  }

  verificaSaldo(valor) {
    let saqueAutorizadoSaldo = false
    let saqueAutorizadoLimite = false
    const saldoMaisLimite = this.saldo + this.limite
    const valorSaque = valor
    
    if (valorSaque <= this.saldo) {
      saqueAutorizadoSaldo = true
    } else if (valorSaque <= saldoMaisLimite) {
      saqueAutorizadoLimite = true
    } else {
      saqueAutorizadoSaldo = false
      saqueAutorizadoLimite = false
    }
    return {
      saqueAutorizadoSaldo,
      saqueAutorizadoLimite,
    }
  }

  sacar(valorSaque) {
    let saldoAtualizado
    let limiteAtualizado
    const teste = this.verificaSaldo(valorSaque)
    if(teste.saqueAutorizadoSaldo) {
      saldoAtualizado = this.saldo - valorSaque
    } else if (teste.saqueAutorizadoLimite) {
      saldoAtualizado = this.saldo - valorSaque
      limiteAtualizado = this.limite - (saldoAtualizado * -1)
      if (saldoAtualizado < this.saldo) this.saldo = 0
      this.limite = limiteAtualizado
    }
    
    return {
      saldoAtualizado,
      limiteAtualizado
    }
  }
  ajustarLimite(novoLimite) {
    this.limite = novoLimite
    if (novoLimite <= 0) this.statusLimite = false
  } 
  
}

module.exports = Conta