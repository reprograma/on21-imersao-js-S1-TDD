const receberMoedas = require("../calculoTroco");

describe("Troco", () => {
  const moedasDisponiveis = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
  const MoedasRetornadasDoTroco = receberMoedas(1, moedasDisponiveis);
  const resultadoEsperado = [1];
  test("troco para 1 real retorna 1 moeda de 1 real", () => {
    expect(MoedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);
  });

  test("troco para 1,50 retornar um array [1, 0.5]", () => {
    expect(receberMoedas(1.5, moedasDisponiveis)).toEqual([1, 0.5]);
  });
});
