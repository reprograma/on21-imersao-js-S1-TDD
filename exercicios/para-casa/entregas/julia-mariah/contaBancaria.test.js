const {contaBancaria} = require("../julia-mariah/contaBancaria.js")
const nomeBanco = new contaBancaria();

nomeBanco.nomeTitular = 'julia';
nomeBanco.saldo = 500;
nomeBanco.limiteConta = 1000;

describe("mostrar os dados da conta bancária", () => {
    test("deve validar o nome", () => {
        expect(nomeBanco.validaNome (nomeBanco.nomeTitular)).toEqual("julia");
    })

    test("deve mostrar o saldo", () => {
        expect(nomeBanco.validaSaldo (nomeBanco.saldo)).toEqual(500);
    })

    test("deve mostrar o limite da conta", () => {
        expect(nomeBanco.validaLimiteconta (nomeBanco.limiteConta)).toEqual(1000);
    })
    
    test("fazer um saque" , () => {
        expect(nomeBanco.fazerSaque (500)).toEqual(0);
         
    })

    test("fazer um depósito" , () => {
        expect(nomeBanco.fazerDeposito (200)).toEqual(1700);
    })

    test("mostrar limite atualizado" ,() => { 
        nomeBanco.fazerSaque (600)
        const resultado = nomeBanco.limiteConta
        expect(resultado).toEqual(900)
    }
    )

    
})




//const meuBanco = new Banco();
// meuBanco.nometitular = "Anna Maria Rodrigues";
// meuBanco.saldo = 1000;
// meuBanco.limite = 1000;
//const {Banco} =  require('../AnnaMariaRodrigues/index.js')
// describe ("Classe conta bancaria" , () =>{
//     const meuBanco = new Banco();

//     test("verificar nome do titular" , () => {
//         const nometitular = "Anna Maria Rodrigues";
//         meuBanco.nometitular = "Anna Maria Rodrigues";
//         expect(meuBanco.validanome(meuBanco.nometitular)).toEqual(nometitular);
 
//     });
    
//     test("verificar o Saldo da conta", () => {
//         const saldo = 1000;
//         meuBanco.saldo = 1000;
//         expect(meuBanco.saldo).toEqual(saldo);
//       });


//       test("verificar o limite da conta", () => {
//         const limite = 1000;
//         meuBanco.limite = 1000;
//         expect(meuBanco.limite).toEqual(limite);
//       });

//       test("verificar consulta saldo", () => {
//         const saldo = 1000;
//         meuBanco.saldo = 1000;
//         expect(meuBanco.consultaSaldo()).toEqual(saldo);
//       });

//       test("verificar saque", () => {
//         const saque = 900;
//         meuBanco.saldo = 1000;
//         expect(meuBanco.saque(100)).toEqual(saque);
//       });

//       test("verificar se tem saldo suficiente para saque", () => {
//         const saque = -100;
//         meuBanco.limite = 1000;
//         meuBanco.saldo = 1000;
//         expect(meuBanco.saque(1100)).toEqual(saque);
//       });

//       test("verificar deposito", () => {
//         const deposito = 1100;
//         meuBanco.saldo = 1000;
//         expect(meuBanco.deposito(100)).toEqual(deposito);
//       });

//     });