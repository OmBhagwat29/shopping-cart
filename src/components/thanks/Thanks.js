import React from 'react'
import { Link } from 'react-router-dom'
import './thanks.css'

function Thanks() {
  return (
    <div className='thanks'>
      <i class="fa fa-check-circle-o" aria-hidden="true"></i>
        <h1>Thank You!</h1>
        <p><Link to="/">CLick here</Link> to go for home page</p>
    </div>
  )
}

export default Thanks