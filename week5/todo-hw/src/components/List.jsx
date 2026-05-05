import React from 'react'
import box from '../assets/img/box.png'
import minus from '../assets/img/minus.png'

const List = ({ todo, deleteTodo }) => {

  return (
    <div id="List_Wrap">
      <div className="List">
        {todo.map((item, index) => (
            <div className="todo_item" key={index}>
                <div className="todo_left">
                    <img className="check_box" src={box} alt="check" />
                    <span className="todo_text">{item}</span>
                </div>
            <img
                className="delete_btn"
                src={minus} 
                alt="delete" 
                onClick={() => deleteTodo(index)} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default List