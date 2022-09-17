const convertCelsiusToFahreinheit = require('../index')

describe("Funcao de conversao", () => {
    test("deve converter celsius para fahreinheit", () => {
      expect (convertCelsiusToFahreinheit(0)).toEqual(32)

  })
})