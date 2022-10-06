import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../data layer/StateProvider';
import './checkout.css'
import ProductRow from './ProductRow'

function Checkout() {
    const [{cart}, dispatch] = useStateValue();
    const [total, setTotal] = useState(0)

    let num = 0
    const calcTotal = (e) => {
        if(e==0){
            setTotal(0)
        }else{
            num = num+e;
            setTotal(num)
        }   
    }





  return (
    <div className='checkout'>
        <table className='products__table'>
            <tr className='products__table--head'>
                <th></th>
                <th>product</th>
                <th>price</th>
                <th>quantity</th>
                <th>subtotal</th>
            </tr>
            {

                cart.map((e) => {
                    return(
                        <ProductRow 
                            id={e.id}
                            image={e.image}
                            name={e.name}
                            color={e.color}
                            stock={e.stock}
                            price={e.price}
                            quantity={e.quantity}
                            getTotal={calcTotal}
                         />
                    )
                })
            }
        </table>
        <div className="checkout__total">
            <h1>Cart total</h1>
            <h3>Subtotal:<span>$ {total}</span></h3>
            <hr />
            <h2>Total:<span>$ {total}</span></h2>
            <Link to="/thanks"><button>Proceed to Checkout</button></Link>
        </div>
        <div></div>
    </div>
  )
}

export default Checkout