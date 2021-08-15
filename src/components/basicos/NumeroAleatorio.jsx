export function NumeroAleatorio(props) {
  const { maximo, minimo } = props
  let numero = parseInt(Math.random() * (maximo - minimo)) + minimo;

  return (
    <div>
      <h1 >Desafio número aleatório</h1>

      <h3 >Valor mínimo {props.minimo} e valor máximo {props.maximo} </h3>

      <h3>Número: {numero} </h3>
    </div>
  )
}