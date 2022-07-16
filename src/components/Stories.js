
export default function Stories(props) {
  return (
    <div className="stories">
      <a href="#">
        <img className="fundo-stories" src="images/stories_background.jpg" />
        <img className="imagem-stories" src={props.img} />
        <p>{props.name}</p>
      </a>
    </div>
  )
}