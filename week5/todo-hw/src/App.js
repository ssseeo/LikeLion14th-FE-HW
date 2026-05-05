import React, { useState } from 'react'
import Input from '../src/components/Input'
import List from '../src/components/List'
import '../src/assets/style.scss'

const App = () => {

  const [todo, setTodo] = useState([])

  const addTodo = (text) => {
    if (!text.trim()) return

    setTodo([...todo, text])
  }

  const deleteTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index))
  }

  return (
    <div id="Wrap">
      <h1>TO-DO LIST</h1>

      <Input addTodo={addTodo} />

      <List 
        todo={todo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App