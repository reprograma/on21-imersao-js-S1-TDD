const { registerMessage } = require('./helpers');

class Vagas{
    constructor(vagas ,vagasaplicativo, vagasbloqueadas, vagasdeficiente){
        this.vagas = vagas;
       this.vagasaplicativo = vagasaplicativo;
       this.vagasbloqueadas = vagasbloqueadas;
       this.vagasdeficiente = vagasdeficiente;

      
    }

   
    updateVagaAplicativo()
    {
       return this.vagasaplicativo-- ;
    }

    addVagaAplicativo(qtdevaga)
    {
        return this.vagasaplicativo = qtdevaga;
    }
    validaVagaAplicativo(){
        if (this.vagasaplicativo != 0){
            return 'S'
        }
        else
        { 
            registerMessage('vaga', `Não tem vaga de Estacionamento disponível no momento`);
  
            return 'N'
      
    }
    }
   }
   
   module.exports = { Vagas };