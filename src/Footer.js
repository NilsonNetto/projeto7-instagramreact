
const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]

export default function Footer() {
  return (
    <div class="footer-mobile">
      {icons.map(icon => <a href="#"><ion-icon name={icon}></ion-icon></a>)}

    </div>
  )
}