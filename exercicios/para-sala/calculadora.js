//Crie uma classe chamada Calculadora;
//Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
//Use a criatividade e crie um último método que utilize pelo menos dois dos métodos criados anteriormente.

class Calculadora {
    
    static soma(num1, num2){
        return num1 + num2;
    };
        
    static subtracao(num1, num2){
        return num1 - num2;
    };
    
    static multiplicacao(num1, num2){
        return num1 * num2;
    };
    
    static divisao (num1, num2){
        return num1 / num2;
    };
};
    
module.exports = { 
    Calculadora
};