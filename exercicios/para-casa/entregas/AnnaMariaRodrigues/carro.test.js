const { Carro, CarroAplicativo } = require('./carro')


describe("Validações para a Classe Carro", () => {
    const carro1 = new Carro('Corsa', 'PQW9812');
    const carroAplicativo1 = new CarroAplicativo('foto', 'Corsa', 'PQW9812', 'Anna');

    test("verificar se o carro é de aplicativo, retorna S", () => {
        const carroAplicativo = 'S'
      
        expect(carroAplicativo1.validaCarroAplicativo(carroAplicativo1)).toEqual(carroAplicativo);

    });

    test("verificar se o carro não é de aplicativo, retorna N", () => {
        const carroAplicativo = 'N'
        expect(carroAplicativo1.validaCarroAplicativo(carro1)).toEqual(carroAplicativo);

    });

    test("verificar se o carro não é de aplicativo, retorna N", () => {
        const carroAplicativo = 'N'
        const carroAplicativo2 = new CarroAplicativo( undefined,'Corsa', 'PQW9812' ,'Anna');
        expect(carroAplicativo2.validaCarroAplicativo(carroAplicativo2)).toEqual(carroAplicativo);

    });

    test("verificar se a placa do carro é válida, retorna S", () => {
        const placaValida = 'S'
        expect(carro1.validaPlaca(carro1.placa)).toEqual(placaValida);

    });

    test("verificar se a placa do carro de aplicativo é válida, retorna S", () => {
        const placaValida = 'S'
        expect(carroAplicativo1.validaPlaca(carroAplicativo1.placa)).toEqual(placaValida);

    });

    test("verificar se a placa do carro de aplicativo é inválida, retorna N", () => {
        const placaValida = 'N'
        carroAplicativo1.placa = '2346658856856';
        expect(carroAplicativo1.validaPlaca(carroAplicativo1.placa)).toEqual(placaValida);

    });

    test("verificar se a placa do carro é inválida, retorna N", () => {
        const placaValida = 'N';
        carro1.placa = ' ';
        expect(carro1.validaPlaca(carro1.placa)).toEqual(placaValida);

    });
});



