const convertCelsiusToFahrenheit = require('./convertCelsiusToFahrenheit')


describe('convertCelsiusToFahrenheit', () => {

    it('Deve receber uma temperatura em Celsius e converter em Fahrenheit', () => {

        const converteCelsiusToFahrenheit = convertCelsiusToFahrenheit(40)
        expect(converteCelsiusToFahrenheit).toEqual(104)
    })
})


