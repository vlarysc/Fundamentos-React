import { useState } from 'react'

export function Contador() {
  const [valor, setValor] = useState(0)

  function aumentar() {
    setValor(valor + 1)
  }
  function diminuir() {
    setValor(valor - 1)
  }
  return (
    <div>
      <span className="d-flex justify-content-center">{valor}</span>
      <div className="d-flex justify-content-center">
        <button className="m-1" onClick={aumentar} >+</button>
        <button className="m-1" onClick={diminuir}>-</button>
      </div>
    </div >
  )
}