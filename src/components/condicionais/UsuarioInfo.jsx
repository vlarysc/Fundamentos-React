import { IfTrue } from './If'

export function UsuarioInfo(props) {
  const usuario = props.usuario || {}
  return (
    <div>
      <IfTrue validacao={usuario && usuario.nome}>
        Seja Bem vindo <strong> {usuario.nome} </strong>
      </IfTrue>
    </div>
  )
}