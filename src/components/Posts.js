import React from 'react'

export default function Posts(props) {

  const [likePost, setLikePost] = React.useState(false);
  const [likeComment1, setLikeComment1] = React.useState(false);
  const [likeComment2, setLikeComment2] = React.useState(false);
  const [likeComment3, setLikeComment3] = React.useState(false);

  return (
    <div className="post">
      <div className="post-header">
        <div>
          <a href="#"><img src={props.authorImg} /></a>
          <a href="#"><p className="autor">{props.author}</p></a>
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
      <div className="post-footer">
        <div>
          {likePost ?
            (<ion-icon name="heart" onClick={() => setLikePost(false)}></ion-icon>) :
            (<ion-icon name="heart-outline" onClick={() => setLikePost(true)}></ion-icon>)
          }

          <a href="#"><ion-icon name="chatbubble-outline"></ion-icon></a>
          <a href="#"><ion-icon name="paper-plane-outline"></ion-icon></a>
        </div>
        <div className="mark">
          <a href="#"><ion-icon name="bookmark-outline"></ion-icon></a>
        </div>
      </div>
      <div className="post-likes">

        <a href="#"><img src={props.likeAuthorImg} /></a>

        <p className="likes">
          Curtido por <a href="#">{props.likeAuthor}</a> e
          <a href="#"> outras {props.likeAmount} pessoas</a>
        </p>
      </div>

      <div className="comments-header">
        <a href="#">Clique para ver os outros {props.commentsAmount} comentários</a>
      </div>
      <div className="comments">
        <p><a className="comment-author" href="#">{props.comments1Author}</a>{props.comments1Text}</p>
        {likeComment1 ?
          (<ion-icon name="heart" onClick={() => setLikeComment1(false)}></ion-icon>) :
          (<ion-icon name="heart-outline" onClick={() => setLikeComment1(true)}></ion-icon>)
        }
      </div>
      <div className="comments">
        <p>
          <a className="comment-author" href="#">{props.comments2Author}</a>{props.comments2Text}</p>
        {likeComment2 ?
          (<ion-icon name="heart" onClick={() => setLikeComment2(false)}></ion-icon>) :
          (<ion-icon name="heart-outline" onClick={() => setLikeComment2(true)}></ion-icon>)
        }
      </div>
      <div className="comments">
        <p>
          <a className="comment-author" href="#">{props.comments3Author}</a>{props.comments3Text}</p>
        {likeComment3 ?
          (<ion-icon name="heart" onClick={() => setLikeComment3(false)}></ion-icon>) :
          (<ion-icon name="heart-outline" onClick={() => setLikeComment3(true)}></ion-icon>)
        }
      </div>
      <div className="add-comment">
        <div>
          <a href="#"><ion-icon name="happy-outline"></ion-icon></a>
          <input
            className="comment-box"
            placeholder="Adicione um comentário..."
          />
        </div>
        <div><a className="publicar" href="#">Publicar</a></div>
      </div>
    </div>
  )
}