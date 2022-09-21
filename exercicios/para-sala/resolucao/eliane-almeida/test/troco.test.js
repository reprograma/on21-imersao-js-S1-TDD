const receberTroco = require('../troco')

describe("Troco", () => {
    const moedasDisponmiveis = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
    it ("Troco para 1 real deve retornar 1 moeda de 1 real", () => {
        const result = receberTroco(1, moedasDisponmiveis)
        expect(result).toEqual([1])
    });

    it ("Troco para 1,75 deve retornar um array [1, 0.50, 0,25]", () => {
        const result = receberTroco(1.75, moedasDisponmiveis)
        expect(result).toEqual([1, 0.50, 0.25])
    });

    it ("Troco para 2,00 deve retornar um array [1, 1]", () => {
        const result = receberTroco(2, moedasDisponmiveis)
        expect(result).toEqual([1, 1])
    });

    it ("Troco para 2,10 deve retornar um array [1, 1, 0.10]", () => {
        const result = receberTroco(2.10, moedasDisponmiveis)
        expect(result).toEqual([1, 1, 0.10])
    });
});
