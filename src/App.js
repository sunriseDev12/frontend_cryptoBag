import React from "react";
// import Navbar from './components/Navbar';


import Login from './components/login';
import Home from './components/home';
import Sign from './components/signup';
import Checkout from './components/checkout'
import Check from './components/check'
import Cart from './components/cart'
import Detail from './components/detail'
// import Footer from './components/footer'
import Profile from './components/profile'

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

    

    return (
        <BrowserRouter>
        {/* <Navbar/> */}
      
         <Routes>
             
                <Route path='/' element={<Login />} />

                <Route path='/signup' element={<Sign />} />
                <Route path='/home' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/detail' element={<Detail />} /> 
             
                <Route path='/check' element={<Check />} />
                <Route path='/profile' element={<Profile />} />
            
        
            
         
             
          
         </Routes>
      
       </BrowserRouter>
       
    );
}

export default App;
