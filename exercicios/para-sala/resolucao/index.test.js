const {
  convertCelsiusToFahrenheit,
  checkEvenNumber,
  sum,
  revert,
  Calculadora,
  calculaTroco,
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
  test("Deve calcular o troco em centavos", () => {
    const esperado = [50, 10, 5];
    const result = calculaTroco(65, moedas);
    expect(result).toEqual(esperado);
  });
  test("Deve verificar se é um numero", () => {
    const result = calculaTroco("banana", moedas);
    expect(result).toBeNaN();
  });
});
