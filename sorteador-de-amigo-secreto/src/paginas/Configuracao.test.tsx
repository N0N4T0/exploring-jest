import { render } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { Configuracao } from './Configuracao'

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao
  }
})

describe('a pagina de configuracao', () => {
  test('deve ser renderizada corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    )

    //teste de snapshot: a primeira vez que rodamos a foto é tirada
    // nas demais vezes a foto é comparada.
    expect(container).toMatchSnapshot()

    // Press w para exibir opcoes no test.
    // Press u to update failing snapshots.
  })
})