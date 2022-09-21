const { convertCelsiusToFahrenheit, checkEvenNumber, sum, revert, receberMoedas, Calculadora } = require('../index');

describe('Function ConvertToCelsiusToFahrenheit()', () => {
    test("", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);

    });
})

describe('Function checkEvenNumber()', () => {
    test("", () => {
        const result = checkEvenNumber('a')
        expect(result).toBeNaN();  
        });
    })

// A função soma dois números, caso os números sejam iguais, a soma é triplicada

describe("Sum function", () => {
    test("soma de dois número", () => {
        expect(sum(5, 1)).toEqual(6);
    });
    test("soma triplicada", () => {
        expect(sum(1, 1)).toEqual(6);
    });
});

// Considere o teste abaixo e escreva a função para que o teste passe.

describe("RevertString function", () => {
    test("'casa' => 'asac'", () => {
        expect(revert('casa')).toEqual('asac');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
});


describe("criar calculadora", () => {
    const calculando = new Calculadora();
    test('Somatoria', () => {
        expect(calculando.soma(1, 2)).toEqual(3);
    }
    )
    test('Subtração', () => {
        expect(calculando.subtrai(1, 1)).toEqual(0);
    }
    )
    test('Multiplicação', () => {
        expect(calculando.multiplica(1, 1)).toEqual(1);
    }
    )
    test('Divisão', () => {
        expect(calculando.divide(1, 1)).toEqual(1);
    }
    )
    test('faltorial', () => { 
        expect(calculando.fatorial(5)).toEqual(120);
    }
    )
    test('SomaAndDivisao', () => {
        expect(calculando.SomaAndDivisao(2, 2, 2)).toEqual(2);
    }
    )
})


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