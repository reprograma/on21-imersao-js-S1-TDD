function calculaTroco(valorTroco, moedasDisponiveis){
let valorTrocoAtual = valorTroco;

   if (valorTrocoAtual === 0) {
    return [];
   }

   let arrayDeMoedas = [];
   moedasDisponiveis.forEach((moeda) => {
          while (valorTrocoAtual >= moeda) {
           valorTrocoAtual -= moeda
           arrayDeMoedas.push(moeda)
        } 
    });

    return arrayDeMoedas
}
   


module.exports = calculaTroco;
