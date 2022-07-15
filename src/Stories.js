
export default function Stories(props) {
  return (
    <div class="stories">
      <a href="#">
        <img class="fundo-stories" src="images/stories_background.jpg" />
        <img class="imagem-stories" src={props.img} />
        <p>{props.name}</p>
      </a>
    </div>
  )
}