
export default function Header() {

  const desktopIcons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

  return (
    <div className="header">
      <div className="cabecalho-desktop">
        <div className="logos">
          <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
          <div className="linha-vertical"></div>
          <a href="#"><img src="images/logo.png" /></a>
        </div>
        <input className="pesquisar" placeholder="Pesquisar" />
        <div className="menu">
          {desktopIcons.map(icon => <a href="#"><ion-icon name={icon}></ion-icon> </a>)}
        </div>
      </div>
      <div className="cabecalho-mobile">
        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="#"><img src="images/logo.png" /></a>
        <a href="#"><ion-icon name="paper-plane-outline"></ion-icon></a>
      </div>
    </div>

  )
}

