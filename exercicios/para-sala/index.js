function convertCelsiusToFahrenheit(temperature){
    var tempConverted = temperature * 9 / 5 + 32;
     
   return tempConverted
}


function checkEvenNumber(num){
    let result = '';

    if(isNaN(num)) {
        result = num + " não é um número";
    } else {
        if (num % 2 == 0) {
            result = num + " é um número par";
        } else {
            result = num + " é um número ímpar";
       }
    }

    return result;
}


function soma(num1 ,num2)
{
    if(num1==num2)
    {
        return 3*(num1+num2)
    }
    return num1+num2
}


function revert(string)
{
    return string.split("").reverse().join("")
}

function calculadora(num1 ,num2, string)
{
    if(string== '+')
    {
        return num1+num2
    }
    else{
        if(string== '-')
        {
        return num1-num2
        }
        else
        {
        if(string== '*')
        {
        return num1*num2
        }
        else
        {
            if (string== '/')
            {
            return num1/num2
            }
            else
            {
                return factorialize(num1)
            }
        }
    }
   
}
    //return num1+num2
}

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

module.exports = {convertCelsiusToFahrenheit,checkEvenNumber,soma,revert,calculadora};