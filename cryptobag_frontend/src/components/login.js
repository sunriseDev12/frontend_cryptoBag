import React,{useState} from 'react'
import Image1 from '../components/Assests/logo/newLogo.png'
import './login.css'
// import { ToastContainer, toast,  Flip, Slide} from 'react-toastify';
// import { ToastContainer,toast ,  Flip, Slide } from 'react-toastify/dist/components';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


function Login() {

    const [email, setemail] = useState('');
    const emailRegex = /\S+@\S+\.\S+/;
    const [passwords, setpasswords] = useState('');
    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const navigate = useNavigate();
    // const [productvalue2, setproductvalue2] = useState([]);
    // const [productvalue1, setproductvalue1] = useState([]);

    function Clicking(){

           

    
            // axios.get('http://localhost:8099/viewproducts')
            // .then(function (res) {
            //     const productvalue = res.data.description;

              
            //     setproductvalue1(productvalue)
            //     // localStorage.setItem("hole",productvalue1)
            //     localStorage.setItem('Products', JSON.stringify(productvalue1));
            //     localStorage.setItem('Productssort', JSON.stringify(productvalue1));
              
            // })
            // .catch(function (error) {


            // })


            // axios.get('http://localhost:8099/viewproducts')
            // .then(function (res)
            // {
            //     const productvalue3 = res.data.description;
            //     // console.log(productvalue)
            //     setproductvalue2(productvalue3);
            //             localStorage.setItem('Products', JSON.stringify(productvalue2));
            //             localStorage.setItem('Productssort', JSON.stringify(productvalue2));
                
            // })
            // .catch(function (error){
            //     console.log(error);
        
            // })  
            
            // .then(function(){
            //     //always executed
            // })
      
            // console.log("logchecj",productvalue2)

        
       

        if(emailRegex.test(email)){
            if(regularExpression.test(passwords)){
                // alert("Login successfully!");

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var raw = JSON.stringify({
                    email: email,
                    passwords: passwords,



                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                // fetch("http://localhost:8099/login", requestOptions)
                //     .then(response => response.json())
                //     .then(result => {
                //         console.log("res", result);
                //         // localStorage.setItem('id', result.description[0]._id)

                //         // console.log("logid", result.description[0]._id)  
                //     })
                
        
      


                    fetch("http://localhost:8099/login", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        console.log("res", result);
                        localStorage.setItem('id', result.description[0]._id)

                        console.log("logid",result.description[0]._id)                      
                

                        // localStorage.setItem("id",(result.description[0]._id));
                        // console.log("cusvalu", result.description[0]._id)
                        // console.log("setlocal", localStorage.setItem)
                        if (result.status === true) {
                            alert("login succefully !")


                          

                            // toast.success("Login success",

                            //     {
                            //         position: "top-center",
                            //         autoClose: 5000,
                            //         hideProgressBar: false,
                            //         closeOnClick: true,
                            //         pauseOnHover: true,
                            //         draggable: true,
                            //         progress: undefined,
                            //         theme: 'dark',
                            //     });
                            // <Nextlog/>

                            navigate('/home');
                          
                          

                               
                          


                                    // console.log("dsfsdf",productvalue1)

                        }
                        else {
                            // toast.error('error', {
                            //     position: "top-left",
                            //     autoClose: 5000,
                            //     hideProgressBar: false,
                            //     closeOnClick: true,
                            //     pauseOnHover: true,
                            //     draggable: true,
                            //     progress: undefined,
                            //     theme: 'dark',
                            // });
                            alert("error")
                        }

                    })              

            }else{
                // toast.error('Enter Password!', {
                //     position: "top-right",
                //     transition: Flip,
                //     theme: 'light',
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined
        
                // });
                alert("Enter password")

            }
        }else{
            // toast.error('Enter Valid Email!', {
            //     position: "top-right",
            //     transition: Slide,
            //     theme: 'light',
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined
    
            // });
            alert("Enter valid email")

        }



    }
    return (
        <div>
            {/* <div className='container-fluid'>
                <div className=' row heade1'>

                    <div className='col-md-3 imag'>
                        <img className='logimg' src={Image1} alt="logo.png" ></img>
                    </div>

                    <div className='col-md-9 heade'>
                        <p className='hed'>FREE DOMESTIC SHIPPING ON ALL ORDERS</p>
                    </div>

                </div>
            </div> */}

            <div className='container loginContainer'>
                <div className='row'>
                    <div className='col-md-4'>

                    </div>

                    <div className='col-md-8'>
                        <img src={Image1} alt="newlogo"></img>
                    </div>
                </div>

                <div className='row'>
                    {/* <div className='col-md-4'></div>
                    <div className='col-md-8'> */}
                        <p className='log3'>LOG IN</p>
                    {/* </div> */}
                </div>

                <div className='row'>
                    <div className='col-md-2'></div>
                    {/* <div className='col-md-2'>
                        <label className='useremail'>Email</label><br />
                    </div> */}
                    <div className='col-md-10'>
                        <input className='emaillog' type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}/>

                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-2'></div>
                    {/* <div className='col-md-2'>
                        <label className='userpwd'>Password</label><br />
                    </div> */}
                    <div className='col-md-10'>
                        <input className='pwdlog' type='password' placeholder="Please enter Password" value={passwords} onChange={(e) => setpasswords(e.target.value)}  />

                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-7'></div>
                    <div className='col-md-5'>
                        <a href="#forget" className='forgetLog'>Forget Password?</a>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-4'> </div>
                    <div className='col-md-8'>
                        <p className='creatlog'> Don't have an Account? <a href="/signup" className='linkForget'>SIGNUP</a> </p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-4'>
                    </div>
                    <div className='col-md-8'>
                        <button className='submit' onClick={Clicking}>Submit</button>
                    </div>
                </div>           
            </div>
            {/* <ToastContainer /> */}
        </div>





    )
}

export default Login