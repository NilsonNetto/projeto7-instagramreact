import Stories from "./Stories"

const stories = [
  { name: "9gag", img: "images/9gag.png" },
  { name: "meowed", img: "images/meowed.png" },
  { name: "barked", img: "images/barked.png" },
  { name: "nathanwpylestrangeplanet", img: "images/nathanwpylestrangeplanet.png" },
  { name: "wawawiwacomics", img: "images/wawawiwacomicsa.png" },
  { name: "respondeai", img: "images/respondeai.png" },
  { name: "filomoderna", img: "images/filomoderna.png" },
  { name: "memeriagourmet", img: "images/memeriagourmet.png" }
]


export default function Storiesbox() {
  return (
    <div class="caixa-stories">

      {stories.map(st => (
        <Stories name={st.name} img={st.img} />
      ))
      }

      <div class="stories-arrow">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}