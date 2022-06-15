import React,{useState, useEffect} from 'react'
import './home.css'
import './navbar.css'
import { useNavigate } from 'react-router-dom';

import Logo1 from '../components/Assests/logo/logoNewWhite.png';

import axios from 'axios';

function Home() {
    
   
    const navigate = useNavigate();



    const [productvalue1, setproductvalue1] = useState([]);
  
  useEffect(() => {
     
      axios.get('http://localhost:8099/viewproducts')
      .then(function (res)
      {
          const productvalue = res.data.description;
          
          // console.log(productvalue)
          setproductvalue1(productvalue)
          localStorage.setItem('sort1', JSON.stringify(productvalue)) ;
          // localStorage.setItem('sort2', JSON.stringify(productvalue)) ;
  
          
      })
      .catch(function (error){
         
  
      })  
    },[])
 

// const obje= JSON.parse(localStorage.getItem('Productssort'));

// console.log("sortinglist",obje)
const objes= JSON.parse(localStorage.getItem('sortelement'));
const sortpro= JSON.parse(localStorage.getItem('sort1'));
console.log("shotcategoryname",objes)
console.log("shotcategoryprdodfd",sortpro)
    

    function NextPage(Products){
        let obje=[Products];
       
        localStorage.setItem("Products",JSON.stringify(obje[0]._id));
        localStorage.setItem('detailimg',obje[0].prod_image1)
        localStorage.removeItem("sortelement");
        // localStorage.setItem("FullProducts",JSON.stringify(obje));
        // localStorage.setItem("cart",JSON.stringify([]));
        navigate('/detail');
    }


  function ProfilePage(){
      navigate('/profile');
  }
  function CartPage(){
      navigate('/cart');
  }
  function Logout(){
      navigate('/');
  }



    function btnFilters(giveValue) {
        // navigate('/home');
        console.log("category",giveValue)
        const result = sortpro.filter((resultData) => {
          return resultData.category === giveValue;
          
        });
        setproductvalue1(result)
        // setproductvalue2(result)
        console.log("sdd",result)
    
        localStorage.setItem('sort', JSON.stringify(result)) ;
        localStorage.setItem('sortelement', JSON.stringify(giveValue)) ;
        alert("category changed")
        // window.location.reload(false);
      
      }

  

  return (
    
    <div className='holeHome'>
       
        <div className='container-fluid  homeContanier'>
        <div className='row rowheight'>
          <div className='col-md-2'>
            <img src={Logo1} alt="logo"/>
          </div>
          <div className='col-md-4'></div>
          <div className='col-md-1'>
            {/* <button className='jack' >Jackets</button> */}
            <button className='jack' onClick={() => btnFilters('Jackets')}>Jackets</button>
            {/* <button className='jack' onClick={Homme}>Jackets</button> */}
          </div>
          <div className='col-md-1'>
            {/* <button className='shoe' >Shoe</button> */}
            {/* <button className='shoe' >Shoe</button> */}
            <button className='shoe' onClick={() => btnFilters('Shoes')}>Shoe</button>
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
          <i className="fa fa-user profiles" onClick={ProfilePage}></i>
          </div>
                
            </div>
            <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-8'>
                <p className='homeName'>{objes}</p>
            </div>
            </div>

            <div className='row homeRow1'>
            {/* <div className='col-md-2'></div> */}
            {productvalue1.map((Products) => {
              
                    return(
                        <>
                {/* <div className='col-md-2 img1hole' onClick={NextPage}> */}
                <div className='col-md-2 img1hole' onClick={() => NextPage(Products)}>
               
                       
                        {
                            Products.prod_image1?
                            <img className='img1' src={require('../components/Assests/jacket/'+Products.prod_image1)} alt="jack1"/>
                            :
                            null
                        }
                    
                    <p className='img1Description'>{Products.name}</p>
                    <p className='img1Unprice'>$ {Products.price}</p>
                    <p className='img1price'>MW22 {Products.token}</p>
                    </div>
                    
                    </>
                    )
                })}
                

             
                <div className='col-md-2'></div>
            </div>
        </div>
    </div>
  
  )
}

export default Home