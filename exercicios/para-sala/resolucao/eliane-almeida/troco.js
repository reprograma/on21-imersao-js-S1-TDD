function receberTroco(valorTroco, moedasDisponiveis) {
    let trocoAtual = valorTroco
    let arrayMoedas = []

    moedasDisponiveis.forEach((moeda) => {
        while (trocoAtual >= moeda) {
          trocoAtual -= moeda;
          arrayMoedas.push(moeda);
        }
      });

      return arrayMoedas;
}

module.exports = receberTroco