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




