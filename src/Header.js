
export default function Header() {
  return (
    <div class="header">
      <div class="cabecalho-desktop">
        <div class="logos">
          <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
          <div class="linha-vertical"></div>
          <a href="#"><img src="images/logo.png" /></a>
        </div>
        <input class="pesquisar" placeholder="Pesquisar" />
        <div class="menu">
          <a href="#"><ion-icon name="paper-plane-outline"></ion-icon> </a>
          <a href="#"><ion-icon name="compass-outline"></ion-icon> </a>
          <a href="#"><ion-icon name="heart-outline"></ion-icon> </a>
          <a href="#"><ion-icon name="person-outline"></ion-icon> </a>
        </div>
      </div>
      <div class="cabecalho-mobile">
        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="#"><img src="images/logo.png" /></a>
        <a href="#"><ion-icon name="paper-plane-outline"></ion-icon></a>
      </div>
    </div>

  )
}