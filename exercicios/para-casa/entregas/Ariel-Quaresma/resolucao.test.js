
const { ContaBanco } = require('./resolucao.js')


//---TESTES DO CONSTRUTOR---
//Se todos os atributos estão sendo setados corretamente e retornados pelos seus getters, e se estão aceitando valores vazios ou inválidos
//Balanco, limite e nome do dono da conta


describe("test if the inputs in the constructor of the class works, with name, balance and limit", () =>{
    //Testes a respeito do atributo nome
    describe("test if the validation of the name attribute works", () =>{

        //1. Testar se o nome está sendo recuperado pelo método getName corretamente
        test("test if the account owner's name get in the correctly attribute", () =>{
            let newUser = new ContaBanco("Ariel", 450, 500);
            expect(newUser.getName()).toBe("Ariel");
        })

        //2.Testar se do o atributo está aceitando receber string vazia como nome (esperado que não aceite)
        test("test if the acount owner's name get empty characters", () =>{
            let newUser = new ContaBanco("   ", 450,500);
            expect(newUser.getName()).toBe(undefined);
        })
    })
    //Testes para o atributo saldo - balance
    describe("test if the balance attribute works", () =>{
    
        //1. Testar se o atributo está sendo recuperado pelo método getBalance corretamente depois de setado no construtor
        test("test if the balance attribute is getting the correctly attribute", () =>{
            let newUser = new ContaBanco("Ariel", 450, 500);
            expect(newUser.getBalance()).toEqual(450);
        })
        //2. Testar se o atributo está aceitando receber strings como parâmetro (esperado que não aceite)
        test("test if the balance attribute get strings as value", () =>{
            let newUser = new ContaBanco("Ariel", "Ariel", 500);
            expect(newUser.getBalance()).toBe(undefined);
        })
    })

    //Testes do atributo limite
    describe("test if the limit attribute works", () => {
    
        //1. Testar se o atributo limite está sendo recuperado pelo método getLimit corretamente depois de ser setado no construtor
        test("test if the limit attribute get the correctly attribute", () =>{
            let newUser = new ContaBanco("Ariel", 450, 500);
            expect(newUser.getLimit()).toBe(500);
        })

        //2. Testar se o atributo está aceitando strings como valor (esperado que não aceite)
        test("test if the limit attribute get strings as value", () =>{
            let newUser = new ContaBanco("Ariel", 450, "banana");
            expect(newUser.getLimit()).toBe(undefined);
        })
    })  
})

//---TESTES SOBRE O MÉTODO SACAR---
describe("test if the cashout method works fine", () => {

    //1. Testar se o método sacar está subtraindo o valor da conta do usuário
    test("if the cashout method is subtracting the user's account amount", () => {
        let newUser = new ContaBanco("Ariel", 450, 500);
        newUser.cashout(100);
        expect(newUser.getBalance()).toBe(350);
    })

    //2. Testar se o retorno do método sacar está correto quando o saque é possível
    test("if the return of cashout method is correct when cashout is possible", () => {
        let newUser = new ContaBanco("Ariel", 450, 500);
        expect(newUser.cashout(100)).toBe("Saque realizado com sucesso!");
    })

    //.3 Testar se o retorno do método sacar está correto quando o saque não é possível
    test("if the return of cashout method is correct when cashout is not possible", () => {
        let newUser = new ContaBanco("Ariel", 450, 500);
        expect(newUser.cashout(500)).toBe("Saque realizado com utilização de limite");
    })
})

//---TESTES DO ATRIBUTO LIMITE E SEUS MÉTODOS---
describe("tests about the limit attribute and your methods", () => {

    //1. Testar se o método desabilitar limite está funcionando e desativando o limite
    test("test if disablelimit method is working and disabling the limit attribute", () => {
        let newUser = new ContaBanco("Ariel", 450, 500);
        newUser.disableLimit();
        expect(newUser.getLimit()).toBe("Limite desativado!");
    })

    //2. Testar se o método ativar limite está funcionando e retornando o limite antigo da conta (antes de ser desabilitado)
    test("test if the activate method is working and enabling limit it returns to the old value", () => {
        let newUser = new ContaBanco("Ariel", 450, 500);
        newUser.disableLimit();
        newUser.activateLimit();
        expect(newUser.getLimit()).toBe(500);
    })

    //3. Testar se o limite é consumido em operações que está ativo e o saldo não é suficiente para realizar o saque
    test("test if the limit is consumed in operations that balance is not enough but limit is", () => {
        let newUser = new ContaBanco("Ariel", 450, 500);
        newUser.cashout(700);
        expect(newUser.getBalance()).toBe(-250);
    })

    //4. Testar se a operação de saque é realizada quando o saldo e o limite são insuficientes - espero que não
    test("test if the cashout operation is stopped when balance and limits are insufficient - hope not", () => {
        let newUser = new ContaBanco("Ariel", 450, 500);
        expect(newUser.cashout(4000)).toBe("Saldo e/ou limite insuficiente para essa operação.");

    })

    //5. Testar se a operação de saque com uso de limite é realizada com o limite desativado
    test("test if with the limit disabled it is possible to make a cashout using limit - hope not", () => {
        let newUser = new ContaBanco("Ariel", 450, 500);
        newUser.disableLimit();
        expect(newUser.cashout(700)).toBe("Saldo e/ou limite insuficiente para essa operação.");
    })
})

//---TESTE SOBRE O MÉTODO DEPÓSITO---
describe("tests about the deposit method", () => {

    //1. testar se o método depósito está adicionando o valor depositado ao saldo atual
    test("if the deposit method is adding the amount to the actual balance", () => {
        let newUser = new ContaBanco("Ariel", 450, 500);
        newUser.deposit(100);
        expect(newUser.getBalance()).toBe(550);
    })
})