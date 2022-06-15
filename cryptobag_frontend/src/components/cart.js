import React, { useEffect, useState } from 'react'
import '../components/cart.css'
import { useNavigate } from 'react-router-dom';
import Navbar from './nav'



function Cart() {
   
  
    const [obje] = useState(JSON.parse(localStorage.getItem('CartItem')));
    
    const [userid] = useState(localStorage.getItem('id'));
    console.log("iid", userid)
  
    const [detail, setdetail] = useState([]);

    let Removeitems = _id => event => {
        const vale = obje.filter((carData) => {
            return carData.id === _id;
           
          });
          console.log("cartiddata",vale)



          const resul = vale.filter((resul3Data) => {
            return resul3Data.user === userid;
            
          });
          console.log("cartuserdata",resul)

        const arr = obje.filter((Carting) => Carting !== resul[0]);
        console.log("dfsdf",arr)
      
        localStorage.setItem('CartItem',JSON.stringify(arr));
        alert(" Item removed successfully");
        window.location.reload(false);
     
    }

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            _id: obje._id,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8099/profile", requestOptions)
            .then(response => response.json())
            .then(result => {
                // alert(JSON.stringify(result.description[0]))
                console.log("res4", result.description);

                // console.log("local cart",detail[0].category)
                console.log("local cart", detail)
                setdetail(result.description);

            })
    }, []);




    let HandleSort = value => event => {
        console.log(value);
        console.log("inddd", obje);
        let productIndex = value;
        console.log("productindex", productIndex);
        let productIndexing = cartlent.findIndex((obje) => obje.id === value);
        // const check_index= obje.findIndex(item => item.id === value)
        console.log("productIndexing", productIndexing);
        console.log("quantity added", cartlent[productIndexing]);

        if (cartlent[productIndexing].id === productIndex) {
           
            console.log("avv", cartlent);

            cartlent[productIndexing].quantity++;

            cartlent[productIndexing].totalprice = 0;
            cartlent[productIndexing].totalprice += cartlent[productIndexing].price * cartlent[productIndexing].quantity;
            cartlent[productIndexing].totaltoken = 0;
            cartlent[productIndexing].totaltoken += cartlent[productIndexing].token * cartlent[productIndexing].quantity;


            alert("quantity increase");

            console.log("updateeed", cartlent)
            localStorage.setItem('CartItem', JSON.stringify(obje));


            console.log("check", obje[productIndexing].price * obje[productIndexing].quantity)

            
            window.location.reload(false);



        } else {
            alert("none;")
            console.log("caaa", obje[productIndexing].id);
        } 

    }



    let decNum = value => event => {
        console.log(value);
        console.log("inddd", obje);
        let productIndex = value;



        console.log("productindex", productIndex);



        let productIndexing = cartlent.findIndex((prome) => prome.id === value);

        console.log("productIndexing", productIndexing);


        console.log("quantity added", cartlent[productIndexing]);




        if (cartlent[productIndexing].id === productIndex) {
            if (cartlent[productIndexing].quantity > 1) {
            console.log("cartfilterincart--", cartlent);

            cartlent[productIndexing].quantity--;

            cartlent[productIndexing].totalprice = 0;
            cartlent[productIndexing].totalprice += cartlent[productIndexing].price * cartlent[productIndexing].quantity;
            cartlent[productIndexing].totaltoken = 0;
            cartlent[productIndexing].totaltoken += cartlent[productIndexing].token * cartlent[productIndexing].quantity;

            alert("quantity decrease");
            // setobje()
            console.log("updateeed", cartlent)
            localStorage.setItem('CartItem', JSON.stringify(obje));
            // console.log("gdfd", [ ...Cartings])
            window.location.reload(false);
        } else {
            alert("minium value is 1")
        }
    }
    else{
      
        alert("none;")
            console.log("caaa", obje[productIndexing].id);
    }




    }

    const[price,setPrice]=useState(0);

    const filteruser = obje.filter((resulData1) => {
        return resulData1.user === userid;
        
      });
      console.log("filteruser",filteruser)

    
    const handlePrice =() => {
        let ans =0 ;   
        filteruser.map((Carting)=> ( ans += Carting.price * Carting.quantity))
        setPrice(ans);
        
        
        console.log("cadf",ans)
    };
    const[token,setToken]=useState(0);
    const handleToken =() => {
        let answ =0 ;   
        filteruser.map((Carting)=> ( answ += Carting.token * Carting.quantity))
        setToken(answ);
        console.log("cef",answ)
    };

    const navigate = useNavigate();
    function ContinueCart() {
        if(price > 0){
            navigate('/check');
        }else{
            alert("cart page is empty")
        }

       
    }
    
    
    useEffect(()=> {
        handlePrice();
        handleToken();
    });
    
  
    const cartlent = obje.filter((resul5Data) => {
        return resul5Data.user === userid;
        
      });
      console.log("userlength",cartlent)



    return (


        <div className='holeCart'>
            <Navbar/>
            <div className='container cartContainer'>



                <div className='row'>
                    <div className='col-md-12'>
                    </div>
                </div>
                <div className='row cartRow'>
                    <div className='col-md-5'> </div>
                    <div className='col-md-7'>
                        <p className='cartHead'>CART</p>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-3'>
                        <p className='headDes'>Description</p>
                    </div>
                    <div className='col-md-2'>
                        <p className='amount'>Amount</p>
                    </div>
                    <div className='col-md-2'>
                        <p className='headquanity'>Quantity</p>
                    </div>
                    <div className='col-md-2'>
                        <p className='headtotal'>Total</p>
                    </div>
                </div><hr></hr>

                {cartlent.map((Carting) => {

                    console.log("cartings", Carting);
                   

                    return (
                        <>
                            <div className='row' >
                                <div className='col-md-1'></div>
                                <div className='col-md-2'>
                                    {
                                        Carting.prod_image1 ?
                                            <img className='cartImage' src={require('../components/Assests/jacket/' + Carting.prod_image1)} alt="jack1" />
                                            :
                                            null
                                    }



                                    {/* <img src={require('../components/Assests/jacket/'+Carting.prod_image1)} alt="ima" className='cartImage'/> */}
                                </div>
                                <div className='col-md-3'>
                                    <p className='cartdesc'>{Carting.name  }/</p>

                                    <p className='sizecart'>{Carting.size}</p>
                                </div>
                                <div className='col-md-2'>
                                    <p className='price'>$ {Carting.price}</p>
                                    <p className='token'>MW22 {Carting.token}</p>

                                </div>
                                <div className='col-md-2'>

                                    {/* <button className="plus" onClick={decNum} >-</button><input type="text" className='quanity' value={quote} onChange={() => handleChange(Carting[1].quantity)} /><button className="minus" onClick={(() => incNum(Carting[0].id))} >+</button><hr className='hrline'></hr> */}
                                    <button className="plus" onClick={decNum(Carting.id)}  >-</button><input type="text" className='quanity' value={Carting.quantity}  /><button className="minus" onClick={HandleSort(Carting.id)}>+</button><hr className='hrline'></hr>

                                    <p className='removecart ' onClick={Removeitems(Carting.id)}>Remove</p>

                                </div>
                                <div className='col-md-2'>
                                    <p className='totalprice'   >$ {Carting.totalprice}</p>
                                    <p className='totaltokens'   >MW22 {parseFloat(Carting.totaltoken).toFixed(2)}</p>
                                    {/* <p className='totalprice' >{Carting.productdata.price}</p> */}
                                    {/* <p className='totaltokens'>MW22 {token}</p> */}


                                </div>

                            </div><hr></hr>
                        </>)
                })}

                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-7'>
                        <p className='shipTax'>Shipping, Taxes and discount codes caluculate at checkout</p>
                    </div>
                    <div className='col-md-2'></div>
                </div>

                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-2'>
                        <p className='subtotal'>Sub Total</p>
                    </div>
                    <div className='col-md-3'>
                        <p className='subtotal1'>$ {price}</p>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-2'>
                        <p className='subtotal'>Sub Total</p>
                    </div>
                    <div className='col-md-3'>
                        <p className='subtotal1'>MW22  {parseFloat(token).toFixed(2)}</p>
                    </div>
                    <div className='col-md-3'></div>
                </div>

                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-8'>
                        <button className='cartBtn' onClick={ContinueCart}>Check Out</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-5'></div>
                    <div className='col-md-7'>
                        <a href='/home' className='continueShop'>CONTINUE SHOPPING</a>
                    </div>
                </div><br></br>

            </div>


        </div>
    )
};

export default Cart