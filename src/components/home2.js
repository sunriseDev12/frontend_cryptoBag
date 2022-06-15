import React from 'react'
import './app.css';
import logo1 from '../images/content.png';
import { connectWallet, connectFailed } from "../redux/WalletAction";


import bit from '../images/bit.png';

// import { Slider, RangeSlider } from 'rsuite';
import "rc-slider/assets/index.css";
import Slider, { createSliderWithTooltip } from "rc-slider";

import { useSelector } from "react-redux";


import { useState,useEffect } from 'react';
import axios from 'axios';
import { promises } from 'stream';





const Home = () => {



  const wallet = useSelector((state) => state.WalletConnect);
  const [value, setValue] = useState(0);
  const[lists,setlists]=useState([])
  const [days, setDays] = useState(0);
  const [APR1, setAPR1] = useState(0);
  const [currestimatedreward, setCurrestimatedreward] = useState(0);
  const [stakeUsdtValue, setStakeUsdValue] = useState(0);
  const [price, setPrice] = useState();
  const [rewardUsdtValue, setRewardUsdtValue] = useState(0);
  const [amount1, setamount1] = useState(0);
  const[rewardUsdtValue1,setRewardUsdtValue1]=useState(0);
  const [currentAPR,setCurrentAPR]=useState(0);
  const [walletAddress, setWalletAddress] = useState("");
  const [approved,setApproved]=useState(false);
  const[gridData,setGridData]=useState([]);
  const [totaltoken,settotaltoken]=useState(100000000)
  const[stakeRecords,setStakeRecords]=useState([])
console.log('price',price)




// async function requestAccount() {
//   console.log('Requesting account...');

//   // ❌ Check if Meta Mask Extension exists 
//   if(window.ethereum) {
//     console.log('detected');

//     try {
//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       setWalletAddress(accounts[0]);
//     } catch (error) {
//       console.log('Error connecting...');
//     }

//   } else {
//     alert('Meta Mask not detected');
//   }
// }

// // Create a provider to interact with a smart contract
// async function connectWallet() {
//   if(typeof window.ethereum !== 'undefined') {
//     await requestAccount();

//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//   }
// }






// useEffect(()=>{
//   const ele = document.querySelector('.buble');
// if (ele) {
//   ele.style.left = `${Number(days / 4)}px`;
// }
// })



const approval = async() =>{
  const{address,pktoken,web3}=wallet;
  console.log("web3",web3)
  console.log("p",pktoken)
  const tokenAmount=web3.utils.toWei('99999999','ether');
  const StakingContractAddress="0xDF1Cb9FeeCB719a6663fd77f06E0b726eE5c170a" ;
  const approval = await pktoken.methods.approve(StakingContractAddress,tokenAmount).send({
    from:address
  })
  setApproved(true)
console.log("approve")
}
// useEffect(()=>{
// getStakeRecords();
// },[])

const getStakeRecords= async() => {
  const{web3,pkStaking,address}=wallet;
  console.log('stak',pkStaking)
  const totalStakeRecord=await pkStaking.methods.totalStakeRecords(address).call();
  const stakersPromises=[];
  for(let i=0;i< totalStakeRecord;i++){
    stakersPromises.push(pkStaking.methods.stakers(address,i).call());
  }
  let array=[]
  Promise.all(stakersPromises).then(async(res)=>{
    await Promise.all(res.map(async(data,i)=>{
      data.balance=web3.utils.fromWei(data.balance,'ether');
      let earningperstak=await pkStaking.methods.earned(address,i).call();
      data.rewardEarned=web3.utils.fromWei(earningperstak,'ether').split('.')[0];
      data.apr=web3.utils.fromWei(data.apr,"")
      const time=Math.floor(Math.floor(data.maxtime -(Date.now()/1000))/(60));
      data.timeleft= time< -1 ? -1 :time;
      console.log('data',data); 
      array.push(data);
      console.log('array',array);

    }));
    setGridData(array)
    if(res.length>0){
      setStakeRecords(res);
    }

  })
  
}
 const stakePk= async()=>{

   if(value>0 && days>0){
     const{web3,pkStaking,address}=wallet;
     console.log("s",pkStaking)
     const tokenAmount=web3.utils.toWei(value.toString(),'ether');
     const stake=await pkStaking.methods.stakeTok(tokenAmount,days).send({from:address});
     await getStakeRecords();
   }else{
     alert('amount of Pk or days should be more than 0!')
   }
     console.log("error")
   }
 

   const unstake=async(record)=>{
     const{pkStaking,address}=wallet;
     const instance=pkStaking;
     console.log('insta',instance)
     if(isTimeEnded(record,instance)){
       const exit=await instance.methods.exit(record).send({from:address});
     }else{
       const unstak=await instance.methods.unstake(record).send({from:address});
     }
     await getStakeRecords();

   }
const isTimeEnded=async(record,instance)=>{
  const{address}=wallet;
  const stakerDetails=await instance.methods.stakers(address,record).call();
  console.log("det",stakerDetails);
  if(parseInt(stakerDetails.maxtime)<= Math.ceil(Date.now()/1000)){
    console.log('parse',stakerDetails.maxtime)
    console.log("parse2", Math.ceil(Date.now()/1000))
    return true;
  }
  return false;
}
const canUnstake = (data) =>{
  console.log('time',data.maxtime);
  return !(data.maxtime < (Date.now()/1000) );
}
const claimReward=async(record)=>{
  const{address,pkStaking}=wallet;
  const instance=pkStaking;
  if(await isTimeEnded(record,instance)){
    const exit=await instance.methods.getReward(record).send({from:address});

  }else{
    const claimReward=await instance.methods.getReward(record).send({from:address});
    console.log('reward',claimReward)
  }
  await getStakeRecords();
}



const userdetails = async () =>{
  const { connected } = wallet;
   if (!connected) {
    await connectWallet();
    await connectFailed();
   }}
   useEffect( ()=>{  
    userdetails()
    if(wallet.connected){
      if(!(lists.length > 0)) {
        fetchTransactionHistory()
        getStakeRecords();
      }
    }
 },[wallet.connected])

  function handleChange(e) {
    calculateReward(e.target.value);
  }
  function handleDays(e) {
    calculateAPR(e.target.value);
  }
  useEffect(()=>{  
    let currentAPR = calculateAPR(days);
     setCurrentAPR(currentAPR);
  })
  const getPrices=async()=>{
    const result=await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=lockness&vs_currencies=usd');
  console.log(result);
const data=result.data.lockness.usd;
setPrice(data);
  }
  useEffect(()=>{
    getPrices();
    transactioninfo();
},[wallet.connected])
const timeconvert = (unix_timestamp)=>{

  var date = new Date(unix_timestamp * 1000);
  console.log(date)
  return date;

 
  }
  
const transactioninfo=async()=>{
//  const {address, web3} = wallet;
   
    

  const res=await axios.get('https://api-rinkeby.etherscan.io/api',{
    params:{
      module:'logs',
      action:'getLogs',
      address:'0x8513b037e0817d8fef9c00bbc16278645ac353cb',
      topic0:'0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
      apiKey:'2GK5EHDSYE1QAMI9HD86IIZU72XD2YIYFR',
    }

  });
  return res.data.result;
 // var result = res.data.result;
  //console.log("result",result);
}
  // const trans=res.data.result;
  const fetchTransactionHistory=async()=>{
    const {address,web3}=wallet;
    const transactionHistory=[];
    transactioninfo().then(async(resultArray)=>{
      console.log("resultArray",resultArray);
  
    const reversedList = resultArray.map((e,i, a)=> a[(a.length -1) -i])
    console.log("datassforreverslist",reversedList)
    await Promise.all(reversedList.map(async(event,i)=>{
      const valuee = event.topics[1]
      // console.log('valuee',valuee)
      // console.log('web3',web3)
      const returnAddress = web3.utils.toChecksumAddress('0x' + valuee.slice(-40));
      console.log("returnaddress",returnAddress)
      const transactionHash = event.transactionHash;
      const amount = parseFloat(web3.utils.fromWei(web3.utils.hexToNumberString(event.data), 'ether')).toFixed(2);
     const timess = parseInt(event.timeStamp,16)*1000;
  
    var time = (String (new Date(timess))).slice(4,25);

  
      const transaction = {transactionHash, amount, time,index: i+1,address:returnAddress};
      transactionHistory.push(transaction);

  
    }));
    var resultData=transactionHistory;
    setlists( resultData);
    console.log("res",resultData)
  });
}
  
 

  const calculateAPR = (days) => {
    setDays(days);
    let APR1 = (days * 0.1) +50;//(amount *30/100)365
    setAPR1(APR1.toFixed(3));
    calculateReward(value);
    console.log('reward'.calculateReward)
  }
  const calculateReward = (amount) => {
    setValue(amount);
    console.log("amount",amount);
    let amount1 = (amount * APR1) / 100;
    console.log("amount1",amount1)
    setamount1(amount1.toFixed(2));
  
    let stakeUsdtValue = (value * price).toFixed(2);
    setStakeUsdValue(stakeUsdtValue);

    let rewardUsdtValue1 = (amount1 * price).toFixed(2);
    setRewardUsdtValue1(rewardUsdtValue1);

    let currestimatedreward = ((amount1 / 365) * days);
    currestimatedreward = (Math.floor(currestimatedreward));
    setCurrestimatedreward(currestimatedreward)
    setRewardUsdtValue(currestimatedreward * price)
    console.log("cur",currestimatedreward);

   
  }
  function alertt(){
    alert("click the Approve button")
  }



  return (
    <div className='container-fluid'>
      
      <hr />
      <div className='row'>
        <div className='col-md-4 hover'>
          <img src={logo1} className='imgg' width="380px" height="465px" />
        </div>
        <div className='col-md-7'>
        <div className='row border-11 '>
        
              {gridData.map((data,i)=>
              {
                if(data.balance!=='0'){
                  return(
              <>
                    
                    <div className='col-md-5 pad'>
                    <h4>PK Bounty</h4>
                    <div className='total mb pl'>
                    <h6>Total Stake</h6><h6 className='pl ml'>{data.balance} PK</h6>....<h6 className='pl'>{(data.apr*totaltoken).toFixed(2)}%</h6>

                  </div>
                  <button className='mt button-2 ' key={i} style={{backgroundColor: !canUnstake(data)  ? '#fff94f':'#5b5c24'}}  disabled={canUnstake(data)} onClick={()=>unstake(i,false)}>Stake amount</button>
                </div>
                <div className='col-md-1 vl'></div>
                <div className='col-md-5 mt1'>
                <p className='apy_month' style={{color:"white"}}> <b>{data['3']} Days</b> &nbsp;&nbsp;<span> ({data.timeleft+1}) </span> Left </p>

                  <div className='total mb'>
                    <img src={bit} width='25px' height='25px' className='bit'></img><h6>{data.rewardEarned}</h6><span className='pl ml'>Rewards received</span>
                  </div>
                  <button className='mt button-3' onClick={()=>claimReward(i,false)}>Collect reward</button>
                </div>
               </>
                                )
                }
              })} 
               </div>
          
          <div className='row border-1 mt'>
            <div className='col-md-12'><h4>Select your rewards</h4></div>

            <div className='col-md-3'>


              <p className='font'>Your estimated rewards </p>
              <span className='total1 mb1 font1'><p className='fontcolor'>{currestimatedreward}</p><p className='fontcolor'>PK</p><p className='fontcolor'>{rewardUsdtValue1}</p><p className='fontcolor'>USD</p></span>
              <p className='font '>Current APY</p>
              <p className='font1 fontcolor'>{APR1}</p>

            </div>
            <div className='col-md-1 vl1'></div>
            <div className='col-md-8'>
              <span className='total2 '><p className='fontcol'>Your Stake</p><h5>Token<input className='input ' type='text'
                value={value ? value : '0'} min={0}
                max={30000000} onChange={(e) => handleChange(e)}></input>PK</h5><h5>{stakeUsdtValue} USD</h5></span> 
                <Slider className='mt2'
                   min={0}
                  max={30000000}
                  value={value}
                  onChange={(value) => { calculateReward(value); }}
                  railStyle={{
                    height: 4,
                    width: 480,
                    left: 20
                  }}
                  handleStyle={{
                    height: 20,
                    width: 20,
                    marginLeft: 10,
                    marginTop: -10,
                    backgroundColor: "#8d3bff",
                    border: 10
                  }}
                  trackStyle={{
                    background: "#c69dff"
                  }} />
              <span className='total2 mt1'><p className='fontcol'>Your days</p><h5><input className='input' type='number'  min='0'
                max='365'
                value={days} onChange={(e) => handleDays(e)}></input>Days</h5></span>
              <Slider className='mt2'
                min={0}
                max={365}
                value={days}
                onChange={(days) => { calculateAPR(days); }}
                railStyle={{
                  height: 4,
                  width: 480,
                  left: 20
                }}
                handleStyle={{
                  height: 20,
                  width: 20,
                  marginLeft: 10,
                  marginTop: -10,
                  backgroundColor: "#8d3bff",
                  border: 10
                }}
                trackStyle={{
                  background: "#c69dff"
                }} />
                <div className='total1 marleft'>
                                  {!approved && <button className='button4 marleft1' onClick={()=>wallet.connected ? approval() :alert('Connect to wallet')}>Approve Stake</button>}
              <button className='button4 marleft2' style={{backgroundColor: !approved  ? '#5b5c24':'#9432f4'}}disabled={!approved} onClick={()=>approved? stakePk():alert("approve tokens before staking")}>stake Reward</button>
</div>

            </div>
          </div>

        </div>
        <div className='col-md-12 bor'>
          <i class="fa-thin fa-arrow-up-arrow-down"></i>
          <h4>Transaction history</h4>
        </div>
        <div className='col-md-1'>
          <p>No</p>
        </div>
        <div className='col-md-3'>
          <p>hash</p>
        </div>
        <div className='col-md-2'>
          <p>wallet</p>
        </div>
        <div className='col-md-2'>
          <p>Usd</p>
        </div>
        
        <div className='col-md-4'>
          <p>Transaction date</p>
        </div>
        
        <div className='col-md-12 anyClass'>
          {lists.map((data)=>{
           const link= `https://rinkeby.etherscan.io/tx/${data.transactionHash}`;
            return(
              <div className=' row border-11 pdt'>
              <div className='col-md-1'>
                <p>{data.index}</p>
              </div>
              <div className='col-md-3'>
                <a href={link} target='_blank'>{data.transactionHash.slice(0,5)}.....{data.transactionHash.slice(-5)}</a>
              </div>
              <div className='col-md-2'>
                <p>{data.address.slice(0,5)}....{data.address.slice(-5)}</p>
              </div>
              <div className='col-md-2'>
                <p>{data.amount}</p>
              </div>
              
              <div className='col-md-4'>
                <p>{data.time}</p>
              </div>
            </div>

            )
          })}
         
        </div>
          
      </div>


    </div>
  )
}

export default Home