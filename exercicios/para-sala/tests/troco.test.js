// 9) Escreva um teste (e depois a função) para uma função calcule como um troco (centavos)
// será dado em moedas. A função deve receber o valor do troco, e um array com as moedas
// disponíveis.

const receberMoedas = require("../calculoTroco");

describe("Troco", () => {
  const moedasDisponiveis = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

  test("troco para R$0 retornar array vazio", () => {
    const moedasRetornadasDoTroco = receberMoedas(0, moedasDisponiveis);
    const resultadoEsperado = [];

    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);
  });

  test("troco para R$1 retornar um array [1]", () => {
    const moedasRetornadasDoTroco = receberMoedas(1, moedasDisponiveis);
    const resultadoEsperado = [1];

    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);
  });

  test("troco para R$1,50 retornar um array [1, 0.50]", () => {
    const moedasRetornadasDoTroco = receberMoedas(1.5, moedasDisponiveis);
    const resultadoEsperado = [1, 0.5];

    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);
  });

  test("troco para R$2 retornar um array [1, 1]", () => {
    const moedasRetornadasDoTroco = receberMoedas(2, moedasDisponiveis);
    const resultadoEsperado = [1, 1];

    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);
  });
  test("troco para R$2,10 retornar um array [1, 1, 0.1]", () => {
    const moedasRetornadasDoTroco = receberMoedas(2.1, moedasDisponiveis);
    const resultadoEsperado = [1, 1, 0.1];

    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);
  });
  test("troco para R$2,75 retornar um array [1, 1, 0.5, 0.25]", () => {
    const moedasRetornadasDoTroco = receberMoedas(2.75, moedasDisponiveis);
    const resultadoEsperado = [1, 1, 0.5, 0.25];

    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);
  });
});
