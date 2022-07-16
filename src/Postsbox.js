import Posts from "./Posts"

const postsData = [
  {
    author: 'meowed',
    authorImg: 'images/meowed.png',
    video: false,
    postImg: 'images/gato-telefone.png',
    likeAuthor: 'barked',
    likeAuthorImg: 'images/barked.png',
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
    likeAuthorImg: 'images/respondeai.png',
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
    likeAuthorImg: 'images/respondeai.png',
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

      {postsData.map(p =>
        <Posts
          author={p.author}
          authorImg={p.authorImg}
          video={p.video}
          postImg={p.postImg}
          videoMp4={p.videoMp4}
          videoOgg={p.videoOgg}
          likeAuthor={p.likeAuthor}
          likeAuthorImg={p.likeAuthorImg}
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
    </div>
  )
}