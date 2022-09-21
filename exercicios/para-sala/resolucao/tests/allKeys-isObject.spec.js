const {allKeys, isObject} = require('../allKeys-isObject')


describe('allKeys', () => {

    it('Deve allKeys', () => {
        const keys = allKeys(['amor', 'paixao'])
        expect(keys).toStrictEqual(["0", "1"])
    })
})

describe('isObject', () => {

    it('Deve isObject', () => {
        const object = isObject(['amor', 'paixao'])
        expect(object).toBeTruthy()
    })
})