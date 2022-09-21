const {convertCelsiusToFahrenheit, checkEvenNumber, generateCombinations, jokenpo, allKeys, isObject, calculadora} = require('../index.js');

//exercício 1
describe("Funcao de conversao", () => {
    test("deve converter celsius para fahreinheit", () => {
      expect (convertCelsiusToFahrenheit(0)).toEqual(32)

  })
})


//exercício 2
describe("checagem do número impar", () => {
  test(" deve retornar 1 é um número ímpar", () => {
    const result = checkEvenNumber("1")
    expect(result).toEqual("1 é um número ímpar")
  })
})

describe("checagem do número par", () => {
  test(" deve retornar 2 é um número par", () => {
    const result = checkEvenNumber("2")

    expect(result).toEqual("2 é um número par")
  })
})

describe("checagem de não número", () => {
  test(" deve retornar banana não é um número", () => {
    const result = checkEvenNumber("banana")

    expect(result).toEqual("banana não é um número")
  })
})

//EXERCÍCIO 3 

describe("checagem de empate", () => {
  test(" deve retornar Empate", () => {
    const result = jokenpo("pedra", "pedra")

    expect(result).toEqual("Empate!")
  })
})
describe("checagem da vitória jogada1", () => {
  test(" deve retornar Jogador 1 venceu!", () => {
    const result = jokenpo("pedra", "tesoura")

    expect(result).toEqual("Jogador 1 venceu!")
  })
})
describe("checagem da vitória jogada 2", () => {
  test(" deve retornar Jogador 2 venceu!", () => {
    const result = jokenpo("papel","tesoura")

    expect(result).toEqual("Jogador 2 venceu!")
  })
})


///exercício 4


describe("Arithmetic functions", () => {
  test('2 + 3 = 5', () => {
      expect(soma(2, 3)).toBe(5);
  });

  test('3 * 4 = 12', () => {
      expect(mult(3, 4)).toBe(12);
  });

  test('5 - 6 = -1', () => {
      expect(sub(5, 6)).toBe(-1);
  });

  test('8 / 4 = 2', () => {
      expect(div(8, 4)).toBe(2);
  });

  test('3!', () => {
    expect(div(3)).toBe(2);
  });
});