const {Vagas} = require('./vagas')


describe ("Validar a Classe Vaga " , () =>{
  //  const minhaVaga = new VagaEstacionamento();
    const vagas1 = new Vagas(50,2,2,4);


    test("verificar se a vaga reservada para o carro de aplicativo está livre", () => {
        const vagaLiberada = 'S';
        expect(vagas1.validaVagaAplicativo()).toEqual(vagaLiberada);
      });


      test("verificar se a vaga reservada para o carro de aplicativo está bloqueado", () => {
        const vagas2 = new Vagas(50,0,2,4);
        const vagaLiberada = 'N';
        expect(vagas2.validaVagaAplicativo()).toEqual(vagaLiberada);
      });

    });

 

  