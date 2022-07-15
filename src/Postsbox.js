import Posts from "./Posts"

export default function Postsbox() {
  return (
    <div class="caixa-posts">

      <Posts />

      <div class="post">
        <div class="post-header">
          <div>
            <a href="#"><img src="images/barked.png" /></a>
            <a href="#"><p class="autor">barked</p></a>
          </div>
          <div>
            <a href="#"><ion-icon name="ellipsis-horizontal"></ion-icon></a>
          </div>
        </div>
        <img src="images/dog.png" />
        <div class="post-footer">
          <div>
            <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
            <a href="#"><ion-icon name="chatbubble-outline"></ion-icon></a>
            <a href="#"><ion-icon name="paper-plane-outline"></ion-icon></a>
          </div>
          <div class="mark">
            <a href="#"><ion-icon name="bookmark-outline"></ion-icon></a>
          </div>
        </div>
        <div class="post-likes">
          <a href="#"><img src="images/respondeai.png" /></a>
          <p class="likes">
            Curtido por <a href="#">respondeai</a> e
            <a href="#"> outras 1.999 pessoas</a>
          </p>
        </div>
        <div class="comments-header">
          <a href="#">Clique para ver os outros 697 comentários</a>
        </div>
        <div class="comments">
          <p><a class="comment-author" href="#">9gag</a>Boop</p>
          <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
        </div>
        <div class="comments">
          <p><a class="comment-author" href="#">mae</a>Ai que fofinho</p>
          <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
        </div>
        <div class="comments">
          <p>
            <a class="comment-author" href="#">lerodcs</a>That dog is
            prettier than me too lol
          </p>
          <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
        </div>
        <div class="add-comment">
          <div>
            <a href="#"><ion-icon name="happy-outline"></ion-icon></a>
            <input
              class="comment-box"
              placeholder="Adicione um comentário..."
            />
          </div>
          <div><a class="publicar" href="#">Publicar</a></div>
        </div>
      </div>
      <div class="post">
        <div class="post-header">
          <div>
            <a href="#"><img src="images/9gag.png" /></a>
            <a href="#"><p class="autor">9gag</p></a>
          </div>
          <div>
            <a href="#"><ion-icon name="ellipsis-horizontal"></ion-icon></a>
          </div>
        </div>
        <video width="100%" height="100%" controls autoplay muted>
          <source src="images/rickrolled.mp4" type="video/mp4" />
          <source src="images/rickrolled.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div class="post-footer">
          <div>
            <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
            <a href="#"><ion-icon name="chatbubble-outline"></ion-icon></a>
            <a href="#"><ion-icon name="paper-plane-outline"></ion-icon></a>
          </div>
          <div class="mark">
            <a href="#"><ion-icon name="bookmark-outline"></ion-icon></a>
          </div>
        </div>
        <div class="post-likes">
          <a href="#"><img src="images/respondeai.png" /></a>
          <p class="likes">
            Curtido por <a href="#">respondeai</a> e
            <a href="#"> outras 69.696 pessoas</a>
          </p>
        </div>
        <div class="comments-header">
          <a href="#">Clique para ver os outros 999 comentários</a>
        </div>
        <div class="comments">
          <p><a class="comment-author" href="#">9gag</a>rickrolled guys</p>
          <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
        </div>
        <div class="comments">
          <p>
            <a class="comment-author" href="#">mae</a>Não entendi, traduz
            pra mim
            <a class="arroba" href="https://www.instagram.com/non.netto/"
            >non.netto</a
            >
          </p>
          <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
        </div>
        <div class="comments">
          <p>
            <a class="comment-author" href="#">lerodcs</a>Oh well that
            again...
          </p>
          <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
        </div>
        <div class="add-comment">
          <div>
            <a href="#"><ion-icon name="happy-outline"></ion-icon></a>
            <input
              class="comment-box"
              placeholder="Adicione um comentário..."
            />
          </div>
          <div><a class="publicar" href="#">Publicar</a></div>
        </div>
      </div>
    </div>
  )
}