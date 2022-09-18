class Calculadora {
    contructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    soma(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return "Insira apenas números";
        }
        return num1 + num2;
    }

    subtracao(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return "Insira apenas números";
        }
        return num1 - num2;
    }

    multiplicacao(num1, num2) {
        return num1 * num2;
    }

    divisao(num1, num2) {
        return num1 / num2;
    }

    fatorial(num) {
        if (!isNaN(num) && num == 1) {
            return 1;
        }

        return num * this.fatorial(num - 1);
    }

    porcentagem(porcentagem, numero) {
        return this.multiplicacao(this.divisao(10, 100), numero);
    }

}

module.exports = { Calculadora };