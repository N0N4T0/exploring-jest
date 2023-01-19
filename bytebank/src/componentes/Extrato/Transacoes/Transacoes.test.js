const { render, screen } = require("@testing-library/react")

import Transacoes from './index'
import estilos from '../Extrato.module.css'


describe('component Transacoes', () => {
  test('Deve renderizar o mesmo componente com props atualizados', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 100,
    }
    
    const {rerender} = render(<Transacoes transacao={transacao} estilos={estilos}/>)

    const tipoTransacao = screen.getByTestId('tipoTransacao')
    const valorTransacao = screen.getByTestId('valorTransacao')

    expect(tipoTransacao).toHaveTextContent('Depósito')
    expect(valorTransacao).toHaveTextContent('R$ 100')

    const novaTransacao = {
      transacao: 'Transferência',
      valor: 50,
    }

    rerender(<Transacoes transacao={novaTransacao} estilos={estilos}/>)

    const novotipoTransacao = screen.getByTestId('tipoTransacao')
    const novoValorTransacao = screen.getByTestId('valorTransacao')

    expect(novotipoTransacao).toHaveTextContent('Transferência')
    expect(novoValorTransacao).toHaveTextContent('- R$ 50')
  })
})