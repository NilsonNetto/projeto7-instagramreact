import Postsbox from "./Postsbox"
import Storiesbox from "./Storiesbox"
import Sidebar from "./Sidebar"

export default function Container() {
  return (
    <div class="container">
      <div class="feed">
        <Storiesbox />

        <Postsbox />

      </div>

      <Sidebar />

    </div>
  )
}