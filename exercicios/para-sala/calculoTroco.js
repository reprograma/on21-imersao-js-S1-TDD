function calculaTrocoCentavosEmMoedas(troco, moedas) {
    if(troco === 0) {
        return []
    } else { //[1, 5, 10, 25, 50]
        const quantMinMoedas = [] //[100, 20, 10, 4, 2]
        for(let i = 0; i <= moedas.length-1; i++) {
            quantidadeMoedas = troco/moedas[i]
            quantMinMoedas.push(quantidadeMoedas)
        }

        const minMoedas = quantMinMoedas.reduce((preValor, valorAtual) => {
            return preValor < valorAtual ? preValor : valorAtual
        })

        const valorMoeda = troco/minMoedas

        return `O troco será de ${minMoedas} moedas de ${valorMoeda} centavos.`

    }
}

module.exports = calculaTrocoCentavosEmMoedas