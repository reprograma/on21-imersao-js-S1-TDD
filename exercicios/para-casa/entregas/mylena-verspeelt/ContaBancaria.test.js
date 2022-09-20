describe("Testes da Conta Bancária", () => {
  test("Consultar saldo", () => {
    const contaTeste = {
      nome_do_titular: "Maria",
      id: 1,
      saldo: 100,
      limite_disponivel: 500,
    };
    expect(consultarSaldo(contaTeste.saldo)).toEqual(100);
  });

  describe("Saque", () => {
    test("Saque com saldo suficiente", () => {
      const contaTeste = {
        nome_do_titular: "Maria",
        id: 1,
        saldo: 100,
        limite_disponivel: 50,
      };

      expect(saque(70)).toEqual(30);                //ele vai retornar o valor do saldo que restou
    });

    test("Saque com limite disponível", () => {
      const contaTeste = {
        nome_do_titular: "Maria",
        id: 1,
        saldo: 0,
        limite_disponivel: 50,
      };

      expect(saque(40)).toEqual(40);
      expect(consultarSaldo(contaTeste.saldo)).toEqual(-40);
      expect(consultarLimiteDisponivel(contaTeste.limite_disponivel)).toEqual(
        10
      );
    });
  });

  describe("Depósito", () => {
    const contaTeste = {
      nome_do_titular: "Maria",
      id: 1,
      saldo: 10,
      limite_disponivel: 50,
    };
    expect(depositar(30)).toEqual(40);    //ele vai retornar o valor do saldo atualizado
});

describe("Ajudar limite da conta", () => {
  test("Ajustar limite pra mais", () => {

    const contaTeste = {
        nome_do_titular: "Maria",
        id: 1,
        saldo: 10,
        limite_disponivel: 50,
      };


    expect(aumentarLimite(100)).toEqual(150)                    //retorna o valor final do limite disponivel
  });

  test("Ajustar limite pra menos", () => {
    const contaTeste = {
        nome_do_titular: "Maria",
        id: 1,
        saldo: 10,
        limite_disponivel: 500,
      };


    expect(diminuirLimite(100)).toEqual(400)                    //retorna o valor final do limite disponivel
  });

  test("Desativar opção de limite disponivel", () => {

    const contaTeste = {
        nome_do_titular: "Maria",
        id: 1,
        saldo: 10,
        limite_disponivel: true,
      };


    expect(desativarLimite(true)).toBe(false)                    //retorna o valor final do limite disponivel
  });
}))