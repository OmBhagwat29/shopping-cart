import React, { useState } from 'react'
import { useStateValue } from '../../data layer/StateProvider';

function ProductRow({id, image, name, color, stock, price, quantity, getTotal}) {

  const [quan, setQuan] = useState(quantity);
  getTotal(price*quan);
  const [{cart}, dispatch] = useStateValue();


  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
   })


   getTotal(0);
  }

  return (
    <tr className='products__table--body'>
                <td onClick={ removeFromCart } className="remove"> &times;</td>
                <td className='products__table--image'>
                  <img src={image} alt="" /> 
                  <p>{name}</p>
                    
                </td>
                <td>$ {price}</td>
                <td className='products__table--quantity'>
                  <button className='btn-left' onClick={()=> {quan<=quantity ? setQuan((+quan)+1) : setQuan((+quan));}}>+</button>
                  <input type="text" value={quan} onChange={(e) => {setQuan(e.target.value)}}/>
                  <button className='btn-right' onClick={()=> {quan>0 ? setQuan((+quan)-1) : setQuan((+quan))}}>-</button>
                </td>
                <td>$ {price*quan}</td>
                
                
              
    </tr>
  )
}

export default ProductRow