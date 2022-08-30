//react testing library nao quer testar implementação ele quer testar comportamento

import { useSetRecoilState } from "recoil"
import { listaParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState)
  return (nomeDoParticipante: string) => {
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
  }
}