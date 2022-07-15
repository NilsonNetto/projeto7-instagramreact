


export default function Posts(props) {
  return (
    <div class="post">
      <div class="post-header">
        <div>
          <a href="#"><img src={props.authorImg} /></a>
          <a href="#"><p class="autor">{props.author}</p></a>
        </div>
        <div>
          <a href="#"><ion-icon name="ellipsis-horizontal"></ion-icon></a>
        </div>
      </div>
      <img src={props.postImg} />
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
        <a href="#"><img src={props.likeAuthorImg} /></a>
        <p class="likes">
          Curtido por <a href="#">{props.likeAuthor}</a> e
          <a href="#"> outras {props.likeAmount} pessoas</a>
        </p>
      </div>

      <div class="comments-header">
        <a href="#">Clique para ver os outros {props.commentsAmount} comentários</a>
      </div>
      <div class="comments">
        <p><a class="comment-author" href="#">9gag</a>OMG so cute</p>
        <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
      </div>
      <div class="comments">
        <p>
          <a class="comment-author" href="#">mae</a>O que que o gato ta
          fazendo com o celular?
        </p>
        <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
      </div>
      <div class="comments">
        <p>
          <a class="comment-author" href="#">lerodcs</a>That cat is
          prettier than me lol
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
  )
}