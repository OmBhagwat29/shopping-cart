import './App.css';
import { useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Products from './components/products/Products';
import Checkout from './components/checkout/Checkout';
import Thanks from './components/thanks/Thanks';

function App() {

  const [cartButton, setCartButton] = useState(0);
  const [itemFilter, setItemFilter] = useState();
  const [sizeFilter, setSizeFilter] = useState();
  const [clearFilter, setClearFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState();

  // const setCart = (flag) => {
  //   setCartButton(flag)
  // }
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route 
            path="/" 
            element={
                <>
                  <Header 
                    getCart={ (flag)=> {setCartButton(flag)}}
                    getItemFilter={(item) => {setItemFilter(item)}}
                    getSizeFilter={(size) => {setSizeFilter(size)}}
                    getClearFilter={(e) => {setClearFilter(e)}}
                    getSearchFilter={(search) => { setSearchFilter(search)}}
                  />
                  <Products 
                    cartBtn={cartButton} 
                    getCart={(flag) => {setCartButton(flag)}}
                    itemFilter={itemFilter} 
                    sizeFilter={sizeFilter}
                    clearFilter={clearFilter}
                    searchFilter={searchFilter}
                    setClearFilter={(e) => { setClearFilter(e) }}
                    

                  /> 
                </>
              } />
          <Route path="checkout" element={<Checkout /> } />
          <Route path="thanks" element={<Thanks /> } />
        </Routes>
  </HashRouter>
    </div>
  );
}

export default App;
