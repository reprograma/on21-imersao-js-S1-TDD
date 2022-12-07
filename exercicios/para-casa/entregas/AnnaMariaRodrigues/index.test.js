const {Banco} =  require('../AnnaMariaRodrigues/index.js')


describe ("Classe conta bancaria" , () =>{
    const meuBanco = new Banco();
        
    test("verificar nome do titular" , () => {
        const nometitular = "Anna Maria Rodrigues";
        meuBanco.nometitular = "Anna Maria Rodrigues";
        expect(meuBanco.validanome(meuBanco.nometitular)).toEqual(nometitular);
 
    });
    
    test("verificar o Saldo da conta", () => {
        const saldo = 1000;
        meuBanco.saldo = 1000;
        expect(meuBanco.saldo).toEqual(saldo);
      });


      test("verificar o limite da conta", () => {
        const limite = 1000;
        meuBanco.limite = 1000;
   
        expect(meuBanco.limite).toEqual(limite);
      });

      test("verificar consulta saldo", () => {
        const saldo = 1000;
        meuBanco.saldo = 1000;
        expect(meuBanco.consultaSaldo()).toEqual(saldo);
      });

      test("verificar saque", () => {
        const saque = 900;
        const resultado = 100;
        meuBanco.limite = 1000;
        meuBanco.saldo = 1000;
   
        expect(meuBanco.saque(saque)).toEqual(resultado);
      });

      test("verificar se tem saldo suficiente para saque", () => {
        const saque = 1100;
        const resultado = -100;
        meuBanco.limite = 1000;
        meuBanco.saldo = 1000;
         
        expect(meuBanco.saque(saque)).toEqual(resultado);
      });

      test("verificar deposito", () => {
        const deposito = 100;
        const resultado = 1100;
        meuBanco.saldo = 1000;
      
        expect(meuBanco.deposito(deposito)).toEqual(resultado);
      });

      test("mostrar novo limite", () => {
        meuBanco.limite = 1000;
        meuBanco.saldo = 1000;
        const resultado = 900;
        const result = meuBanco.saque(1100);
        const novolimite = meuBanco.limite + result; 
       
        expect(novolimite).toEqual(resultado);
      });

    });

 

  