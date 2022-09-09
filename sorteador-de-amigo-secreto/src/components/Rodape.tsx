import { useListaDeParticipantes } from "../state/hook"

export function Rodape() {
  const participantes = useListaDeParticipantes()

  return (
    <footer>
      <button disabled={participantes.length < 3}>Iniciar bricadeira</button>
    </footer>
  )
}