const { convertCelsiusToFahrenheit, revert, checkEvenNumber, jokenpo, generateCombinations, Calculadora, sum } = require('../index.js');

  // 1)
  describe("Função de conversão", () => {
    test("deve converter de Celsius para Fahrenheit", () => {
      expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    })
  });

  // 2) 
  describe("Função verifica se o número par", () => {
    test("Verifica se a variavel é um numero", () => {
      const str = 'banana'

      expect(checkEvenNumber(str)).toEqual(str+' não é um número')
    })
    test("Verifica se a variavel é um numero par", () => {
      expect(checkEvenNumber('2')).toEqual('2 é um número par')
    })
    test("Verifica se a variavel é um numero impar", () => {
      expect(checkEvenNumber('3')).toEqual('3 é um número ímpar')
    })
  })

  //3)
  describe('Função mostra placar jokenpo', () => {
    test("resultado da mostra empate", () => {
      expect(jokenpo('pedra', 'pedra')).toEqual('Empate!')
      expect(jokenpo('papel', 'papel')).toEqual('Empate!')
      expect(jokenpo('tesoura', 'tesoura')).toEqual('Empate!')
    })

    test("resultado da mostra que Jogador 2 venceu!", () => {
      expect(jokenpo('pedra', 'papel')).toEqual('Jogador 2 venceu!')
      expect(jokenpo('papel', 'tesoura')).toEqual('Jogador 2 venceu!')
      expect(jokenpo('tesoura', 'pedra')).toEqual('Jogador 2 venceu!')
    })

    test("resultado da mostra que Jogador 1 venceu!", () => {
      expect(jokenpo('papel', 'pedra')).toEqual('Jogador 1 venceu!')
      expect(jokenpo('tesoura', 'papel')).toEqual('Jogador 1 venceu!')
      expect(jokenpo('pedra', 'tesoura')).toEqual('Jogador 1 venceu!')
    })

  })

  // 4)
  describe("generateCombinations function", () => {
    test("gerando combinação com a palavra sol", () => {
        expect(generateCombinations('sol')).toEqual(['s', 'o', 'so', 'l', 'sl', 'ol', 'sol']);
    });
  });

  // 5) 

  // 6)
  describe("Sum function", () => {
    test("(5, 1) => 6)", () => {
        expect(sum(5, 1)).toEqual(6);
    });

    test("(1, 1) => 6)", () => {
        expect(sum(1, 1)).toEqual(6);
    });
});

  // 7) 
  describe("RevertString function", () => {
    test("'casa' => 'asac'", () => {
        expect(revert('casa')).toEqual('asac');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
  });

  // 8)
  describe("Verifica calculadora", () => {
    test("Operação soma", () => {
        expect(Calculadora.soma(5, 1)).toEqual(6);
    });

    test("Operação subtracao", () => {
        expect(Calculadora.sub(6, 2)).toEqual(4);
    });
    
    test("Operação multiplicacao", () => {
        expect(Calculadora.mult(3, 3)).toEqual(9);
    });
    
    test("Operação divisao", () => {
        expect(Calculadora.div(10, 2)).toEqual(5);
    });

    test("Operação fatorial", () => {
        expect(Calculadora.fatorial(5)).toEqual(120);
    });
  });