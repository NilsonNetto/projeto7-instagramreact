
export default function Sidebarperfil(props) {
  return (
    <div class="perfil">
      <a href="#"><img src={props.img} /></a>
      <div class="account">
        <a href="#">{props.username}</a>
        <p>{props.name}</p>
      </div>
    </div >
  )
}