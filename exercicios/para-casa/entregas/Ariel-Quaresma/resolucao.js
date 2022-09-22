class ContaBanco {
    constructor(name, balance, limit){
        this.name = this.setName(name);
        this.balance = this.setBalance(balance);
        this.limit = this.setLimit(limit);
        this.activeLimit = true;
    }

    getName(){
        return this.name;
    }

    setName(name){
        if (this.isEmpty(name) == true){
            this.name = name;
            return this.name;
        }
        return undefined;
    }

    getBalance(){
        return this.balance;
    }

    setBalance(balance){
        if (typeof balance != 'number'){
            return undefined;
        }
        this.balance = balance;
        return this.balance;
    }

    getLimit(){
        if (this.activeLimit == true){
            return this.limit;
        }
        return ("Limite desativado!")
    }

    setLimit(limit){
        if (typeof limit != 'number'){
            return undefined;
        }
        this.limit = limit;
        return this.limit;
    }

    //Checar se a string está vazia
    isEmpty(str){
        if (str.trim().length == 0){
            return false;
        }
        return true;
        
    }

    //Saque
    cashout(cashoutValue){
        if (this.getBalance() >= cashoutValue){
            this.setBalance(this.getBalance() - cashoutValue);
            return ("Saque realizado com sucesso!")
        }
        else if(this.activeLimit == true){
            let totalBalance = this.getBalance() + this.getLimit();
            if(totalBalance >= cashoutValue){
                this.setLimit(cashoutValue - this.getBalance());
                this.setBalance(this.getBalance() - cashoutValue);
                return ("Saque realizado com utilização de limite")
            }
        }
        return ("Saldo e/ou limite insuficiente para essa operação.")
    }
    //Depósito
    deposit(depositValue){
        this.setBalance(this.getBalance() + depositValue);
    }

    //Desativar limite
    disableLimit(){
        this.activeLimit = false;
    }

    //Ativar limite
    activateLimit(){
        if (this.activeLimit == false){
            this.activeLimit = true;
        }
    }
}

module.exports = {ContaBanco};