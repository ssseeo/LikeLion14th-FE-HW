import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Button from './components/Button';
import Write from './components/Write';
import "../src/assets/style.scss"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Button />}/>
      <Route path='/Write' element={<Write/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App