const { registerMessage } = require('./helpers');
const{ Carro , CarroAplicativo} = require('./carro');
const {Estacionamento} = require('./estacionamento');
const {Vagas} = require('./vagas');
const register = require('./register');
const {CarroVaga} = require('./carroVaga');

registerMessage('initialTime', '');

carro1 = new Carro('Corsa', 'PQW1123');

CarroAplicativo0 = new CarroAplicativo();
CarroAplicativo1 = new CarroAplicativo('foto', 'Corsa', 'PQW9812', 'Anna') ;
CarroAplicativo2 = new CarroAplicativo('foto', 'Astra', 'XDE9412', 'Fernanda') ;
CarroAplicativo3 = new CarroAplicativo('foto', 'Punto', 'ABD5678', 'Carol') ;


CarroAplicativo1.validaCarroAplicativo(CarroAplicativo1);
CarroAplicativo1.validaCarroAplicativo(CarroAplicativo2);
CarroAplicativo1.validaCarroAplicativo(CarroAplicativo3);

CarroAplicativo1.validaCarroAplicativo(carro1);

const vagas1 = new Vagas(50,2,2,4);

const estacionamento1 = new Estacionamento('Guanabara' ,100);

const carroVaga1 = new CarroVaga (vagas1 , CarroAplicativo1);
const carroVaga2 = new CarroVaga (vagas1 , CarroAplicativo2);
const carroVaga3 = new CarroVaga (vagas1 , CarroAplicativo3);

carroVaga1.confirmaCarroVaga();
carroVaga2.confirmaCarroVaga();
carroVaga3.confirmaCarroVaga();
vagas1.addVagaAplicativo(2);
carroVaga3.confirmaCarroVaga();

registerMessage('finalTime', '');
console.log(register)