const { consultaSaldo , saque, resjustaLimite, deposito} = require("./resolucao");

describe("transações bancárias de consulta de saldo, saque e aumento de limite", ()=>{ 
    test("Consultar saldo de conta", ()=>{
        expect (consultaSaldo(1)).toEqual(2000);
    })
    test("verificar resultado na hipótese do valor do saque ser inferior ao saldo em conta", ()=>{
        expect (saque(1, 500)).toEqual("Saque no valor de 500 efetuado. Seu nono saldo é de 1500");
    })
    test("verificar resultado na hipótese do valor do saque ser inferior ao saldo em conta somado ao limite da conta", ()=>{
        expect (saque(1, 2200)).toEqual("Saque no valor de 2200 efetuado. Seu nono saldo é de -200");
    })
    test("verificar resultado na hipótese do valor do saque ser superior ao saldo em conta somado ao limite da conta", ()=>{
        expect (saque(1, 2600)).toEqual("Saldo insuficiente. Saque não realizado");
    })
    test("verificar resultado na hipótese do  novo limite desejado ser inferior ou igual ao pré aprovado", ()=>{
        expect (resjustaLimite(1, 600)).toEqual("Seu novo limite é de  600");
    })
    test("verificar resultado na hipótese do  novo limite desejado ser superior ao pré aprovado", ()=>{
        expect (resjustaLimite(1, 700)).toEqual("Limite desejado é superior ao pré aprovado. Consulte seu gerente");
    })
    test("verificar novo saldo após depósito", ()=>{
        expect (deposito(1, 800)).toEqual("Seu novo saldo é 2800");
    })
});
