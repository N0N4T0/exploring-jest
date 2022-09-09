import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { Rodape } from "./Rodape"

describe('onde não existe participantes suficientes', () => {
  test('a brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    )

    const botao = screen.getByRole('button')

    expect(botao).toBeDisabled()
  })
})