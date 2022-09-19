class Calculadora {
    
    soma = (num1, num2) => num1+num2
    
    subtrai = (num1, num2) => num1-num2
    
    multiplica = (num1, num2) => num1*num2
   
    divide = (num1, num2) => num1/num2
    
    fatorial = (num1) => {
        if(num1 === 0) {
            return 1
        }
        return num1 * this.fatorial(num1 - 1)
    }
    
    
};
 module.exports = {
    Calculadora};