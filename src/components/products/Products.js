import React, { useState, useEffect } from 'react'
import ProductRow from './ProductRow'
import { Link, useNavigate } from 'react-router-dom'
import './products.css'
import ProductData from '../../data/ProductData'
import { useStateValue } from '../../data layer/StateProvider';

function Products({cartBtn, getCart, itemFilter, sizeFilter, clearFilter, searchFilter, setClearFilter}) {
   
    const navigate = useNavigate();
    const [products, setProducts] = useState(ProductData);
    const [tempCart, setTempCart] = useState([])
    const [{cart}, dispatch] = useStateValue();
    
    // console.log(cart)

    const getTempCart = (e) => {

        if(e.remove=="true"){
            setTempCart(tempCart.filter((item) => item.id != e.id ))
        }else{
            setTempCart([...tempCart, e])
        }
        
        // dispatch({
        //     type: 'ADD_TO_CART',
        //     item: { id: 1}
        //  })

        //  console.log(cart);
    }

    let filterProduct;

   useEffect(() => {

    filterProduct = ProductData;

    if(itemFilter){
        filterProduct = filterProduct.filter((e) => e.type==itemFilter)
    }

    if(sizeFilter){
        filterProduct = filterProduct.filter((e) => e.size==sizeFilter)
    }


    if(searchFilter){
        filterProduct = filterProduct.filter((e) => e.name.toLowerCase().includes(searchFilter.toLowerCase()))
    }

    setProducts(filterProduct)
  
   }, [itemFilter, sizeFilter, searchFilter])

   useEffect(() => {
    if(clearFilter){
        filterProduct = ProductData;
        setClearFilter(0)
        setProducts(filterProduct)
    }
   }, [clearFilter])
   
   
   

    useEffect(() => {
        if(cartBtn){
            tempCart.map((e) => {
                dispatch({
                type: 'ADD_TO_CART',
                item: { id: e.id,
                        image: e.image,
                        name: e.name,
                        color: e.color,
                        stock: e.stock, 
                        price: e.price,
                        quantity: e.quantity

                 }
                })
            })
            navigate('/checkout');

        }

        getCart(0)
        
        
    }, [cartBtn])
    

        

    
    
               
  return (
    <div className='products'>
        <table className='products__table'>
            <tr className='products__table--head'>
                <th>image</th>
                <th>name</th>
                <th>color</th>
                <th>stock</th>
                <th>price</th>
                <th>buy</th>
            </tr>
            {products.map((e) => {
                return(
                    <ProductRow 
                        id = {e.id}
                        image={e.image}
                        name={e.name}
                        color={e.color}
                        stock={e.stock}
                        price={e.price}
                        available_quantity={e.available_quantity}
                        getItem={getTempCart}
                        />
                )
            })}
           
        </table>
    </div>
  )
}

export default Products