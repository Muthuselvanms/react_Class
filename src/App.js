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

  useEffect(()=>{
    setdata(FoodData)
  },[])

  // console.log(data);

  return (
    <>
    <BrowserRouter>
    <Navigation/>
    {/* <BootNav/> */}
    <Routes>
      <Route path='/' element={<Homepage data={data}/>} />
      <Route path='/productS' element={<Productpage data={data}/>} />
      <Route path='/cart' element={<Cartpage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
