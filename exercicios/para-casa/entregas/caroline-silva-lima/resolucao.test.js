const { consultaSaldo , saque  } = require("./resolucao");

describe("transações bancárias de consulta de saldo e saque", ()=>{ 
    test("Consultar saldo de conta", ()=>{
        expect (consultaSaldo(1)).toEqual(2000);
    })
});

