import React, { useState } from 'react'
import heart from '../assets/img/heart.png'
import comment from '../assets/img/comment.png'
import empty_heart from '../assets/img/empty_heart.png'


const Article = ({title, content}) => {

  const [liked, setLiked]=useState(true)
  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <div>
      <div id="Article_Wrap">
        <div className="article">
            <h1>{title}</h1>
            <p>
                {content}
            </p>
        </div>
        <div className="icon_group">
            <div className="comment">
                <img src={comment} alt=""/>
                0
            </div>

            <div className="heart" onClick={handleLike}>
                <img src={liked ? heart : empty_heart} alt=""/>
                {liked ? 1:0}
            </div>
        </div>

        <footer>
            <input type="text" placeholder='댓글을 입력해주세요!'/>
            <button>등록</button>
        </footer>
      </div>
    </div>
  )
}

export default Article