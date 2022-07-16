import Postsbox from "./Postsbox"
import Storiesbox from "./Storiesbox"
import Sidebar from "./Sidebar"

export default function Container() {
  return (
    <div className="container">
      <div className="feed">
        <Storiesbox />

        <Postsbox />

      </div>

      <Sidebar />

    </div>
  )
}