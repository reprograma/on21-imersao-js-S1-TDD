const receberMoedas = require ("../calculoTroco")


describe("Troco", () => {
    const moedasDisponiveis = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
   
    test("troco para R$0 retornar array vazio", () => {
      const moedasRetornadasDoTroco = receberMoedas(0, moedasDisponiveis);
      const resultadoEsperado = [];
     
      expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);

 });
  test("troco para R$1 retornar um array vazio[1]", () => {
    const moedasRetornadasDoTroco = receberMoedas(1, moedasDisponiveis);
    const resultadoEsperado = [1];
   
    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);

  });

  test("troco para R$1,50 retornar um array vazio[1, 0.50]", () => {
    const moedasRetornadasDoTroco = receberMoedas(1.5, moedasDisponiveis);
    const resultadoEsperado = [1, 0.50];
   
    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);

});

test("troco para R$2 retornar um array vazio[1, 1]", () => {
  const moedasRetornadasDoTroco = receberMoedas(2, moedasDisponiveis);
  const resultadoEsperado = [1, 1];
 
  expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado);

});

});
