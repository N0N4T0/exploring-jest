import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useMensagemDeErro = () => {
  //encapsulando recoil pois não queremos que o componente conheça o recoil
  const mensagem = useRecoilValue(erroState)

  return mensagem
}