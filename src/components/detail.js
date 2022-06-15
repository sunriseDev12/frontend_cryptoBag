import React, { useState, useEffect } from 'react'
import './detail.css'

import { useNavigate } from 'react-router-dom';
import  Navbar  from './nav';

function Detail() {



    const [cartvalue] = useState(JSON.parse(localStorage.getItem('CartItem')) != null ? JSON.parse(localStorage.getItem('CartItem')) : []);
    const [userid] = useState(localStorage.getItem('id'));
    const [imageclick,setimageclick]=useState("");
    




// alert("../components/Assests/jacket/" +String(imageclick))

    // const [proid] = useState(localStorage.getItem('FullProducts'));
    // const img01 = useState(localStorage.getItem('detailimg'));
    
    // localStorage.setItem('changing1',JSON.stringify(inde));
   
    // // localStorage.setItem('changing1',JSON.stringify(img01));
    let HandleSort = value => event => {
     
        {
            // detail.map((carting) => carting.prod_image1);
            // localStorage.setItem('detailimg',JSON.stringify(value));
            // console.log("cartvha",value)
        //    alert(value)
           setimageclick(value)
            
        }


    }

  
   
    const AddToCart = roll => event => {

        console.log("usertid", userid);

        console.log("roll", roll);
        let productIndex = roll;

        console.log("proddindex", productIndex);
        console.log("detailsss..", detail);
        console.log("cartvalue", cartvalue);





        const user_index = cartvalue.findIndex(item => item.user === userid)
        console.log("userindex", user_index);


        const vale = cartvalue.filter((resul1Data) => {
            return resul1Data.id === roll;

        });

        const resul = vale.filter((resul3Data) => {
            return resul3Data.user === userid;

        });

        console.log("val.ic", resul);
        console.log("vol", resul[0]);


        console.log("filter", vale);
        console.log("filter2", resul)


        const check_index1 = cartvalue.findIndex(item => item.id === roll)
        console.log("checkindex1", check_index1);
        const check_index = cartvalue.findIndex(item => item === resul[0])
        console.log("checkindex", check_index);


       



        if (check_index !== -1) {

            alert("quantity increase");
            cartvalue[check_index].quantity++;
            cartvalue[check_index].totalprice = 0;
            cartvalue[check_index].totalprice += cartvalue[check_index].price * cartvalue[check_index].quantity;
            cartvalue[check_index].totaltoken = 0;
            cartvalue[check_index].totaltoken += cartvalue[check_index].token * cartvalue[check_index].quantity;
            console.log("quantity added", [cartvalue]);
            localStorage.setItem('CartItem', JSON.stringify(cartvalue));



        } else {

            
                if (sizetype !== "") {
                    alert("New Products are added");
                    cartvalue.push({ ...detail.find(p => p.id === roll), user: userid, size: sizetype });
                    // cartvalue.push({...detail.find(p => p.id === roll),user:userid});
                    // setcartvalue(...cartvalue);

                    localStorage.setItem('CartItem', JSON.stringify(cartvalue));
                    console.log("new products added: ", cartvalue);
                    window.location.reload(false);
                }
                else {
                    alert("please select size");
                }
            
        };



        console.log("detaildetail", detail)
    }


    const lent = cartvalue.filter((resul5Data) => {
        return resul5Data.user === userid;

    });
    console.log("userlength", lent)


    const navigate = useNavigate();


    function Buying() {

        if(lent.length > 0){
        
        
            navigate('/check')
            }else{
                alert("please add some products")
            }
    }

    function SubCart() {
        navigate('/cart')
    }
    function BuyDetails() {
        if(lent.length > 0){
        
        
        navigate('/check')
        }else{
            alert("please add some products")
        }
    }

    const [sizetype, setsizetype] = useState("");
    function sizeof() {


        console.log("size", sizetype);

        localStorage.setItem('size', JSON.stringify(sizetype));
    }

    const [obje] = useState(JSON.parse(localStorage.getItem('Products')));
    console.log("obje", obje);

    const [detail, setdetail] = useState([]);





    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            _id: obje,


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

                setdetail(result.description);
                setimageclick(result.description[0].prod_image1);
               


            })
    }, [obje])
    // console.log("ddd",detail)

   
    return (

        <div className='rough'>
            <Navbar />
            <div className='container cont1'>
                {/* {detail.map((value) => { */}
                  
                    {/* return ( */}
                    {detail.length>0?
                        <div>
                            
                            <div className='row'   >
                                <div className='col-md-5'>
                                    {/* leftContent */}
                                    <div className='container cont2'>


                                        <div className='row leftSmall'>
                                            <div className='col-md-4'>
                                                {/* <h2>left small image</h2> */}
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <img src={require('../components/Assests/jacket/' + detail[0].prod_image1)} alt="img1" className='detail1'  onClick={HandleSort(detail[0].prod_image1)}/>
                                                    </div>

                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <img src={require('../components/Assests/jacket/' + detail[0].prod_image2)} alt="img1" className='detail1'  onClick={HandleSort(detail[0].prod_image2)} />
                                                    </div>

                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <img src={require('../components/Assests/jacket/' + detail[0].prod_image3)} alt="img1" className='detail1'   onClick={HandleSort(detail[0].prod_image3)} />
                                                    </div>

                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <img src={require('../components/Assests/jacket/' + detail[0].prod_image4)} alt="img1" className='detail1' onClick={HandleSort(detail[0].prod_image4)}/>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                {/* <p>right big  image</p> */}
                                                <div className='row'>

                                                    <div className='col-md-12'>
                                                       
                                                        {/* <img src={require('../components/Assests/jacket/'+detail.prod_image1)+String(imageclick))} alt="img1" className='detail2' /> */}
                                                        {/* <img src={} alt="img1" className='detail2' /> */}
{imageclick?<img src={require(`../components/Assests/jacket/${imageclick}`)} alt="img1" className='detail2'/>:"" }
                                                
                                                        </div>

                                                </div>
                                            </div>
                                        </div>






                                    </div>
                                </div>
                                <div className='col-md-7 right2Full'>
                                    {/* rightContent */}
                                    <div className='container'>





                                        <div className='row'>
                                            <div className='col-md-6 leftsides'>

                                                <p className='detailProduct'>{detail[0].category}</p>
                                            </div>

                                            <div className='col-md-6 rightsides'>
                                                <div className='row'><p className='cartval'>{lent.length}</p></div>
                                                {/* <div className='row'><p className='cartval'>{cartdata.length}</p></div> */}
                                                <div className='row'>
                                                    <i className="fa fa-shopping-cart cart" aria-hidden="true" onClick={SubCart}></i></div>
                                                {/* <i class="fa fa-shopping-cart cart" aria-hidden="true" onClick={() => cartitem()}></i> */}

                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <p className='detailProductName'>{detail[0].name}</p>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='rateSplit'>
                                                    <p className='detailProductPrice'>Price-</p>
                                                    <p className='detailProductAmount'>MW22 {detail[0].token}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <p className='detailProductSize'>Size</p>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-1'></div>
                                            <div className='col-md-3'>
                                                <button className='size1 ' onClick={() => {
                                                    sizeof();
                                                    setsizetype("small")
                                                }}>S</button>
                                                {/* onClick={()=>{ setsizetype("S")}} */}
                                            </div>
                                            <div className='col-md-3'>
                                                <button className='size2' onClick={() => {
                                                    sizeof();
                                                    setsizetype("medium")
                                                }}>M</button>
                                            </div>
                                            <div className='col-md-4'>
                                                <button className='size3' onClick={() => {
                                                    sizeof();
                                                    setsizetype("Large")
                                                }}>L</button>
                                            </div>
                                            <div className='col-md-1'></div>
                                        </div>


                                        <div className='row'>
                                            <div className='col-md-4'></div>
                                            <div className='col-md-8'>
                                                <button className='btnBuy' onClick={BuyDetails}>BUY NOW</button>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-4'></div>
                                            <div className='col-md-8'>

                                                <button className='btnBuy' onClick={AddToCart(detail[0].id)}>Add to cart</button>

                                            </div>
                                        </div>

                                        <div className='row checking'>
                                            <div className='col-md-1 align1'>
                                                <i className="fa fa-bars" aria-hidden="true"></i>
                                            </div>
                                            <div className='col-md-1 align2'>
                                                <p className='detailTotalItem'>{lent.length}</p>
                                            </div>
                                            <div className='col-md-2 align3'>
                                                <p className='detailItem'>Items</p>
                                            </div>
                                            <div className='col-md-3 align4'>
                                                {/* <p className='detailItemPrice'>{}</p> */}
                                                <p className='detailItemPrice'>MW22{detail[0].token}</p>
                                            </div>
                                            <div className='col-md-5'>
                                                <button className='btnBuyCheckOut' onClick={Buying}>Checkout</button>
                                            </div>
                                        </div>
                                    </div>


                                </div>



                            </div>
                        </div> : null}
                    {/* )
                })} */}

                
               
            </div>

        </div>
    )
}

export default Detail