function receberMoedas(valorTroco, moedasDisponiveis) {
    let valorTrocoAtual = valorTroco
    
    let arrayDeMoedas = []
  
    moedasDisponiveis.forEach((moeda) => {
      while (valorTrocoAtual >= moeda) {
        valorTrocoAtual -= moeda
        arrayDeMoedas.push(moeda)
      }
    })
    return arrayDeMoedas
  }
  
  module.exports = receberMoedas
 