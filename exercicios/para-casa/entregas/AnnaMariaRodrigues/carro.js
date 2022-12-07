const { registerMessage } = require('./helpers');

class Carro {
    constructor(marca, placa) {
        this.marca = marca;
        this.placa = placa;
   }

    validaPlaca(placa) {
        var regex = '[A-Z]{3}[0-9][0-9A-Z][0-9]{2}';
        if (placa.match(regex)) {
            return 'S';
        }
        else { return 'N' }
    }
}

class CarroAplicativo extends Carro {
    tela;
    motorista;
    constructor(tela, marca, placa, motorista) {
        super(marca, placa)
            this.tela = tela;
            this.motorista = motorista;
        
    }
    validaCarroAplicativo(carroAplicativo) {
        if ((carroAplicativo.tela) != undefined){
        if (carroAplicativo instanceof CarroAplicativo) {
            registerMessage('carroaplicativo', `o Carro ${carroAplicativo.placa} é um carro de aplicativo`);
        
            return 'S';
        }
        else { 

            return 'N' }
    }
    else {
        registerMessage('carro', `o Carro ${carroAplicativo.placa} não é carro de aplicativo`);

        return 'N' }

    }

   
}
module.exports = { Carro, CarroAplicativo };