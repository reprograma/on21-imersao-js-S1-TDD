const {
  converterCelsiusPraFahrenheit,
  soma,
  verificarNumero,
  reverterString,
  jokenpo,
} = require("./index");

// *****************
describe("função de conversão de temperatura", () => {
  test("deve converter de celcius pra fahrenheit", () => {
    expect(converterCelsiusPraFahrenheit(60)).toEqual(140);
  });
});

// *****************
describe("checa se o numero é par ou impar", () => {
  test("testa se é um numero", () => {
    const resultado = verificarNumero('banana');
    expect(resultado).not.toBeNaN();
  });

  test("testa se é par", () => {
    const resultado = verificarNumero(4);
    expect(resultado).toEqual("4 é um número par");
  });
  test("testa se é impar", () => {
    const resultado = verificarNumero(3);
    expect(resultado).toEqual("3 é um número ímpar");
  });
});

// *****************
describe("Função de soma", () => {
  test("(5, 1) => 6)", () => {
    expect(soma(5, 1)).toEqual(6);
  });
  test("(1, 1) => 6)", () => {
    expect(soma(1, 1)).toEqual(6);
  });
});

// *****************
describe("função de reverterString ", () => {
  test("'casa' => 'asac'", () => {
    expect(reverterString("casa")).toEqual("asac");
  });

  test("'javascript' => 'tpircsavaj'", () => {
    expect(reverterString("javascript")).toEqual("tpircsavaj");
  });
});

// *****************

describe('pedra papel e tesoura', ()=> {
    test('Testa se a jogada1 for igual a jogada 2', ()=>{
        const jogada1 = 'pedra'
        const jogada2 = 'pedra'
        const resultado = jokenpo(jogada1, jogada2)
        expect(resultado).toBe('Empate!')
    });
    test('Condição aleatória pra testar quando o jogador 1 ganha', () =>{
        const jogada1 = 'papel'
        const jogada2 = 'pedra'
        const resultado = jokenpo(jogada1, jogada2)
        expect(resultado).toBe('Jogador 1 venceu!')
    })
    test('Condição aleatória pra testar quando o jogador 2 ganha', () =>{
        const jogada1 = 'tesoura'
        const jogada2 = 'pedra'
        const resultado = jokenpo(jogada1, jogada2)
        expect(resultado).toBe('Jogador 2 venceu!')
    })
});
// seria necessário fazer um teste para cada possibilidade de jogada????

// *****************
describe('', ()=>{
    test('', () =>{
        
    })
})