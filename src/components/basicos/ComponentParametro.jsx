export function ComponentParametro(props) {
  let status = props.media >= 7 ? 'Foi aprovado!' : 'Foi reprovado!'
  return (
    <div>
      <h1>O aluno {props.name} <br /> {status}</h1>
      <h5>Sua média final foi {props.media}</h5>
    </div>
  )
}