import { render, screen } from "@testing-library/react";
import React from "react";
import { Formulario } from "./Formulario";

describe('Testing component Formulario', () => {
  test('quando o input estiver vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario />)

    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

    // getByRole = encontrar pela responsabilidade
    const botao = screen.getByRole('button')

    expect(input).toBeInTheDocument()

    expect(botao).toBeDisabled()
  })
})