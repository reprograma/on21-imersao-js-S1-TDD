function receberMoedas(valorTroco, moedasDisponiveis) {
    let valorTrocoAtual = valorTroco
    
    let arrayDeMoedas = []
  
    // moedasDisponiveis.forEach((moeda) => {
    //   console.log('valorTrocoAtual' , valorTrocoAtual)
       
    //   while (valorTrocoAtual >= moeda) {
    //     valorTrocoAtual = parseFloat((valorTrocoAtual - moeda).toFixed(2))

    //     arrayDeMoedas.push(moeda)
    //   }
    // })
  
    for (let i = 0; valorTrocoAtual > 0; i)
     {
      const divisao = parseFloat((valorTrocoAtual / moedasDisponiveis[i]).toFixed(2))
      if (divisao >= 1) {
        arrayDeMoedas.push(moedasDisponiveis[i])
        valorTrocoAtual = parseFloat((valorTrocoAtual - moedasDisponiveis[i]).toFixed(2))
      } else {
        i++
      }
     }  

    return arrayDeMoedas
  }
  
  module.exports = receberMoedas
 