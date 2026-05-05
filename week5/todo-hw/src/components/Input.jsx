import React, { useState } from 'react'
import plus from '../assets/img/plus.png'

const Input = ({ addTodo }) => {
  const [text, setText] = useState("")

  const handleAdd = () => {
    addTodo(text)
    setText("")
  }

  return (
    <div id="Input_Wrap">

      <input
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder='오늘 할 일을 입력해주세요!'
      />

      <button onClick={handleAdd}>
        <img src={plus} alt="add" />
      </button>

    </div>
  )
}

export default Input