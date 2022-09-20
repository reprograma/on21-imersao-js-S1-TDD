const {Banco} =  require('../AnnaMariaRodrigues/index.js')


describe ("Classe conta bancaria" , () =>{
    const meuBanco = new Banco();

    test("verificar nome do titular" , () => {
        const nometitular = "Anna Maria Rodrigues";
        meuBanco.nometitular = "Anna Maria Rodrigues";
        expect(meuBanco.nometitular).toEqual(nometitular);
 
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
        meuBanco.saldo = 1000;
        expect(meuBanco.saque(100)).toEqual(saque);
      });

      test("verificar se tem saldo suficiente para saque", () => {
        const saque = -100;
        meuBanco.limite = 1000;
        meuBanco.saldo = 1000;
        expect(meuBanco.saque(1100)).toEqual(saque);
      });

      test("verificar deposito", () => {
        const deposito = 1100;
        meuBanco.saldo = 1000;
        expect(meuBanco.deposito(100)).toEqual(deposito);
      });

    });

 

  