const { convertCelsiusToFahrenheit,  checkEvenNumber,  soma, revert, Calculadora  } = require ('./index')

//import Calculadora from './index'
// export default
// import SoundPlayer from './sound-player';

//1) Escreva um teste para função abaixo:
describe('Função de Conversão', () => {

    test('Teste 1 - Deve converter de Celsius para Fahrenheit', () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    });

});

//2) Escreva ao menos um teste para a função abaixo:
describe('Teste 2 - Checando se é PAR ou IMPAR', () => {

    test('Condicao .. Se NÂO é número', () => {
        const resultado = checkEvenNumber('banana')

        expect(resultado).toBeNaN()
    });
})

//-------------TDD---------------
//6) Considere o teste abaixo e escreva a função para que o teste passe.
//  A função soma dois números, caso os números sejam iguais, a soma é triplicada
describe("Função de Soma", () => {
    test("soma de dois numero 5 + 1", () => {
        expect(soma(5, 1)).toEqual(6);
    });

    test("Fazer a soma e depois multiplicar ... multiplicar por 3X", () => {
        expect(soma(1, 1)).toEqual(6);
    });
});

//7) Considere o teste abaixo e escreva a função para que o teste passe.
describe("RevertString function", () => {
    test("'casa' => 'asac'", () => {
        expect(revert('casa')).toEqual('asac');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
});

//8) Usando TDD:
//Crie uma classe chamada Calculadora;
//Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
//Use a criatividade e crie um último método que utilize pelo menos dois dos métodos criados anteriormente.

describe('Calculadora', () => {
//const { soma, subtracao,  multiplicacao, divisao, fatorial } = Calculadora()
//const { soma, divisao, fatorial, multiplicacao, subtracao } = Calculadora()
        const calculando = new Calculadora()

    test('SOMA 2 Numeros', () => {
        expect(calculando.soma(1,2)).toEqual(3);
       // expect(soma(1,2)).toEqual(3)
    });

    test('SUBTRACAO', () => {
        expect(calculando.subtracao(2,1)).toEqual(1);
    });

    test('MULTIPLICACAO', () => {
        expect(calculando.multiplicacao(2,2)).toEqual(4);
    });

    test('DIVISAO', () => {
        expect(calculando.divisao(6,2)).toEqual(3);
    });

    test('FATORIAL', () => {
        expect(calculando.fatorial(3)).toEqual(6);
    });
});

/*
describe("verifica os metodos da calaculadora", () => {
  const { soma, divisao, fatorial, multiplicacao, subtracao } = Calculadora()
  test("soma 2 numeros", () => {
    expect(soma(1,2)).toEqual(3)
  });
  test("subtrai 2 numeros", () => {
    expect(subtracao(2,1)).toEqual(1)
  });
  test("dividi 2 numeros", () => {
    expect(divisao(4,2)).toEqual(2)
  });
  test("multiplica 2 numeros", () => {
    expect(multiplicacao(2,2)).toEqual(4)
  });
  test("fatorial de 1 numero", () => {
    expect(fatorial(3)).toEqual(6)
  });
});

*/
