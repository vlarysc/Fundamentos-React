import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export function TabelaProdutos() {
  let ListaProdutos = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td> {produto.id} </td>
        <td> {produto.name} </td>
        <td> {produto.preco} </td>

      </tr>
    )
  })
  return (
    <div>
      <table border="3" className="tabela">
        <tr>
          <th>ID</th>
          <th>PRODUTO</th>
          <th>PREÇO</th>
        </tr>
        {ListaProdutos}
      </table>
    </div>
  )
}