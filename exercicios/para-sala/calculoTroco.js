function receberMoedas(valorTroco, moedasDisponiveis) {
  let valorTrocoAtual = valorTroco
  if(valorTrocoAtual === 0) {
    return []
  }


let arrayDeMoedas = []
moedasDisponiveis.forEach((moeda) => {
  if (valorTrocoAtual >= moeda) {
   valorTrocoAtual -= moeda
   arrayDeMoedas.push(moeda)
  }
})
return arrayDeMoedas
}


module.exports = receberMoedas;