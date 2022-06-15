// import { type } from '@testing-library/user-event/dist/type';
import { useNavigate } from 'react-router-dom';
import React from 'react'
// import axios from 'axios';
// import Products from '../components/home'
// import { Navbar } from 'responsive-navbar-react';
// import 'responsive-navbar-react/dist/index.css';
import Logo1 from '../components/Assests/logo/logoNewWhite.png';
import'./navbar.css';





function Navbars() {


  // const [productvalue1, setproductvalue1] = useState([]);
  // useEffect(() => {
     
  //     axios.get('http://localhost:8099/viewproducts')
  //     .then(function (res)
  //     {
  //         const productvalue = res.data.description;
          
  //         // console.log(productvalue)
  //         setproductvalue1(productvalue)
  
          
  //     })
  //     .catch(function (error){
         
  
  //     })  
  //   })

  const navigate =useNavigate();
  // const [Data, setData] = useState('');
  function NextPage(){
      navigate('/profile');
  }
  function CartPage(){
      navigate('/cart');
  }
  function Logout(){
      navigate('/');
  }
  function Navi(){
      navigate('/home');
  }


  // function btnFilters(giveValue) {
  //   navigate('/home');
  //   console.log("category",giveValue)
  //   const result = productvalue1.filter((resultData) => {
  //     return resultData.category === giveValue;
  //   });
  //   console.log(result)

  //   localStorage.setItem('sort', JSON.stringify(result)) ;
  //   localStorage.setItem('sortelement', JSON.stringify(giveValue)) ;
  //   alert("category changed")
  //   window.location.reload(false);
  
  // }

 
  
  return (
    <div>
      <div className='container-fluid fluids'>
        <div className='row rowheight'>
          <div className='col-md-2'>
            <img src={Logo1} alt="logo"/>
          </div>
          <div className='col-md-4'></div>
          <div className='col-md-1'>
            {/* <button className='jack' onClick={() => btnFilters('Jackets')}>Jackets</button> */}
            {/* <button className='jack' onClick={Homme}>Jackets</button> */}
          </div>
          <div className='col-md-1'>
            {/* <button className='shoe' >Shoe</button> */}
            <button className='shoe' onClick={Navi}>Home</button>
            {/* <button className='shoe' onClick={() => btnFilters('Shoes')}>Shoe</button> */}
          </div>
          <div className='col-md-1'>
            <button className='acc'>Accessories</button>
          </div>
          <div className='col-md-1'>
            <button className='trac'>Track</button>
          </div>
          {/* <div className='col-md-1'>
          <i className="fa fa-user profiles" onClick={NextPage}></i>
          </div> */}
          <div className='col-md-2'>
          <i className="fa fa-shopping-cart ccart" aria-hidden="true" onClick={CartPage}></i>
          <i className="fa fa-sign-out signoout" aria-hidden="true" onClick={Logout}></i>
          <i className="fa fa-user profiles" onClick={NextPage}></i>
          </div>
          {/* <div className='col-md-1'>
          
          </div> */}
          
        </div>
      </div>
    </div>
  )
}



export default Navbars;