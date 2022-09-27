import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

describe('Testing component Formulario', () => {
  test('quando o input estiver vazio, novos participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

    // getByRole = encontrar pela responsabilidade
    const botao = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(botao).toBeDisabled()
  })

  test('adicionar um participante caso exista um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
    const botao = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })

    fireEvent.click(botao)

    expect(input).toHaveFocus()
    expect(input).toHaveValue("")
  })

  test("nomes duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
    const botao = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })

    fireEvent.click(botao)

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })

    fireEvent.click(botao)

    const mensagemDeErro = screen.getByRole('alert')
    expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
  })

  test("a mensagem de erro deve sumir após os timers", () => {
    jest.useFakeTimers()

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
    const botao = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })

    fireEvent.click(botao)

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })

    fireEvent.click(botao)

    // queryByRole = Returns null if no element is found within the provided. 
    // Isso previne que o test quebre já que está tudo bem em o elemento não existir
    // queryByRole aceita que pode ou não existir o elemento em tela
    let mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeInTheDocument()

    // dispara eventos de acordo com o update do estado (state)
    act(() => {
      //quando executamos todos os timers o formulário se renderizada de novo, por isso colocamos dentro de um act
      jest.runAllTimers()
    })

    mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeNull()
  })
})