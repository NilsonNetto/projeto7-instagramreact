import Sidebarperfil from "./Sidebarperfil"
import Suggestion from "./Suggestion"


const user = { name: 'Nilson Netto', username: 'non.netto', img: 'images/catanacomics.png' }

const Suggestions = [
  { name: 'bad.vibes.meme', img: 'images/badvibesmemes.png', follow: true },
  { name: 'chibirdart', img: 'images/chibirdart.png', follow: true },
  { name: 'razoesparaacreditar', img: 'images/razoesparaacreditar.png', follow: false },
  { name: 'adorable_animal', img: 'images/adorableanimals.png', follow: false },
  { name: 'smallcutecats', img: 'images/smallcutecats.png', follow: true },

]

export default function Sidebar() {
  return (
    <div class="sidebar-space">
      <div class="sidebar">


        <Sidebarperfil name={user.name} username={user.username} img={user.img} />

        <div class="sugestao-header">
          <p>Sugestões para você</p>
          <a href="#">Ver tudo</a>
        </div>

        {Suggestions.map(suggest =>
          <Suggestion name={suggest.name} img={suggest.img} follow={suggest.follow} />)}


        <div class="sidebar-footer">
          <a href="#">Sobre</a> • <a href="#">Ajuda</a> • <a href="#">Imprensa</a> •
          <a href="#">API</a> • <a href="#">Carreiras</a> •
          <a href="#">Privacidade</a> • <a href="#">Termos</a> •
          <a href="#">Localização</a> • <a href="#">Contas mais relevantes</a> •
          <a href="#">Hashtags</a> • <a href="#">Idioma</a>
        </div>
        <div class="sidebar-copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    </div>
  )
}