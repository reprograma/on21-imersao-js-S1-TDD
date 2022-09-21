class Calculator {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    getSoma() {
        return this.number1 + this.number2;
    }
    getSubtracao() {
        return this.number1 - this.number2;
    }
    getMultiplicacao() {
        return this.number1 * this.number2;
    }

    getDivisao() {
        return this.number1 / this.number2;
    }
}

class Fatorial extends Calculator {
    constructor(number1) {
        super(number1);
    }

    getFatorial() {
        let fatorial = 1;
        for (let i = 1; i <= this.number1; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

const calculator = new Calculator(1, 2);
const fatorial = new Fatorial(6);

console.log(fatorial.getFatorial());

console.log(calculator.getSubtracao());

module.exports = { Calculator, Fatorial };