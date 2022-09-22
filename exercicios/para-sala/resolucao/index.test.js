//Primeiro importamos as funções que serão testadas
//Depois, abrimos a função describe que englobará os testes unitários que desejamos, geralmente um agrupamento "lógico"
//A função describe recebe dois parâmetros, uma descrição e uma função que terá os testes unitários
//Aqui deve ter uma nova função test, que receberá como parâmetro uma descrição desse teste específico
//e também outra função, que terá como escopo a lógica real do teste
//aqui é a sintaxe do teste, expect() recebe o que eu desejo testar, que função e com qual parâmetro
//e o resultado que eu espero no .toEqual(), que tem variações também (toBe(), notToBe(), etc...)

const {convertCelsiusToFahrenheit, checkEvenNumber} = require ('./index.js');
const {Calculadora} = require ('../resolucao.js');


describe("Função de conversão", () =>{

    test("Deve converter de celsius para fahrenheit", () => {
        
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    });

});

describe('Checando se é PAR ou IMPAR', () => {

    test('Condicao .. Se NÂO é número', () => {
        const resultado = checkEvenNumber('banana')

        expect(resultado).toBeNaN() // AQUI TALVEZ FALHE ---> talvez não! ele falha mesmo!
    });
})


describe("Teste para a classe calculadora", () =>{

    test("Se o método soma está funcionando", () => {

        expect(Calculadora.soma(5,5)).toEqual(9)
    });

    test("Se o método subtração está funcionando", () => {
        expect(Calculadora.subtracao(20,10)).toEqual(9)
    });

    test("Se o método multiplicação está funcionando", () => {
        expect(Calculadora.multiplicacao(2,5)).toEqual(9)
    });

    test("Se o método divisão está funcionando", () => {
        expect(Calculadora.divisao(20,2)).toEqual(9)
    });

});