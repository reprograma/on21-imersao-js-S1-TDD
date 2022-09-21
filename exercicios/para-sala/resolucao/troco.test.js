const receberMoedas = require('../resolucao/calculoTroco')
  
describe('Troco', () => {
  const moedasDisponiveis = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
  test('troco para 1 real retorna 1 moeda de 1 real', () => {
    const moedasRetornadasDoTroco = receberMoedas(1, moedasDisponiveis)
    const resultadoEsperado = [1]
    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado)
  })

  test('troco para 1,50 retornar um array [1, 0.5]', () => {
    const moedasRetornadasDoTroco = receberMoedas(1.50, moedasDisponiveis)
    const resultadoEsperado = [1, 0.5]
    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado)
  })

  test('troco para 2,00 retornar um array [1, 1]', () => {
    const moedasRetornadasDoTroco = receberMoedas(2, moedasDisponiveis)
    const resultadoEsperado =[1, 1]
    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado)
  })

  test('troco para 2,10 retornar um array [1, 1, 0.10]', () => {
    const moedasRetornadasDoTroco = receberMoedas(2.10, moedasDisponiveis)
    const resultadoEsperado =[1, 1, 0.10]
    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado)
  })

  test('troco para 2,65 retornar um array [1, 1, 0.50, 0.10 , 0.05]', () => {
    const moedasRetornadasDoTroco = receberMoedas(2.65, moedasDisponiveis)
    const resultadoEsperado =[1, 1, 0.50,  0.10 , 0.05]
    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado)
  })


  test('troco para 2,75 retornar um array [1, 1, 0.50, 0.25]', () => {
    const moedasRetornadasDoTroco = receberMoedas(2.75, moedasDisponiveis)
    const resultadoEsperado =[1, 1, 0.50, 0.25]
    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado)
  })

})