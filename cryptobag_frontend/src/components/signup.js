import React,{useState} from 'react'
// import Image1 from '../components/Assests/logoblack.jpg'
import Image1 from '../components/Assests/logo/newLogo.png'
import '../components/signup.css'

import { useNavigate } from 'react-router-dom';

function Signup() {

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const emailRegex = /\S+@\S+\.\S+/;
    const [passwords, setpasswords] = useState('');
    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const [conformpwds, setconformpwds] = useState('');
    const navigate = useNavigate();
   
function Submit(){

    if(fname!==''){
        if(lname!==''){
            if(emailRegex.test(email)){
                if(regularExpression.test(passwords)){
                    if(conformpwds===passwords){ 


                        
                var myHeaders = new Headers();

                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({

                    fname: fname,
                    lname:lname,
                    email: email,
                    passwords: passwords,

                });
                console.log("passvalue", passwords);
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };


                   



                        fetch("http://localhost:8099/register", requestOptions)
                        .then(response => response.json())
                        .then(result => {
                            console.log("res", result);
                            // localStorage.setItem('id', result.description[0]._id)
    
                            // console.log("logid",result.description[0]._id)                      
                    
    
                         
                            if (result.status === true) {
                                alert("register succefully pls login !")
    
    
                             alert("Login sucess")
                                // <Nextlog/>
    
                                navigate('/');
    
                            }
                            else {
                                alert("error")
                            }
    
                        })    


                    }else{
  // confo              
  
                   
                        alert("Check the conform password!")
                    }
                  

                }else
            // pwd
        {
           
                alert("Enter Password!")
    
           
        }

            }else
            // 3email
            {
               
                    alert("Enter Valid Email!")
            }

        }else
        // 2
        {
            
                alert("Enter Last Name!")
        }
    }else{
        
            alert("Enter First Name!")
    }

}


    return (
        <div className='holeSignup'>         


            <div className='container signContainer'>

            <div className='row'>
                    <div className='col-md-4'>
                    </div>

                    <div className='col-md-8 logCreate'>
                        <img src={Image1} alt="newlogo"></img>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-md-4'></div>

                    <div className='col-md-8'>
                        <p className='signHead'>CREATE ACCOUNT</p>
                    </div>

                </div>

                <div className='row'>

                    <div className='col-md-3'></div>
                    {/* <div className='col-md-3'>
                        <label className='getFirstname'>First Name</label><br />
                    </div> */}

                    <div className='col-md-9'>
                        <input className='getFirstnameInput' type="text" placeholder="First Name" value={fname} onChange={(e) => setfname(e.target.value)}  />
                    </div>

                </div>


                <div className='row'>

                    <div className='col-md-3'></div>
                   

                    <div className='col-md-9'>
                        <input className='getLastnameInput' type="text" placeholder="Last Name" value={lname} onChange={(e) => setlname(e.target.value)} />
                    </div>

                </div>


                <div className='row'>

                    <div className='col-md-3'></div>
                    {/* <div className='col-md-3'>
                        <label className='getEmail'>Email</label><br />
                    </div> */}

                    <div className='col-md-9'>
                        <input className='getEmailInput' type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>

                </div>

                <div className='row'>
                    <div className='col-md-3'></div>
                    {/* <div className='col-md-3'>
                        <label className='getPassword'>Password</label><br />
                    </div> */}

                    <div className='col-md-9'>
                        <input className='getPasswordInput' type="password" placeholder="Password" value={passwords} onChange={(e) => setpasswords(e.target.value)} />
                    </div>
                </div>

                <div className='row'>

                    <div className='col-md-3'></div>
                    {/* <div className='col-md-3'>
                        <label className='getConformPassword'>Conform Password</label><br />
                    </div> */}

                    <div className='col-md-9'>
                        <input className='getConformPasswordInput' type="password" placeholder="Confirm Password" value={conformpwds} onChange={(e) => setconformpwds(e.target.value)}  />
                    </div>

                </div>

                <div className='row'>
                    <div className='col-md-4'> </div>
                    <div className='col-md-8'>
                        <p className='creatlog2'>Already have an account? <a href="/" className='linkForget2'>LOGIN</a> </p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-8'>
                        <button className='regbtn' onClick={Submit}>SIGNUP</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup