export function ParOuImpar(props) {
  return (
    <div>
      {props.numero % 2 === 0 ? <p>Par</p> : <p>Ímpar</p>}
    </div>
  )
}