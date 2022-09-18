import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hook"

export function Rodape() {
  const participantes = useListaDeParticipantes()

  const navegarPara = useNavigate()

  const iniciar = () => {
    navegarPara('/sorteio')
  }

  return (
    <footer>
      <button disabled={participantes.length < 3} onClick={iniciar}>Iniciar bricadeira</button>
    </footer>
  )
}