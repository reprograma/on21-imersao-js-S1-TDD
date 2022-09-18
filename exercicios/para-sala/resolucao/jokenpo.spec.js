const jokenpo = require('../resolucao/jokenpo')

describe('jokenpo', () => {

    it('Deve verificar qual jogador venceu no jokenpo', () => {
        const jogoJokenpo = jokenpo('pedra', 'papel')
        expect(jogoJokenpo).toBe('Jogador 2 venceu!')
    })

    it('Deve verificar qual jogador venceu no jokenpo', () => {
        const jogoJokenpo = jokenpo('papel', 'tesoura')
        expect(jogoJokenpo).toBe('Jogador 2 venceu!')
    })

    it('Deve verificar qual jogador venceu no jokenpo', () => {
        const jogoJokenpo = jokenpo('tesoura', 'pedra')
        expect(jogoJokenpo).toBe('Jogador 2 venceu!')
    })

    it('Deve verificar qual jogador venceu no jokenpo', () => {
        const jogoJokenpo = jokenpo('tesoura', 'tesoura')
        expect(jogoJokenpo).toBe('Empate!')
    })
})