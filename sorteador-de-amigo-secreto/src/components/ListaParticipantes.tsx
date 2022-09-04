import { useListaDeParticipantes } from "../state/hook"

export function ListaParticipantes() {
  const participantes: string[] = useListaDeParticipantes()

  return (
    <ul>
      {participantes.map(participante => (
        <li key={participante}>
          {participante}
        </li>
      ))}

    </ul>
  )
}