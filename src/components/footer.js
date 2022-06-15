import React from 'react'
import './footer.css'

function footer() {
    return (
        <div>
            <div className='container-fluid'>

                
                <div className='row'>
                    <div className='col-md-6'>

                    <div className='row'>
                    <div className='col-md-12'>
                        <p className='join'>Join the SR200 Apparal Family</p>
                    </div>
                </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='daata'>Signup & Receive exclusive update, new arrivals and inside and insider-only offer!</p>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-md-8'>

                                <div >
                                    <div class="input-icons">
                                        {/* <input className='getFooterMail' type="mail" placeholder="Enter Email"   /> */}
                                        {/* <i class="fa fa-user icon"></i> */}
                                        <i class="fa fa-envelope icon" ></i>
                                        <input class="input-field" type="text" placeholder='Enter Email'></input>

                                    </div>
                                </div>

                            </div>

                            <div className='col-md-4'> </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-12 iconnn'>
                                <div className='icon1'> <i class="fa fa-facebook-square item1" aria-hidden="true"></i></div>
                                <div className='icon1'>  <i class="fa fa-twitter item2" aria-hidden="true"></i></div>
                                <div className='icon1'>  <i class="fa fa-instagram item3" aria-hidden="true"></i></div>
                                <div className='icon1'>  <i class="fa fa-linkedin item4 " aria-hidden="true"></i></div>
                                <div className='icon1'> <i class="fa fa-youtube-play item5" aria-hidden="true"></i></div>




                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='copyri'>
                                    <i class="fa fa-copyright" aria-hidden="true"></i>
                                    <p className='copyright' >Blockchain Technologies 2022-ALL RIGHTS RESERVED</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer