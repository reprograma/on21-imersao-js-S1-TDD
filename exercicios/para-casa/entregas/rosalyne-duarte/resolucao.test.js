const { Banco } = require ('./resolucao')

describe('Conta Bancária', () => {
    const meuBanco = new Banco()
    test('TESTE 1 - Verificar o nome do titular', () => {
        const nomeTitular = "Rosa Duarte";
        meuBanco.nomeTitular = "Rosa Duarte";

        expect(meuBanco.nomeTitular).toEqual(nomeTitular);

    });
    test("TESTE 2 - Verificar SALDO da Conta"  , () => {
        const saldo = 1000;
        meuBanco.saldo = 1000;
        
        expect(meuBanco.saldo).toEqual(saldo);

      });

      test("TESTE 3 - Verificar o LIMITE da conta", () => {
        const limite = 1000;
        meuBanco.limite = 1000;

        expect(meuBanco.limite).toEqual(limite);
      });  

    test("TESTE 4 - Verificar CONSULTA SALDO", () => {
        const saldo = 1000;
        meuBanco.saldo = 1000;

        expect(meuBanco.consultaSaldo()).toEqual(saldo);
      });

    test('TESTE 5 - Consulta Saldo', () => {
        const saldo = 1000;
        meuBanco.saldo = 1000

        expect(meuBanco.consultaSaldo()).toEqual(saldo);
    })    

    test('TESTE 6 - Verificar SAQUE', () => {
        const saque = 900;
        meuBanco.saldo = 1000
      
        expect(meuBanco.saque(100)).toEqual(saque);
    })

    test('TESTE 7 - Verificar Se tem SALDO limite para SAQUE', () => {
        const saque = -100;
        meuBanco.limite = 1000
        meuBanco.saldo = 1000

        expect(meuBanco.saque(1100)).toEqual(saque);
    }) 

    test('TESTE 8 - Verificar DEPOSITO', () => {
        const deposito = 1100;
        meuBanco.saldo = 1000
        
        expect(meuBanco.deposito(100)).toEqual(deposito);
    });

})