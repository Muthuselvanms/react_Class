import './App.css';
import BootNav from './page/BootNav';
import Cartpage from './page/Cartpage';
import Homepage from './page/Homepage';
import Navigation from './page/Navigation';
import Productpage from './page/Productpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    {/* <BootNav/> */}
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/product' element={<Productpage/>} />
      <Route path='/cart' element={<Cartpage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
