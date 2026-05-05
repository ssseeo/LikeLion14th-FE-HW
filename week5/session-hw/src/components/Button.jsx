import React from 'react'
import {Link} from 'react-router-dom'

const Button = () => {
  return (
    <div id="Button_Wrap">
        <Link to='./Write'>
        <div className='title'>글쓰기 Start!</div>
        </Link>
    </div>
  )
}

export default Button