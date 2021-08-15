import { useState } from 'react'

export function Input() {
  const [valor, setValor] = useState('oi')

  function listenValue(e) {
    setValor(e.target.value)
  }
  return (
    <div className="d-flex justify-content-center">
      <input type="text" value={valor} onChange={listenValue} />
    </div>
  )
}