function checarTroco(valorTroco, moedas){
    if(valorTroco === 0){
        return [];
    }else{
        let valor = valorTroco*100;
        let quantMoeda = [];
        for (let i = 0; i <= moedas.length; i++){
            if (valorTroco >= moedas[i]){
                quantMoeda.push(valor/moedas[i]);
                valor = valor % moedas[i];
                if (valor == 0){
                    i = moedas.length + 1;
                }
            }
        }
        return quantMoeda;
    }
}

const moedas = [0.50, 0.25, 0.10];
console.log(checarTroco(2.60, moedas));