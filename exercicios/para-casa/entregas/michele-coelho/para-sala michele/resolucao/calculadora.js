const calculadora = {
    somar(num1, num2) {
        return num1 + num2;
    },
    subtrair(num1, num2) {
        return num1 - num2;
    },
    dividir(num1, num2) {
        return num1 / num2;
    },
    multiplicar(num1, num2) {
        return num1 * num2;
    },
    fatorial(num) {
        let fatorial = 1;
        for (let i = 1; i <= num; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

module.exports = calculadora;