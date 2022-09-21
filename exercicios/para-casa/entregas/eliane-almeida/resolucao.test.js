const  { ContaBancaria } = require("./resolucao");

describe("Testar conta bancaria", () => {
    
    describe("Testar a existencia dos paramentros na conta bancaria", () => {
        it ("Testar se a conta bancaria possui um titular", () => {
            const minhaContaBancaria =  new ContaBancaria()
            minhaContaBancaria.nomeTitular = "Juliana Andrade"
            const result = minhaContaBancaria.nomeTitular
            expect(result).toEqual("Juliana Andrade");
        });

        it ("Testar se a conta bancaria não possui um titular", () => {
            const minhaContaBancaria =  new ContaBancaria()
            const result = minhaContaBancaria.nomeTitular
            expect(result).toEqual(undefined);
        });

        it ("Testar se a conta bancaria possui um saldo", () => {
            const minhaContaBancaria =  new ContaBancaria()
            minhaContaBancaria.saldo = 100.00
            const result = minhaContaBancaria.saldo
            expect(result).toEqual(100.00);
        });

        it ("Testar se a conta bancaria não possui um saldo", () => {
            const minhaContaBancaria =  new ContaBancaria()
            minhaContaBancaria.saldo 
            const result = minhaContaBancaria.saldo
            expect(result).toEqual(undefined);
        });

        it ("Testar se a conta bancaria possui um limite", () => {
            const minhaContaBancaria =  new ContaBancaria()
            minhaContaBancaria.limite = 1000.00
            const result = minhaContaBancaria.limite
            expect(result).toEqual(1000.00);
        });

        it ("Testar se a conta bancaria não possui um limite", () => {
            const minhaContaBancaria =  new ContaBancaria()
            minhaContaBancaria.limite 
            const result = minhaContaBancaria.limite
            expect(result).toEqual(undefined);
        });
    });

    describe("Testar a função consulta de saldo", () => {
        it("Verificar o retorno do saldo", () => {
            const minhaContaBancaria = new ContaBancaria()
            minhaContaBancaria.saldo = 100
            const result = minhaContaBancaria.consultarSaldo(minhaContaBancaria)
            expect(result).toEqual(100);
        });
    });

    describe("Testar a função saque", () => {
        it("Verificar se o saldo é insuficiente para saque", () => {
            const minhaContaBancaria = new ContaBancaria()
            minhaContaBancaria.saldo = 100
            minhaContaBancaria.limite = 1000
            const result = minhaContaBancaria.saque(1650)
            expect(result).toEqual("Saldo e limite insuficiente");
        });

        it("Verificar se o limete é suficiente para saque caso o saldo seja menor que o valor a ser sacado", () => {
            const minhaContaBancaria = new ContaBancaria()
            minhaContaBancaria.saldo = 100
            minhaContaBancaria.limite = 1000
            minhaContaBancaria.saldo = minhaContaBancaria.saque(150)
            const result = minhaContaBancaria.saldo 
            expect(result).toEqual(-50);
        });

        it("Verificar se o valor do limete é atualiozado", () => {
            const minhaContaBancaria = new ContaBancaria()
            minhaContaBancaria.saldo = 100
            minhaContaBancaria.limite = 1000
            minhaContaBancaria.saldo = minhaContaBancaria.saque(150)
            const result = minhaContaBancaria.limite
            expect(result).toEqual(950);
        });

        it("Verificar se a função realiza a movimentação de saque da conta", () => {
            const minhaContaBancaria = new ContaBancaria()
            minhaContaBancaria.saldo = 200
            const result = minhaContaBancaria.saque(150)
            expect(result).toEqual(50);
        });
    });

    describe("Testar a função deposito", () => {
        it("Verificar se é feito o deposito", () => {
            const minhaContaBancaria = new ContaBancaria()
            minhaContaBancaria.saldo = minhaContaBancaria.deposito()
            const result = minhaContaBancaria.deposito(100)
            expect(result).toEqual(100);
        });

        it("Verificar se o limete é atualizado após fazer um deposito com o saldo negativo", () => {
            const minhaContaBancaria = new ContaBancaria()
            minhaContaBancaria.saldo = -50
            minhaContaBancaria.limite = 950
            minhaContaBancaria.deposito(25)
            const result = minhaContaBancaria.limite
            expect(result).toEqual(975);
        });

        it("Verificar se o saldo é atualizado após fazer um deposito de um valor menor que o saldo devedor", () => {
            const minhaContaBancaria = new ContaBancaria()
            minhaContaBancaria.saldo = -50
            minhaContaBancaria.limite = 950
            minhaContaBancaria.deposito(25)
            const result = minhaContaBancaria.saldo
            expect(result).toEqual(-25);
        });

        it("Verificar se a função realiza a movimentação de deposito na conta já com saldo", () => {
            const minhaContaBancaria = new ContaBancaria()
            minhaContaBancaria.saldo = 100
            const result = minhaContaBancaria.deposito(100)
            expect(result).toEqual(200);
        });
    });
});