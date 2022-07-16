
export default function Sidebarperfil(props) {
  return (
    <div className="perfil">
      <a href="#"><img src={props.img} /></a>
      <div className="account">
        <a href="#">{props.username}</a>
        <p>{props.name}</p>
      </div>
    </div >
  )
}