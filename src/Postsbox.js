import Posts from "./Posts"

const postsValues = [
  {
    author: 'meowed',
    authorImg: 'images/meowed.png',
    video: false,
    postImg: 'images/gato-telefone.png',
    likeAuthor: 'barked',
    likedAuthorImg: 'images/barked.png',
    likeAmount: '13.751',
    commentsAmount: '666',
    comments: [
      { author: '9gag', text: 'OMG so cute' },
      { author: 'mae', text: 'O que que o gato tafazendo com o celular?' },
      { author: 'lerodcs', text: 'That cat isprettier than me lol' }]
  },
  {
    author: 'barked',
    authorImg: 'images/barked.png',
    video: false,
    postImg: 'images/dog.png',
    likeAuthor: 'respondeai',
    likedAuthorImg: 'images/respondeai.png',
    likeAmount: '1.999',
    commentsAmount: '697',
    comments: [
      { author: '9gag', text: 'Boop' },
      { author: 'mae', text: 'Ai que fofinho' },
      { author: 'lerodcs', text: 'That dog is prettier than me too lol' }]
  },
  {
    author: '9gag',
    authorImg: 'images/9gag.png',
    video: true,
    videoMp4: 'images/rickrolled.mp4',
    videoOgg: 'images/rickrolled.ogg',
    likeAuthor: 'respondeai',
    likedAuthorImg: 'images/respondeai.png',
    likeAmount: '69.696',
    commentsAmount: '999',
    comments: [
      { author: '9gag', text: 'rickrolled guys' },
      { author: 'mae', text: 'Não entendi, traduz pra mim' },
      { author: 'lerodcs', text: 'Oh well that again...' }]
  }
]

export default function Postsbox() {
  return (
    <div class="caixa-posts">

      {postsValues.map(p =>
        <Posts
          author={p.author}
          authorImg={p.authorImg}
          video={p.video}
          postImg={p.postImg}
          videoMp4={p.videoMp4}
          videoOgg={p.videoOgg}
          likeAuthor={p.likeAuthor}
          likedAuthorImg={p.likedAuthorImg}
          likeAmount={p.likeAmount}
          commentsAmount={p.commentsAmount}
          comments1Author={p.comments[0].author}
          comments1Text={p.comments[0].text}
          comments2Author={p.comments[1].author}
          comments2Text={p.comments[1].text}
          comments3Author={p.comments[2].author}
          comments3Text={p.comments[2].text}
        />)
      }

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