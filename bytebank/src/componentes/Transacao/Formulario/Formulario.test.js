const { render, screen } = require("@testing-library/react")

import userEvent from '@testing-library/user-event'
import Formulario from './index'


describe('component Formulario', () => {
  test('Deve renderizar um campo de input', () => {
    render(<Formulario/>)

    const campoTexto = screen.getByPlaceholderText('Digite um valor')
    expect(campoTexto).toBeInTheDocument()
  })

  test('Deve renderizar um campo de input com o type number', () => {
    render(<Formulario/>)

    const campoTexto = screen.getByPlaceholderText('Digite um valor')
    expect(campoTexto).toHaveAttribute('type', 'number')
  })

  test('Deve renderizar um campo de input que pode ser preenchido', () => {
    render(<Formulario/>)

    const campoTexto = screen.getByPlaceholderText('Digite um valor')
    userEvent.type(campoTexto, '50')

    expect(campoTexto).toHaveValue(50)
  })

  test('Deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
    const realizarTransacao = jest.fn()
    
    render(<Formulario realizarTransacao={realizarTransacao}/>)

    const botao = screen.getByRole('button')
    userEvent.click(botao)
    expect(realizarTransacao).toHaveBeenCalledTimes(1)
  })
})