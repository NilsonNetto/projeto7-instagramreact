
export default function Suggestion(props) {
  return (
    <div className="sugestao">
      <div className="sugestao-contas">
        <a href="#"><img src={props.img} /></a>
        <div>
          <a href="#">{props.name}</a>
          <p>{props.follow === true ? 'Segue você' : 'Novo no Instagram'}</p>
        </div>
      </div>
      <a className="seguir" href="#">Seguir</a>
    </div>
  )
}