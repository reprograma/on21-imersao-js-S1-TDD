
class Calculadora{
    static soma = (num1, num2) => {
        return num1 + num2
    }

    static subtracao = (num1, num2) => {
        return num1 - num2
    }

    static divisao = (num1, num2) => {
        return num1 / num2
    }

    static multiplicacao = (num1, num2) => {
        return num1 * num2
    }

    static fatorial = (num) => {
        let resultado = 1
        for(let i=num; i>1; i--){
            resultado *= i
        }
        return resultado
    }

    static areaDoTriangulo = (base, altura) => {
        let Bh = this.multiplicacao(base, altura)
        let area = this.divisao(Bh,2)

        return area
    }
}

module.exports = {Calculadora};