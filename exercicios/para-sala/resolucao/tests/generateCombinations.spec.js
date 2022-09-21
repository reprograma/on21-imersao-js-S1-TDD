const generateCombinations = require('../../resolucao/generateCombinations')

describe('generateCombinations', () => {

    it('Deve ', () => {
        const combination = generateCombinations('amor')
        expect(combination).toStrictEqual(["a", "m", "am", "o", "ao", "mo", "amo", "r", "ar", "mr","amr","or", "aor","mor","amor"])
    })
})