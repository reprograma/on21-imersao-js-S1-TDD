const {convertCelsiusToFahrenheit,checkEvenNumber,soma,revert,calculadora} =  require('../index')

describe ("Função de conversão" , () =>{
   test("converter de Celsius para Fahrenheit" , () => {
    expect(convertCelsiusToFahrenheit(60)).toEqual(140)

   })
   
});


describe ("Função de Par/Impar" , () =>{
    test("Validar Par/Impar" , () => {
        const resultado = checkEvenNumber("banana")
    // expect(resultado).toBeNaN()
    expect(resultado)
    })
    
 })
 

 describe("Sum function", () => {
    test("(5, 1) => 6)", () => {
        expect(soma(5, 1)).toEqual(6);
    });

    test("(1, 1) => 6)", () => {
        expect(soma(1, 1)).toEqual(6);
    });
});

describe("RevertString function", () => {
    test("'casa' => 'asac'", () => {
        expect(revert('casa')).toEqual('asac');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
});

describe("Calculadora", () => {
    test("Soma(5, 1) => 6)", () => {
        expect(calculadora(5, 1, '+')).toEqual(6);
    });

    test("Subtracao(5, 1) => 4)", () => {
        expect(calculadora(5, 1, '-')).toEqual(4);
    });

    test("Multiplicacao(5, 1) => 5)", () => {
        expect(calculadora(5, 1, '*')).toEqual(5);
    });

    test("Divisao(10, 2) => 5)", () => {
        expect(calculadora(10, 2, '/')).toEqual(5);
    });

    test("Fatorial(5) => 120)", () => {
        expect(calculadora(5, '')).toEqual(120);
    });
});