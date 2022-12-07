const { registerMessage } = require('./helpers');
const{ Carro , CarroAplicativo} = require('./carro');
const {Vagas} = require('./vagas');

class CarroVaga{
    constructor(vaga, carroAplicativo){
        if (vaga instanceof Vagas && carroAplicativo instanceof CarroAplicativo){
            this.vaga = vaga;
            this.carroAplicativo = carroAplicativo;
        }
    }

    confirmaCarroVaga(){
    if (this.vaga.validaVagaAplicativo()==='S'){
        registerMessage('qtdevaga', ` A quantidade de vagas para Aplicativo é ${this.vaga.vagasaplicativo}`)
        registerMessage('vaga', `O carroAplicativo ${this.carroAplicativo.placa}  foi adicionado ao Estacionamento`);
        this.vaga.updateVagaAplicativo();
        registerMessage('qtdevaga', ` A quantidade de vagas para Aplicativo é ${this.vaga.vagasaplicativo}`)
    }
}

}

module.exports = { CarroVaga };