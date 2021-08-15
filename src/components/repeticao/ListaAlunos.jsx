import alunos from '../../data/alunos'

export function ListaAlunos() {

  const listaAlunos = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}°) {aluno.name} --> {aluno.nota}
      </li>
    )
  })

  return (
    <div>
      <ul>
        {listaAlunos}
      </ul>
    </div>
  )
}