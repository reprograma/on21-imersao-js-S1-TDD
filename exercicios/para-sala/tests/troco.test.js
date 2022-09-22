const receberMoedas = require('./troco')

describe('Troco', () => {
  const moedasDisponiveis = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
  test('troco para 1 real retorna 1 moeda de 1 real', () => {
    const moedasRetornadasDoTroco = receberMoedas(1, moedasDisponiveis)
    const resultadoEsperado = [1]
    expect(moedasRetornadasDoTroco).toStrictEqual(resultadoEsperado)
  })

  test('troco para 1,50 retornar um array [1, 0.5]', () => {
    expect(receberMoedas(1.5, moedasDisponiveis)).toEqual([1, 0.5])
  });

  test('troco para 2,00 retornar um array [1, 1]', () => {
    expect(receberMoedas(2, moedasDisponiveis)).toEqual([1, 1])
  })


  test('troco para 2,10 retornar um array [1, 1, 0.10]', () => {
    expect(receberMoedas(2.10, moedasDisponiveis)).toEqual('banana')
  })
})