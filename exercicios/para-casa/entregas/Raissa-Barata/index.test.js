const ContaBancaria = require('./index')

describe('consultas na conta bancária ', () => {
  const conta = new ContaBancaria('Raissa', 200, 500 )
  
    test('Se existe titular ne nessa conta', () => {
      expect(conta.titular).toBe('Raissa');
    });

    test('Qual o saldo da conta', () => {
      expect(contaBancariaFulano.saldo).toBe(200);
    });

    test('Quero depositar dinheiro na conta ', () => {
      const valorDepositado = 30

      expect(contaBancariaFulano.saldo).toBe(230);
    });

    test('Quero sacar dinheiro com limite ', () => {
      const valorSacado = 600
      
      expect(contaBancariaFulano.saldo).toBe(-100);
    });

    test('Quero sacar dinheiro sem limite ', () => {
      const valorSacado = 800
      
      expect(contaBancariaFulano.saldo).toBe('Não há limite para saque');
    });

  })