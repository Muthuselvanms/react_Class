import { useEffect, useState } from 'react';
import './App.css';
import BootNav from './page/BootNav';
import Cartpage from './page/Cartpage';
import FoodData from './page/FoodData';
import Homepage from './page/Homepage';
import Navigation from './page/Navigation';
import Productpage from './page/Productpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  const [data, setdata] = useState([])
  const [cart, setcart] = useState([]) 

  useEffect(()=>{
    setdata(FoodData)
  },[])

  // console.log(cart.length);

  // console.log(data);

   const addCart = (addedItem) =>{
    setcart( (prevCart)=> [...prevCart,addedItem] ) // [] => [gs]
  }

  const removeCart = (removeIndex) =>{  // 1
    setcart((prevCart)=> prevCart.filter((item,index) => index != removeIndex))
  }

  const clearCart = () =>{  
    setcart([])
  }

  const calcTotal = () =>{
    let total = 0
    cart.forEach(item => total =  parseInt(item.price) +total ) //3093090
    return total.toFixed(2)
  }


  return (
    <>
    <BrowserRouter>
    <Navigation cart={cart}/>
    <Routes>
      <Route path='/' element={<Homepage data={data}/>} />
      <Route path='/productS' element={<Productpage data={data} addCart={addCart}/>} />
      <Route path='/cart' element={<Cartpage calcTotal={calcTotal} cart={cart} clearCart={clearCart} removeCart={removeCart}/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
