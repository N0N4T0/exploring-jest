const { render, screen } = require("@testing-library/react")

import Extrato from './index'


describe('component Extrato', () => {
  test('Deve renderizar uma lista de transações', () => {
    const transacoes = [
      {
        transacao: 'Depósito',
        valor: 100,
      }
    ]

    render(<Extrato transacoes={transacoes}/>)

    const lista = screen.getByRole('listitem')
    expect(lista).toBeInTheDocument()
  })
 
})