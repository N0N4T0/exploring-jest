import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hook"
import { useSorteador } from "../state/hook/useSorteador"

export function Rodape() {
  const participantes = useListaDeParticipantes()

  const navegarPara = useNavigate()

  const sortear = useSorteador()

  const iniciar = () => {
    sortear()
    navegarPara('/sorteio')
  }

  return (
    <footer>
      <button disabled={participantes.length < 3} onClick={iniciar}>Iniciar bricadeira</button>
    </footer>
  )
}