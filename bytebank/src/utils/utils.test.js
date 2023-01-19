import {calculaNovoSaldo} from './index'

describe('function calculaNovoSaldo', () => {
  test('Quando depósito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50
    }

    const novoSaldo = calculaNovoSaldo(transacao, 100)

    expect(novoSaldo).toBe(150)
  })

  test('Quando transferência, o saldo deve diminuir', () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 50
    }

    const novoSaldo = calculaNovoSaldo(transacao, 100)

    expect(novoSaldo).toBe(50)
  })
})