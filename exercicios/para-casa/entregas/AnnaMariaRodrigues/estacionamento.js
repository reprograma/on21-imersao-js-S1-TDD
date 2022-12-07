const { registerMessage } = require('./helpers');


class Estacionamento{
 constructor( name ,quantidade){
   this.name = name;
   
    this.quantidade = quantidade;

    registerMessage('estacionamento', `o Estacionamento ${name} foi criado`);

 }

 
}

module.exports = { Estacionamento };