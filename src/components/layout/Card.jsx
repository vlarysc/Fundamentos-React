import './Card.css'

export function Card(props) {

  let style = {
    backgroundColor: props.color,
  }
  return (
    <div className="card">
      <div className="title" style={style}>
        <h2>{props.title}</h2>
      </div>
      <div className="content">
        <h3> {props.children} </h3>
      </div>
    </div>
  )
}