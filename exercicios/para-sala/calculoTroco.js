function receberMoedas(valorTroco, moedasDisponiveis) {
  let valorTrocoAtual = valorTroco;
  if (valorTrocoAtual === 0) {
    return [];
  }
  let arrayDeMoedas = [];
  moedasDisponiveis.map((moeda) => {
    if (valorTrocoAtual >= moeda) {
      valorTrocoAtual -= moeda;
      arrayDeMoedas.push(moeda);
    }
  });
  return arrayDeMoedas;
}

module.exports = receberMoedas;
