import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../data layer/StateProvider';
import './thanks.css'

function Thanks() {
  const [{cart}, dispatch] = useStateValue();
  const refresh =  () => {
    dispatch({
      type: 'REFRESH'
   })
  }
  return (
    <div className='thanks'>
      <i className="fa fa-check-circle-o" aria-hidden="true"></i>
        <h1>Thank You!</h1>
        <p onClick={refresh}><Link to="/">CLick here</Link> to go for home page</p>
    </div>
  )
}

export default Thanks