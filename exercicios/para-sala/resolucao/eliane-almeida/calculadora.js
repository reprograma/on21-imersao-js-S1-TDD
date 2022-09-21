
class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2
    }

    soma() {
        return this.num1 + this.num2
    }

    subtracao() {
        return this.num1 - this.num2
    }

    multiplicacao() {
        return this.num1 * this.num2
    }

    divisao() {
        return this.num1 / this.num2
    }

    fatoracao() {
        let fat = this.num1;
        for(let i = 0; i < this.num1; i++){
            fat = fat * (this.num1--)
        }
        return fat
    }

    expressaoNumerica() {
        const expressao = this.multiplicacao() + this.soma()
        return expressao
    }
}

module.exports = {
    Calculadora
};