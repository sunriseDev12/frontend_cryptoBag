import React, { useState, useEffect} from 'react'
import NoProduct from '../components/Assests/logo/noproduct.png'
import './checkout.css'
import { useNavigate } from 'react-router-dom';

// import Navbar from './navbar'
// import Navbar from './nav2'





// import React, { useEffect } from "react";
import Navbar from './Navbar';
// import Home from './components/home';
import { useDispatch, useSelector } from "react-redux";
import { connectWallet } from "../redux/WalletAction";

import "../App.css";
import Web3 from 'web3';
import { S_IFIFO } from 'constants';

// const App = () => {

//     const wallet = useSelector(state => state.WalletConnect);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const {web3Modal} = wallet;
//         if(web3Modal.cachedProvider) {
//             dispatch(connectWallet());
//         }
//         // eslint-disable-next-line
//     }, []);

//     return (
//             <div className="App">
//                < Navbar />
//                <Home/>

//             </div>
//     );
// }

// // export default App;




const Checkout = () =>{



    
    const wallet = useSelector(state => state.WalletConnect);
    const dispatch = useDispatch();
    const[hashval,sethasval]=useState([0])


    async function transfer(receiver) {
        const { address, mw22token, web3 } = wallet;
        console.log('add', address);
        console.log("web3", web3);
        console.log("tokenmw22", mw22token);
        receiver = '0x5110553d5C0EaF091000798d0f6d46243F2CE286';
        if(web3){

        
        const tokenAmount = web3.utils.toWei(token.toString(), 'ether');
       try
        {
        const trans = await mw22token.methods.transfer(receiver, tokenAmount).send({ from: address });
        console.log('transaction', trans);
        alert("transcation complete",trans);
        sethasval(trans);
        alert("puchase order successfully work");
        const arr = obje.filter((Carting) => Carting.user !== id);
        console.log("dfsdf", arr)

        localStorage.setItem('CartItem', JSON.stringify(arr));
        alert("products are removed from cart");
        // window.location.reload(false);

        navigate('/home');
        }
        catch(error){
            console.log("error",error);
            setbtnpur(false);
            alert("your trascation has failed")
        }
        
    }else{
        alert("please connect wallet")
    }

    }
    console.log("hashtra",hashval)
   


    


    useEffect(() => {
        const {web3Modal} = wallet;
        if(web3Modal.cachedProvider) {
            dispatch(connectWallet());
        }
        // eslint-disable-next-line
    }, []);



    const userdetails = async () =>{
        const { connected } = wallet;
         if (!connected) {
          await connectWallet();
          
         }}
         useEffect( ()=>{  
          userdetails()
          if(wallet.connected){
          
            
          
          }
       },[wallet.connected])

    const [obje] = useState(JSON.parse(localStorage.getItem('CartItem')));
    const [addre] = useState(JSON.parse(localStorage.getItem('address')));
    const [id] = useState(localStorage.getItem('id'));
    const navigate = useNavigate();
    // const [user] = useState(localStorage.getItem('FullProducts'));
    // setuser(obje);
    const [pricechoose, setpricechoose] = useState('');
    // const [pricechoose1, setpricechoose1] = useState('');
    const [tokenchoose, settokenchoose] = useState('');
    const [tokentype, settokentype] = useState('');
    // user= localStorage.getItem('id');

    // const [num,setnum] = ("");
    // setnum(obje[0].quantity);

    const[price,setPrice]=useState(0);
    
const handlePrice =() => {
    let ans =0 ;   
    cartlent.map((Carting)=> ( ans += Carting.price * Carting.quantity))
    setPrice(ans);
    
    
    console.log("cadf",ans)
};
const[token,setToken]=useState(0);
const handleToken =() => {
    let answ =0 ;   
    cartlent.map((Carting)=> ( answ += Carting.token * Carting.quantity))
    setToken(answ);
    console.log("cef",answ)
};


useEffect(()=> {
    handlePrice();
    handleToken();
});
const[btnpur,setbtnpur]=useState(false)

    function ContinueCart() {

        var myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({

            
            customer:id ,
            product:cartlent,
            address:addre,
            pricechoose:tokentype==="noncrypto"?pricechoose:null,
            tokenchoose:tokentype==="crypto"?tokenchoose:null,
         

        });
        console.log("price",pricechoose)
        console.log("token",tokenchoose)
        console.log("product",obje)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };






        fetch("http://localhost:8099/purchase", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("res", result);

               


                if (result.status === true) {
                    

            
                      const resul = obje.filter((resul3Data) => {
                        return resul3Data.user === id;
                        
                      });
                      console.log("cartuserdata",resul)
                      console.log("carttokrn",price)


                    //   if(tokentype==="crypto"){
                    //     alert(hashval)
                    //     if(hashval >= 0){
                    //         alert("token not paid")
                    //     }else{
                    //         alert("puchase order successfully work");
                    //         const arr = obje.filter((Carting) => Carting.user !== id);
                    //         console.log("dfsdf", arr)

                    //         localStorage.setItem('CartItem', JSON.stringify(arr));
                    //         alert("removed");
                    //         // window.location.reload(false);

                    //         navigate('/home');
                    //     }

                    //   }else{
                    //     alert("your are not choose crypto")
                    //   }


                    //   if(tokentype==="noncrypto"){
                    //     if(price === 0){
                    //         alert("amount not choosed")
                    //     }else{
                    //         alert("purchase suceess with price");
                    //         const arr = obje.filter((Carting) => Carting.user !== id);
                    //         console.log("dfsdf", arr)

                    //         localStorage.setItem('CartItem', JSON.stringify(arr));
                    //         alert("removed");
                    //         // window.location.reload(false);

                    //         navigate('/home');
                    //     }
                    //   }else{
                    //     alert("you are not choose price")
                    //   }


                    //   if(price === 0 || hashval >=0){
                    //   if( price === 0  ){
                        //  alert("amoutn not paid");
                        // if(hashval >= 0 ){
                            // alert("token not paid")
                               
                                // alert("purchase success successfully !");
                                // alert("purchase ordered successfully");
                            //     }else{
                            //         alert("b work");
                                    
                            //     }
                            // }
                            //     else{
                            // if(hashval >= 0){
                               
                            // alert("not work");
                            // alert("please pay token")
                            // }else{
                                // alert("doubt")
                        //         alert("work");
                        // alert("purchase success successfully !");
                        // alert("purchase ordered successfully");
                        //     }
                        // }
                        
                       
                        

                          
                       
                      
                    //   else{
                    //     if(price === 0){
                    //     alert("work");
                    //     alert("purchase success successfully !");
                    //     alert("purchase ordered successfully");
                    //     }
                    //     else{
                    //         alert("partbb")
                    //     }
                    //   }


                      

            
                    // const arr = obje.filter((Carting) => Carting.user !== id);
                    // console.log("dfsdf",arr)
                  
                    // localStorage.setItem('CartItem',JSON.stringify(arr));
                    // alert("removed");
                    // window.location.reload(false);
            
                    // navigate('/home');
                    

                }
            })
            settokentype("")
        // navigate('/home');
    }




    const cartlent = obje.filter((resul5Data) => {
        return resul5Data.user === id;
        
      });
      console.log("profileuserlength",cartlent)


    // setuser(obje);
   
    
    return (
        <div><Navbar/>
            <div className='container-fluid  fullgrid'>
                
                <div className='row'> 
               

                    <div className='col-md-7'>
                  
                        <div className='row'>
                            <div className='col-md-4'></div>
                            <div className='col-md-8'>
                                <p className='chechHEad'>CHECKOUT</p>
                            </div>
                        </div>
                       

                        <div className='row'>
                        {cartlent.map((value) => {
                                  return(
                                    <>
                            <div className='col-md-5'></div>
                            <div className='col-md-7'>
                            {
                            value.prod_image1?
                            <img src={require('../components/Assests/jacket/' + value.prod_image1)} alt="product not available" className="productNull" />
                            :
                            
                             <img src={NoProduct} alt="product not available" className="productNull"/> 
                        }
                               
                                {/* <img src={NoProduct} alt="product not available" className="productNull"/> */}
                            </div>
                            </>  )})}
                        </div>
                        <div className='row'>
                            <div className='col-md-5'></div>
                            <div className='col-md-7'>
                                {/* <p className='noPRoduct'>{obje[0].name}</p> */}
                                {/* <p className='noPRoduct'>You Have no orders</p> */}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'></div>
                            <div className='col-md-8'>{btnpur? <button className='purchase'>Processing</button>:
                                <button className='purchase' onClick={()=>{
                                    if(tokentype==''){                                      
                                        alert("choose aleast one price")  ;
                                        setbtnpur(false)
                                    }else if(tokentype=="noncrypto"){
                                        // alert("abc");
                                        setbtnpur(true);
                                        alert("purchase order sucessfully");
                                        
                                        alert("puchase order successfully work in amount");
                                                const arr = obje.filter((Carting) => Carting.user !== id);
                                                console.log("dfsdf", arr)
                    
                                                localStorage.setItem('CartItem', JSON.stringify(arr));
                                                alert("removed");
                                                // window.location.reload(false);
                    
                                                navigate('/home');
                                       
                                    }else{
                                        alert("please wait");
                                        transfer();
                                        ContinueCart();
                                        setbtnpur(true)
                                        // alert(hashval)
                                        // if (hashval >= 0) {
                                        //     alert("token not paid")
                                        // } else {
                                            // alert("puchase order successfully work");
                                            // const arr = obje.filter((Carting) => Carting.user !== id);
                                            // console.log("dfsdf", arr)

                                            // localStorage.setItem('CartItem', JSON.stringify(arr));
                                            // alert("removed");
                                            // // window.location.reload(false);

                                            // navigate('/home');
                                        // }
                                       
                                    }
                                  }}>Purchase</button>}
                            </div>
                        </div>
                      
                    </div>
                    <div className='col-md-5'>
                   
                        {/* <p>section 2</p> */}
                        <div className='container rightgrid'>
                        {cartlent.map((value) => {
                                  return(
                                 <>
                       
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-11'>

                                    <p className='order'>Order Summary</p>
                                </div>
                            </div>
                           
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-11'>
                                    <p className='orderValue'>{value.quantity} Items</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-1'></div>

                                <div className='col-md-6'>
                                    <p>Product name</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>{value.name}</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-1'></div>

                                <div className='col-md-6'>
                                    <p>Price</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>$ {value.price}</p>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-md-1'></div>

                                <div className='col-md-6'>
                                    <p>Token</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>MW22 {parseFloat(value.token).toFixed(2)}</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-md-1'></div>

                                <div className='col-md-6'>
                                    <p>Product category</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>{value.category}</p>
                                </div>
                                {/* <div className='col-md-1'>

        </div>
        <div className='col-md-9'>
        <p className='productDisplay'>Please select atlest one product</p>
        </div>
        <div className='col-md-2'></div> */}

                            </div>
                            <hr></hr>
                            </>)}
                                   )}

                            <div className='row'>
                                <div className='col-md-1'></div>

                                <div className='col-md-6'>
                                    <p>Sub Total In</p>

                                </div>
                                <div className='col-md-5'>
                                    <p >$ {price}  </p>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-6'>
                                    <p>Delivery</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>Free</p>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-6'>
                                    <p>Total to Pay in</p>

                                </div>
                                <div className='col-md-5'>
                                    <p>MW22 {parseFloat(token).toFixed(2)}</p>
                                </div>
                            </div>
                            <hr></hr>
                            
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-11'>
                                    <p className='pay'>Payment Option</p>
                                </div>
                            </div>

                            {/* <div className='row'>
                              <div className='col-md-4'></div>
                              <div className='col-md-5'>
                                  <input type="radio" id="amout1" value="Bike" />
                                  <label for="radiovalue1" className='rate1'>0.0000 BNB</label>
                              </div>
                              <div className='col-md-3'></div>
                          </div>
                          <div className='row'>
                              <div className='col-md-4'></div>
                              <div className='col-md-5'>
                                  <input type="radio" id="amount2" value="Bike" />
                                  <label for="radiovalue2" className='rate2'>   0.0000 RS200</label>
                              </div>
                              <div className='col-md-3'></div>
                          </div> */}

                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-6'> <button className='productBtn'  value={pricechoose} onClick={() => {
                                    settokentype("noncrypto")
                                    setpricechoose(price)}}>$ {price}</button> </div>
                                <div className='col-md-5'>

                                    <button className='productBtn2'  value={tokenchoose}  onClick={() =>{ 
                                        settokentype("crypto")
                                     settokenchoose(token)
                                     
                                    
                                    //  alert("you trasction is process")
                                     }}>MW22 {parseFloat(token).toFixed(2)}</button>
                                </div>

                            </div>

                           
                        </div>


                                  
                    </div>
                 
                  
                  
                </div>
                
            </div>
        </div>
    )
}

export default Checkout