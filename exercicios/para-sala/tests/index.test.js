const { convertCelsiusToFahrenheit, checkEvenNumber, sum, revert } = require('../index')

describe("Convert celsius function", () => {
    test("it should convert from celsius to fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    })
});

describe("Check even number function", () => {
    test("it should check if number 2 is even", () => {
        const result = checkEvenNumber(2)
        const output = "2 is not an even number";
  
      expect(result).toEqual(output);
    });
  
    test("it should check if number 1 is even", () => {
        const result = checkEvenNumber(1)
        const output = "1 is an even number";
  
      expect(result).toEqual(output);
    });
  
    test("it should check if 'n' is even", () => {
        const result = checkEvenNumber("n")
        const output = "n is not a number";
  
      expect(result).toEqual(output);
    });
  });

 // ----------------------- exercícios de tdd ------------------------- 

// 6) Considere o teste abaixo e escreva a função para que o teste passe.
// A função soma dois números, caso os números sejam iguais, a soma é triplicada
describe("Sum function", () => {
    test("it should sum two numbers", () => {
        expect(sum(5, 1)).toEqual(6);
    });

    test("it should multiplicate the sum result", () => {
        expect(sum(1, 1)).toEqual(6);
    });
});


// 7) Considere o teste abaixo e escreva a função para que o teste passe.
describe("RevertString function", () => {
    test("'casa' => 'asac'", () => {
        expect(revert('casa')).toEqual('asac');
    });
    
    test("'javascript' => 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
});