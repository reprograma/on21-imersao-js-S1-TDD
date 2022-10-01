class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    soma() {
        return this.num1+this.num2
    }

    subtracao() {
        return this.num1-this.num2
    }

    multiplicacao() {
        return this.num1*this.num2
    }

    divisao() {
        return this.num1/this.num2
    }

    fatorial() {
        let resultado = this.num1;
        for(let i = 1; i < this.num1; i++) {
            resultado *= this.num1 - i
        }
        return resultado
    }

    fatorialSoma() {
        const resultadoSoma = this.soma();
        
        const fatorial = () => {
            let resultado = resultadoSoma;

            for(let i = 1; i < resultadoSoma; i++) {
                resultado *= resultadoSoma - i
            }
            return resultado
        }
        return fatorial()
    }
}

module.exports = Calculadora;