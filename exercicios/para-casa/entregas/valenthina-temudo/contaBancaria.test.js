const {contaBancaria} = require('./contaBancaria')
const dadosConta = new contaBancaria();

dadosConta.nomeTitular = 'Valenthina';
dadosConta.saldo = 800;
dadosConta.limite = 1000;


describe('Conta bancária', () => {
  test('validar nome titular da conta bancária', () => {
    expect(dadosConta.validaNomeTitular (dadosConta.nomeTitular)).toEqual('Valenthina');
  })
  
  test("consultar saldo da conta bancária", () => {
    expect(dadosConta.validaSaldo (dadosConta.saldo)).toEqual(800);
  });

  test('verificar o limite da conta bancária', () => {
    expect(dadosConta.validaLimite (dadosConta.limite)).toEqual(1000);
  });

  test('retornar saque bancario', () => {
    expect(dadosConta.realizaSaque(600)).toBe(true);
  })

  test('aumentar limite da conta', () => {
    expect(dadosConta.aumentoDeLimite(dadosConta.limite)).toEqual(1400);
  })

  test('diminuir limite da conta', () => {
    expect(dadosConta.diminuirLimite(dadosConta.limite)).toEqual(500);
  })

  test('desativar conta', () => {
    expect(dadosConta.desativarConta()).toBe(true);
  })

})