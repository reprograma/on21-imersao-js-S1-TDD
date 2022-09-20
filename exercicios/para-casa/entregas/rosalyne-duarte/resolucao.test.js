const { Banco } = require ('./resolucao')

describe('Verificar o Nome do Titular', () => {
    const meuBanco = new Banco()
    test('TESTE 1 - Verificar o nome do titular', () => {
        const nomeTitular = "Rosa Duarte"
        meuBanco.nomeTitular = "Rosa Duarte";
        expect(meuBanco.nomeTitular).toEqual(nomeTitular);
        // const nometitular = "Anna Maria Rodrigues";
        // meuBanco.nometitular = "Anna Maria Rodrigues";
    });
    test("TESTE 2 - Verificar SALDO da Conta", () => {
        const saldo = 1000;
        meuBanco.saldo = 1000;
        expect(meuBanco.saldo).toEqual(saldo);

        // const saldo = 1000;
        // meuBanco.saldo = 1000;
        // expect(meuBanco.saldo).toEqual(saldo);


      });

      test("TESTE 3 - verificar o limite da conta", () => {
        const limite = 1000;
        meuBanco.limite = 1000;
        expect(meuBanco.limite).toEqual(limite);
      });

    test('TESTE 4 - Verificar se tem saldo suficiente para saque', () => {
        const saque = 1110
        meuBanco.limite = 1000
        meuBanco.saldo = 1000 
    
        expect(meuBanco.saque()).toEqual(saque)
    })    

    test("TESTE 5 - verificar consulta saldo", () => {
        const saldo = 1000;
        meuBanco.saldo = 1000;
        expect(meuBanco.consultaSaldo()).toEqual(saldo);
      });

    test('TESTE 6 - Consulta Saldo', () => {
        const saldo = 1000;
        meuBanco.saldo = 1000
        expect(meuBanco.consultaSaldo()).toEqual(saldo);
    })    

    test('TESTE 7 - Verificar SAQUE', () => {
        const saque = 900;
        meuBanco.saldo = 1000
        meuBanco.saque = 100
        expect(meuBanco.saque()).toEqual(saque);
    })
    test('OK ... TESTE 8 ... 6 - Verificar Se tem SALDO limite para SAQUE', () => {
        const saque = -100;
        meuBanco.limite = 1000
        meuBanco.saldo = 1000
        expect(meuBanco.saque(1100)).toEqual(saque);

        
        // const saque = -100;
      //  meuBanco.limite = 1000;
        //meuBanco.saldo = 1000;
        //expect(meuBanco.saque(1100)).toEqual(saque);
    }) 

    test('OK... TESTE 9....7 - Verificar DEPOSITO', () => {
        const deposito = 1100;
        meuBanco.saldo = 1000
        
        expect(meuBanco.deposito(100)).toEqual(deposito);

        // const deposito = 1100;
        // meuBanco.saldo = 1000;
        // expect(meuBanco.deposito(100)).toEqual(deposito);
    });

//       test("verificar deposito", () => {
//     const deposito = 1100;
//     meuBanco.saldo = 1000;
//     expect(meuBanco.deposito(100)).toEqual(deposito);
//   }); 
})

/*
const { Banco } = require("./resolucao");

describe("Função de conta bancaria", () => {


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
*/


////////////TESTE ---------------------
/*
const { Banco } = require("./resolucao");

describe("Função de conta bancaria", () => {
  const meuBanco = new Banco();
  test("TESTE 1 - verificar nome do titular", () => {
    const nometitular = "Anna Maria Rodrigues";
    meuBanco.nometitular = "Anna Maria Rodrigues";
    expect(meuBanco.nometitular).toEqual(nometitular);
  });

  test("TESTE 2 -  verificar o Saldo da conta", () => {
    const saldo = 1000;
    meuBanco.saldo = 1000;
    expect(meuBanco.saldo).toEqual(saldo);
  });
  test("TESTE 3 - verificar o limite da conta", () => {
    const limite = 1000;
    meuBanco.limite = 1000;
    expect(meuBanco.limite).toEqual(limite);
  });
  test("TESTE 4 - verificar consulta saldo", () => {
    const saldo = 1000;
    meuBanco.saldo = 1000;
    expect(meuBanco.consultaSaldo()).toEqual(saldo);
  });
  test("TESTE 5 - verificar saque", () => {
    const saque = 900;
    meuBanco.saldo = 1000;
    expect(meuBanco.saque(100)).toEqual(saque);
  });
  test("OK, TESTE 6 - verificar se tem saldo suficiente para saque", () => {
    const saque = -100;
    meuBanco.limite = 1000;
    meuBanco.saldo = 1000;
    expect(meuBanco.saque(1100)).toEqual(saque);
  });
  test("OK, TESTE 7 - verificar deposito", () => {
    const deposito = 1100;
    meuBanco.saldo = 1000;
    expect(meuBanco.deposito(100)).toEqual(deposito);
  });
});
*/