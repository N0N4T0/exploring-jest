const { render, screen } = require("@testing-library/react")

import Cabecalho from './index'

describe('component Cabecalho', () => {
  test('Deve renderizar o nome do usuário logado', () => {
    render(<Cabecalho/>)
  
    const nomeUsuario = screen.getByText('Joana Fonseca Gomes')
    expect(nomeUsuario).toBeInTheDocument()
  })
})