import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../data layer/StateProvider'

function ProductRow({ id, image, name, color, stock, price, available_quantity, getItem}) {

    const [{cart}, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(1);
    const[instock, setInstock] = useState(0);


    useEffect(() => {
        if(available_quantity-quantity < 1){
            setInstock(0)
        }else{
            setInstock(1)
        }
    }, [quantity])
    
    
    


    const cartChecked = (e) => {
        if(e.target.checked==true){
            getItem({
                id:id,
                image:image,
                name:name,
                color:color,
                stock:stock,
                price:price,
                quantity: quantity
            })
        }

        if(e.target.checked==false){
            getItem({id:id,
                    remove: "true"
                })
        }


    }



    const addToCart = () => {
         dispatch({
            type: 'ADD_TO_CART',
            item: {
                id:id,
                image: image,
                name: name,
                color: color,
                stock: stock, 
                price:price,
                quantity: quantity

            }
         })
    }



  return (
    <tr className='products__table--body'>
        <td className='products__table--image'>
            <img src={ image } alt="" />
        </td>
        <td>{ name }</td>
        <td>{ color }</td>
        <td>
            { instock ? 
                <span className='in-stock'>
                <i class="fa fa-smile-o" aria-hidden="true"></i> in stock
                </span> : 
                <span className='out-stock'>
            <i class="fa fa-frown-o" aria-hidden="true"></i> out of stock
            </span>
                }
            
        </td>
        <td>$ { price }</td>
        <td className='products__table--operations'>
            <input type="number" value={quantity} onChange={(e) => {setQuantity(e.target.value)}} className='quantity'/>
            { instock ? 
            <button className='cart' onClick={addToCart}><i class="fa fa-shopping-cart"></i></button> :
            <button className='cart cart-disabled' disabled onClick={addToCart}><i class="fa fa-shopping-cart"></i></button>
            }

            {
                instock ? <input type="checkbox" onChange={cartChecked} /> : 
                <input type="checkbox" disabled onChange={cartChecked} name="" id="" />
            }

            
        </td>
    </tr>
  )
}

export default ProductRow