


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
      {props.video ? (<video width="100%" height="100%" controls autoplay muted>
        <source src={props.videoMp4} type="video/mp4" />
        <source src={props.videoOgg} type="video/ogg" />
        Your browser does not support the video tag.
      </video>) : <img src={props.postImg} />}
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
        <p><a class="comment-author" href="#">{props.comments1Author}</a>{props.comments1Text}</p>
        <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
      </div>
      <div class="comments">
        <p>
          <a class="comment-author" href="#">{props.comments2Author}</a>{props.comments2Text}</p>
        <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
      </div>
      <div class="comments">
        <p>
          <a class="comment-author" href="#">{props.comments3Author}</a>{props.comments3Text}</p>
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