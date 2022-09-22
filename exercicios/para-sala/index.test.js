const {checkEvenNumber} =require("./index");

describe("checar se é número e se é impar ou par", ()=> {
    test("verificar se o parâmetro é um número", ()=> {
        const resultado = checkEvenNumber("banana")
        expect(resultado).toBeNaN()
    })
});

describe("Sum function", () => {
    test("(5, 1) => 6)", () => {
        expect(sum(5, 1)).toEqual(6);
    });

    test("(1, 1) => 6)", () => {
        expect(sum(1, 1)).toEqual(6);
    });
});
