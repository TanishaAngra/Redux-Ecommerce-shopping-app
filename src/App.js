import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes , Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/products' Component={Products}/>
    <Route exact path='/products/:id' Component={Product}/>
    <Route exact path='/cart' Component={Cart}/>
   </Routes>
   </>
  );
}

export default App;
