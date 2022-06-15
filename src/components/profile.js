import React,{useState,useEffect} from 'react'
import './profile.css'
import axios from 'axios';
import Navbar from './nav'


function Profile() {
   
    const [productvalue1, setproductvalue1] = useState([]);
    const [userid] = useState(localStorage.getItem('id'));
    useEffect(() => {
       
        axios.get('http://localhost:8099/viewprofile')
        .then(function (res)
        {
            const productvalue = res.data.description;
            
            // console.log(productvalue)
            setproductvalue1(productvalue);
            console.log("profile",productvalue1)
    
            
        })
        .catch(function (error){
           
    
        })  
      },[])

      const cartlent = productvalue1.filter((resul5Data) => {
        return resul5Data.customer_detail === userid;
        
      });
      console.log("profileuserlength",cartlent)
     



  
    
    return (
        <div className='holeProfile'>
<Navbar/>
            {cartlent.length>0?<div className='container profcont'>
            {cartlent.map((prof)=>{
                 console.log("prof",prof.Product_detail.fname);
                return(
               
                <> 
                <div className='row edit'>
                    <div className='col-md-2 '> </div>
                    <div className='col-md-5'>
                      
                        {/* <p className='fnaame'>{prof.name}</p> */}
                        {/* <h4>{detail.fullName}</h4> */}

                    </div>
                    <div className='col-md-5'>
                       

                    </div>
                </div>

                <div className='row edit'>
                    <div className='col-md-2'></div>
                    <div className='col-md-10 promd1'>
                        <p className='abou'>Order History</p>


                    </div>
                    </div>
                    
                       
                    <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4 promd2'>
                        <p>Order Id:</p>
                        <p> First Name:</p>
                        <p> Last Name:</p>
                        <p>Email:</p>
                        <p>Phone:</p>
                        <p>Purchase amount:</p>
                        <p>Purchase address:</p>
                        <p>Total purchase items:</p>
                    </div>

                    <div className='col-md-6 promd3'>
                        <p>#{prof._id}</p>
                        <p>{prof.address.fname}</p>
                        <p>{prof.address.lname}</p>
                         <p>{prof.address.phone}</p> 
                        <p>{prof.address.phone}</p>
                        <p> Token MW22 {parseFloat(prof.tokenchoose).toFixed(2)}  ||  Price  $ { prof.pricechoose}</p>
                        <p>{prof.address.address}</p> 
                        <p>{prof.Product_detail.length}</p> 
                        

                    </div>
                </div>
                </>
               ) })
           }

            </div>
                :<p className='noitem'>No Items available</p>}


        </div>
    )
}

export default Profile
