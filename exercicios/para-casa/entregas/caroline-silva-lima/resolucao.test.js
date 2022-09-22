const { consultaSaldo , saque  } = require("./resolucao");


describe("transações bancárias de consulta de saldo e saque", ()=>{ 
    test("Consultar saldo de conta", ()=>{
        expect(consultaSaldo(1)).toBe(true)

    })
});
/* const totalDeHorasPorProjeto = 128;
      const valorHora = 12;
      funcionalidades = ['setup', 'formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria', 'construcao_1_pagina', 'formulario'];
      calcularHorasDeProjeto.mockReturnValueOnce(128);
      calcularPacote.mockReturnValueOnce('pacote_intermediario');
      const resultadoEsperado = 2304;
      
      expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(resultadoEsperado)
  })*/
