import { useListaDeParticipantes } from "../state/hook"

export const Sorteio = () => {
  const participantes = useListaDeParticipantes()

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
    <section>
      <form>
        <select name="participanteDaVez" id="participanteDaVez">
          {renderAllParticipantes()}
        </select>
      </form>
    </section>
  )
}