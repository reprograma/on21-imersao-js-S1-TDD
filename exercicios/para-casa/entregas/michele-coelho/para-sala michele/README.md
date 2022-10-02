# Exercícios de Sala 🏫  
---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício dentro da pasta resolução.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
---
## Testes Unitários
##### 1) Escreva um teste para função abaixo:

```js
function convertCelsiusToFahrenheit(temperature){
    var tempConverte = temperature * 9 / 5 + 32;
     
    return tempConverted
}
```
##### 2) Escreva ao menos um teste para a função abaixo:

```js
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
```

##### 3) Escreva ao menos um teste para a função abaixo:

```js
function jokenpo(jogada1, jogada2){

    if (jogada1 === jogada2){
        return 'Empate!';
    }

    if ((jogada1 === 'pedra' && jogada2 === 'papel')
        || (jogada1 === 'papel' && jogada2 === 'tesoura')
        || (jogada1 === 'tesoura' && jogada2 === 'pedra')) {
      return 'Jogador 2 venceu!';
   }

   return 'Jogador 1 venceu!';
}
```

##### 4) Escreva um para a função abaixo, ela retorna as possíveis combinações de caracteres de uma string em um array.

```js
function generateCombinations(word)
{
    const chars = [];
    for (let x = 0, y = 1; x < word.length; x++, y++) 
    {
        chars[x] = word.substring(x, y);
    }
    const combinations = [];
    let temp = "";
    const combinationsLen = Math.pow(2, chars.length);

    for (let i = 0; i < combinationsLen; i++)
    {
        temp = "";
        for (let j = 0; j < chars.length; j++) {
            if ((i & Math.pow(2,j))){ 
                temp += chars[j];
            }
        }
        if (temp !== "")
        {
            combinations.push(temp);
        }
    }
    
    return combinations;
}
```

##### 5) Escreva um teste para as funções abaixo:

```js
function allKeys(obj) {
    if (!isObject(obj)) {
        return [];
    }
    
    const keys = [];
    for (const key in obj){
        keys.push(key);
    } 
    return keys;
}
function isObject(obj) {
    const type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
```
---
## TDD

##### 6) Considere o teste abaixo e escreva a função para que o teste passe.

```js
// A função soma dois números, caso os números sejam iguais, a soma é triplicada

describe("Sum function", () => {
    test("(5, 1) => 6)", () => {
        expect(sum(5, 1)).toEqual(6);
    });

    test("(1, 1) => 6)", () => {
        expect(sum(1, 1)).toEqual(6);
    });
});
```

##### 7) Considere o teste abaixo e escreva a função para que o teste passe.

```js
describe("RevertString function", () => {
    test("'casa' => 'asac'", () => {
        expect(revert('casa')).toEqual('asac');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
});
```

##### 8) Usando TDD:
- Crie uma classe chamada Calculadora;
- Crie os métodos: soma, subtração, multiplicação, divisão e fatorial;
- Use a criatividade e crie um último método que utilize pelo menos dois dos métodos criados anteriormente.

##### 9) Escreva um teste (e depois a função) para uma função calcule como um troco (centavos) será dado em moedas. A função deve receber o valor do troco, e um array com as moedas disponíveis.