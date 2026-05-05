import React, { useState } from 'react'
import Article from "./Article"
import { useNavigate } from 'react-router-dom'

const Write = () => {
    const[title, setTitle] = useState("")
    const[content, setContent] = useState("")

    const[show, setShow]=useState(false)

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(-1);
    }

  return (
    <>
    {show ? (
        <Article title={title} content={content}/>
    ):(
        <div id="Write_Wrap">
            <input type="text"
            value={title}
            className='title'
            onChange={(e)=>{setTitle(e.target.value)}}
            placeholder='제목을 입력해주세요!'/>
        
        
            <textarea name="" id=""
            value={content}
            className='content'
            onChange={(e)=>{setContent(e.target.value)}}
        
            placeholder='내용을 입력해주세요!'>

            </textarea>

            <div className="button_group">
                <button className="delete" onClick={()=>handleClick()}>취소하기</button>
                <button className="write" onClick={()=>{setShow(true)}}>작성하기</button>
            </div>
        </div>
    )}
    </>
  )
}

export default Write