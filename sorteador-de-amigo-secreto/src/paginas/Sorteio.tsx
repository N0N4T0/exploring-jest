import React from "react"
import Card from "../components/Card"
import { useListaDeParticipantes } from "../state/hook"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio"

import "./Sorteio.css"

export const Sorteio = () => {
  const participantes = useListaDeParticipantes()

  const [participanteDaVez, setParticipanteDaVez] = React.useState('')
  const [amigoSecreto, setAmigoSecreto] = React.useState('')

  const resultado = useResultadoSorteio()

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }

  function renderAllParticipantes() {
    return (
      participantes.map((participante) => {
        return (
          <option key={participante}>{participante}</option>
        )
      })
    )
  }

  return (
    <Card>
      <section className="sorteio">
        <form onSubmit={sortear}>
          <select
            required
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={evento => setParticipanteDaVez(evento.target.value)}
          >
            {renderAllParticipantes()}
          </select>
          <p> Clique em sortear para ver quem é seu amigo secreto!</p>
          <button>Sortear</button>
        </form>
        {amigoSecreto && <p role='alert'>{amigoSecreto}</p>}

        <footer className="sorteio">
          <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
        </footer>
      </section>
    </Card>

  )
}