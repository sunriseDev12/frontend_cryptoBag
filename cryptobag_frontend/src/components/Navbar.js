import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectWallet, connectFailed } from "../redux/WalletAction";
import log from './Assests/logo/logoNewWhite.png'
import './newnav.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const dispatch = useDispatch();
    const wallet = useSelector((state) => state.WalletConnect);
    console.log(wallet);

    const connect = () => {
        console.log('connect');
        dispatch(connectWallet());
    }

    const errorDiv = () => {
        return (
            <p>Wallet Disconnected!</p>
        )
    }
    const disconnect = () => {
        const { web3Modal } = wallet;
        web3Modal.clearCachedProvider();
        dispatch(connectFailed(errorDiv()));
    }


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
    
    return (
        <nav className='navbar navbar-expand-lg body'>
            <div className="container">
            
        
            <img src={log} className='lognav' alt="logo"/>
          
        
                
          
                <div className="navbar navbar-collapse d-none d-md-block">
                    <div className="nav navbar-nav ms-auto ml-auto">
                        { !wallet.connected &&  
                                <button className='btn btn-primary' onClick={connect}>Connect Wallet</button> 
                            }
                        { wallet.connected && 
                            <button className='btn btn-danger' onClick={disconnect}>Disconnect: {wallet.address.slice(0, 5) + '...' + wallet.address.slice(-5)}</button>
                        }
                    </div>
                </div>

<div className="icooo">
                <i className="fa fa-shopping-cart ccart" aria-hidden="true" onClick={CartPage}></i>
          <i className="fa fa-sign-out signoout" aria-hidden="true" onClick={Logout}></i>
          <i className="fa fa-user profiles" onClick={NextPage}></i>
          </div>
            </div>
        </nav>
    );
}

export default Navbar;