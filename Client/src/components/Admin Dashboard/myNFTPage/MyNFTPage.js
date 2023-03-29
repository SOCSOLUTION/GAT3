import React,{useEffect , useRef, useState} from 'react'
import NFTCard from '../nFTCard/NFTCard'
import { ethers } from 'ethers'
const MyNFTPage = () => {
  const [record , setRecord] = useState([]);
  const dataFetchedRef = useRef(false);
  const CONTRACTABI = require('../../contracts/NFTMarketOne.json')
  const CONTRACTADDRESS = "0x356B43F15BedEC3AFEED64d48C366DFB11d206DB";
  const getMyNFT = async () => {
    setRecord([])
    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const myNfts = await new ethers.Contract(CONTRACTADDRESS,CONTRACTABI, provider);
    const getMyNfts =  await myNfts.connect(signer).getMyNfts();
    console.log(getMyNfts);
    for(let i = 0; i < getMyNfts.length; i++){
      //console.log(getMyNfts[i].tokenId.toString())
      await getTheTokenURI(getMyNfts[i].tokenId.toString() , getMyNfts[i].category.toString() )
    }

    console.log("Read From smart contract");
  };

  const getTheTokenURI = async (tokenId,category) => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const tokenURI = await new ethers.Contract(CONTRACTADDRESS,CONTRACTABI, provider);
    const getTokenURI =  await tokenURI.connect(signer).tokenURI(tokenId);
    console.log("Token URI of Token "+tokenId+ " which is "+getTokenURI);
    await fetch(getTokenURI)
    .then((response) => response.json())
    .then((data) => {console.log(data)
      let result = {
        name :data.name,
        image : data.image,
        description : data.description,
        price : data.price,
        category : category
      }
      setRecord(record=>[...record ,result])
    });
  }

  ////////////////////////////////////////////
  ////////////////////////////////////////////
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getMyNFT()
    console.log(record)
  });

  useEffect(() => {
    console.log(record)
  },[record]);
  const set = new Set(record);

  var items = sessionStorage.getItem('email');
  return (
    <div>
    {/* Admin Sidebar Wrap */}
    <div className="admin-sidebar-wrap">
      <div className="overflowY-scroll">
        {/* User Profile */}
        <div className="user-profile">
          {/* User Name */}
          <div className="user-name mb-5">
            <div className="d-flex align-items-center"><img src="img/bg-img/u2.jpg" alt="" />
              <div className="ms-3">
                <h6 className="lh-1 text-dark fz-18">{items}</h6><span className="badge bg-primary fz-12">Premium ppoooo</span>
              </div>
            </div>
          </div>
          {/* Balance */}
          <div className="card shadow mb-5">
            <div className="card-body text-center p-4">
              <h6 className="mb-1">Current balance</h6>
              <h5 className="mb-0 text-dark d-flex align-items-center justify-content-center"><img className="me-1" src="img/core-img/ethereum.png" alt="" /><span className="counter">4.09685</span><span className="ms-2">ETH</span></h5><a className="btn btn-warning rounded-pill btn-sm w-100 mt-3" href="dashboard.html#">Recharge</a>
            </div>
          </div>
        </div>
        {/* Sidenav */}
        <div className="sidenav">
          <ul>
            <li>Menu</li>
            <li><a  href="/dashboard"><i className="bi bi-speedometer" />Dashboard</a></li>
            <li><a className="active" href="/live_bid"><i className="bi bi-hammer" />Live Bids</a></li>
            <li><a href="/my_collections"><i className="bi bi-columns-gap" />My Collections</a></li>
            <li><a href="/create-nft"><i className="bi bi-columns-gap" />Create NFT</a></li>
            <li><a href="/my_wallet"><i className="bi bi-wallet2" />My Wallet</a></li>
            {/* <li><a href="notifications.html"><i className="bi bi-bell" />Notifications</a></li> */}
            <li><a href="/sattings"><i className="bi bi-gear" />Settings</a></li>
            {/* <li><a href="" aria-disabled><i className="bi bi-" />Create Nft</a></li> */}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="mt-5" />
          {/* Mode Switching */}
          <div className="dark-light-mode">
            <input id="darkLightSwitch" type="checkbox" />
            <label className="shadow" htmlFor="darkLightSwitch">Toggle</label>
          </div>
          <div className="copywrite-text mt-4">
            <p className="mb-0 fz-14">2022 © All rights reserved by <a className="fz-14" href="dashboard.html#" target="_blank">SOC Solution</a></p>
          </div>
        </div>
      </div>
    </div>
    {/* Create New Button */}
    <div className="create-new-button"><a className="shadow-lg btn btn-warning" href="create-new.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg" /></a></div>
    <div className="admin-wrapper">
      <div className="container">
        <h5 className="mb-3">My NFT's</h5>
        <div className="row g-4">
          {/*  */}
          {Array.from(set).map((product,index) => (
          <NFTCard name={product.name} key={index} image={product.image} description={product.description} category={product.category} price={product.price}/> 
          ))}
        </div>
      </div>
    </div>
    {/* All JavaScript Files*/}
  </div>
  )
}

export default MyNFTPage
