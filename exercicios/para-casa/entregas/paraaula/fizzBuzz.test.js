const fizzBuzz = require('../paraaula/fizzBuzz')
  
describe('Teste FizzBuzz', () => {
 
    test('Retornar Fizz se o numero for multiplo de 3', () => {

    const resultado = fizzBuzz(27)
    const resultadoEsperado = 'Fizz'
    expect(resultado).toEqual(resultadoEsperado)
  })

  test('Retornar Buzz se o numero for multiplo de 5', () => {

    const resultado = fizzBuzz(55)
    const resultadoEsperado = 'Buzz'
    expect(resultado).toEqual(resultadoEsperado)
  })

  test('Retornar FizzBuzz se o numero for multiplo de 3 e 5', () => {

    const resultado = fizzBuzz(15)
    const resultadoEsperado = 'FizzBuzz'
    expect(resultado).toEqual(resultadoEsperado)
  })

})
