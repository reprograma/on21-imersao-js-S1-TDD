const { convertCelsiusToFahrenheit, checkEvenNumber, revert, sum, jokenpo, generateCombinations, allKeys, isObject } = require("../index");

describe("Testes Exercicio em sala", () => {
    describe("Função de conversão", () => {
        it("Deve converter a temperatura de Celsius para fahrenheit", () => {
            expect(convertCelsiusToFahrenheit(60)).toEqual(140);

        })
    })

    describe("Função para verificar se é numero par ou impar", () => {
        it("Deve verificar se não é um numero", () => {
            const resultado = checkEvenNumber("Tomate")
            expect(resultado).toEqual("Tomate não é um número")
            //expect(resultado).toBeNaN()
        })
        it("Deve verificar se o número é par", () => {
            const resultado = checkEvenNumber(30)
            expect(resultado).toEqual("30 é um número par")
        })
        it("Deve verificar se o número é par", () => {
            const resultado = checkEvenNumber(35)
            expect(resultado).toEqual("35 é um número ímpar")
        })
    })

    // 6) A função soma dois números, caso os números sejam iguais, a soma é triplicada

    describe("Função soma", () => {
        test("Testar a soma entre dois números", () => {
            expect(sum(5, 1)).toEqual(6);
        });

        test("Testar a soma triplicada", () => {
            expect(sum(1, 1)).toEqual(6);
        });
    });

    // 7) Considere o teste abaixo e escreva a função para que o teste passe.
    describe("RevertString function", () => {
        test("'casa' => 'asac'", () => {
            expect(revert('casa')).toEqual('asac');
        });

        test("'javascript' => 'tpircsavaj'", () => {
            expect(revert('javascript')).toEqual('tpircsavaj');
        });
    });

    describe("Verificar qual jogador ganhou", () => {
        it("Verificar se deu empate a partida", () => {
            const result = jokenpo("pedra", "pedra")
            expect(result).toEqual("Empate!")
        })

        it("Verificar se o jogador 2 venceu", () => {
            const result = jokenpo("pedra", "papel")
            expect(result).toEqual("Jogador 2 venceu!")
        })

        it("Verificar se o jogador 1 venceu", () => {
            const result = jokenpo("papel", "tesoura")
            expect(result).toEqual("Jogador 2 venceu!")
        })

        it("Verificar se o jogador 1 venceu", () => {
            const result = jokenpo("tesoura", "pedra")
            expect(result).toEqual("Jogador 2 venceu!")
        })

        it("Verificar se deu empate", () => {
            const result = jokenpo("pedra", "tesoura")
            expect(result).toEqual("Jogador 1 venceu!")
        })
    })

    describe("Verificar a geração de combinações de palavras", () => {
        it("Verificar a geração das combinações para a palavra ola", () => {
            const result = generateCombinations("olá")
            expect(result).toEqual(["o", "l", "ol", "á", "oá", "lá", "olá"])
        })
    })

    describe("Verificar o retorno das chaves", () => {
        it("retornar os indices ", () => {
            const result = allKeys(["maçã", "uva", "pera"])
            expect(result).toEqual(["0", "1", "2"])
        })
    })

    describe("Verificar se é um objeto", () => {
        it("Verificar os objetos", () => {
            const result = isObject(["maçã", "uva", "pera"])
            expect(result).toEqual(true)
        })

        it("Verificar os objetos", () => {
            const result = isObject("maçã", "uva", "pera")
            expect(result).toEqual(false)
        })
    })
})



