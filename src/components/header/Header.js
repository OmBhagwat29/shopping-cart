import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'

function Header({getCart, getItemFilter, getSizeFilter, getClearFilter, getSearchFilter}) {
    
    const navigate = useNavigate();
    const itemFilter = (e) => {
        getItemFilter(e.target.value)
    }

    const sizeFilter = (e) => {
        getSizeFilter(e.target.value)
    }

    const clearFilter = () => {
        getClearFilter(1)
        document.getElementById("item").selectedIndex = 0;
        document.getElementById("size").selectedIndex = 0;
    }

    const searchFilter = (e) => {
        getSearchFilter(e.target.value)
    }

    const goToCart = () => {
        getCart(1)  
        
    }
  return (
    <div className='header'>
        <div className="header__section">
            <select onChange={itemFilter} name="item" id="item" className='header__section--filter'>
                <option className='a' value="type">Type</option>
                <option value="hoodie">Hoodie</option>
                <option value="tshirt">T-shirt</option>
                <option value="pants">Pants</option>
            </select>

            <select onChange={sizeFilter} name="size" id="size" className='header__section--filter'>
                <option className='a' value="size">Size</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
            <button onClick={clearFilter} className='header__section--clear-btn'><i class="fa fa-refresh" aria-hidden="true"></i> Reset</button>
        </div>
        <div className="header__section header__section2">
            <label htmlFor="search">Search: </label>
            <input onChange={searchFilter} type="text" className='header__section--search-box'/>
            <button className='header__section--search-btn' onClick={ goToCart }>Add to Cart</button>
        </div>
    </div>
  )
}

export default Header