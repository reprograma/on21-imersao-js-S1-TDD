const {
  convertCelsiusToFahrenheit,
  checkEvenNumber,
  jokenpo,
  sum,
  revert,
  Calculadora,
  calculaTroco,
  generateCombinations,
  allKeys,
} = require("../index");

//1
describe("Função de Conversão", () => {
  test("Deve converter de Celsius para Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(60)).toEqual(140);
  });
});

//2
describe("Função de checar número", () => {
  test("Deve verificar se é número", () => {
    const variable = "banana";
    const expectedResult = variable + " não é um número";
    const receivedResult = checkEvenNumber(variable);
    expect(receivedResult).toEqual(expectedResult);
  });
  test("Deve verificar se é número par", () => {
    const variable = 2;
    const expectedResult = variable + " é um número par";
    const receivedResult = checkEvenNumber(variable);
    expect(receivedResult).toEqual(expectedResult);
  });
});

//3
describe("Função de jokenpo", () => {
  test("Deve retornar empate", () => {
    expect(jokenpo("pedra", "pedra")).toEqual("Empate!");
  });
  test("Deve retornar vitoria do jogador 1", () => {
    expect(jokenpo("pedra", "tesoura")).toEqual("Jogador 1 venceu!");
  });
  test("Deve retornar vitoria do jogador 2", () => {
    expect(jokenpo("tesoura", "pedra")).toEqual("Jogador 2 venceu!");
  });
});

//4
describe("Função de gerar combinações", () => {
  test("Retorna array vazia ao passar numeros ", () => {
    expect(generateCombinations(4)).toHaveLength(0);
  });
});

//5
describe("Função de Chaves", () => {
  test("Retorna array vazia ao passar string", () => {
    expect(allKeys("banana")).toHaveLength(0);
  });
});

// 6. A função soma dois números, caso os números sejam iguais, a soma é triplicada
describe("Sum function", () => {
  test("(5, 1) => 6)", () => {
    expect(sum(5, 1)).toEqual(6);
  });

  test("(1, 1) => 6)", () => {
    expect(sum(1, 1)).toEqual(6);
  });
});

//7
describe("RevertString function", () => {
  test("'casa' => 'asac'", () => {
    expect(revert("casa")).toEqual("asac");
  });

  test("'javascript' => 'tpircsavaj'", () => {
    expect(revert("javascript")).toEqual("tpircsavaj");
  });
});

//8
describe("Classe Calculadora", () => {
  const { soma, subtracao, multiplicacao, divisao, fatorial, somaEDivide } =
    Calculadora();
  test("'Soma da Calculadora", () => {
    expect(soma(1, 1)).toEqual(2);
  });

  test("'Subtração da Calculadora", () => {
    expect(subtracao(1, 1)).toEqual(0);
  });

  test("'Multiplicacão da Calculadora", () => {
    expect(multiplicacao(1, 5)).toEqual(5);
  });

  test("'Divisão da Calculadora", () => {
    expect(divisao(1, 1)).toEqual(1);
  });
  test("'Fatorial da Calculadora", () => {
    expect(fatorial(5)).toEqual(120);
  });
  test("'Deve somar dois números, e dividir pelo terceiro", () => {
    expect(somaEDivide(3, 5, 2)).toEqual(4);
  });
});

//9
describe("Função de Troco", () => {
  const moedas = [1, 5, 10, 25, 50, 100];
  test("Deve calcular o troco 0.65 em centavos", () => {
    const resultadoEsperado = [50, 10, 5];
    const resultadoRecebido = calculaTroco(65, moedas);
    expect(resultadoRecebido).toStrictEqual(resultadoEsperado);
  });
  test("Deve retornar NaN ao passar uma string", () => {
    const resultado = calculaTroco("banana", moedas);
    expect(resultado).toBeNaN();
  });
});
