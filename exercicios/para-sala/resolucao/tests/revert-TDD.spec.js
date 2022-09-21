const revert = require('../../resolucao/revert-TDD')

describe("RevertString function", () => {
    test("Deve receber uma string 'casa' e retornar a string invert 'asac'", () => {
        expect(revert('casa')).toEqual('asac');
    });

    test("Deve receber uma string 'javascript' e retornar a string invert 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
});