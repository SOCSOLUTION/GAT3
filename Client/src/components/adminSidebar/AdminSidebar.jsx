import React, {useState , useEffect} from 'react'
import { Link , useLocation } from 'react-router-dom'
const AdminSidebar = () => {
    const location = useLocation()
  return (
    <div className="admin-sidebar-wrap">
    <div className="overflowY-scroll">
      {/* User Profile */}
      <div className="user-profile">
        {/* User Name */}
        <div className="user-name mb-5">
          <div className="d-flex align-items-center"><img src="img/bg-img/u2.jpg" alt="" />
            <div className="ms-3">
              <h6 className="lh-1 text-dark fz-18">Designing W.</h6><span className="badge bg-primary fz-12">Admin</span>
            </div>
          </div>
        </div>
        {/* Balance */}
        <div className="card shadow mb-5">
          <div className="card-body text-center p-4">
            <h6 className="mb-1">Current balance</h6>
            <h5 className="mb-0 text-dark d-flex align-items-center justify-content-center"><img className="me-1" src="img/core-img/ethereum.png" alt="" /><span className="counter">4.09685</span><span className="ms-2">ETH</span></h5><a className="btn btn-warning rounded-pill btn-sm w-100 mt-3">Recharge</a>
          </div>
        </div>
      </div>
      {/* Sidenav */}
      <div className="sidenav">
        <ul>
          <li>Menu</li>
          <li><Link className={location.pathname === "/dashboard"?"active":""} to="/dashboard"><i className={`bi bi-speedometer`} />Dashboard</Link></li>
          <li><Link className={location.pathname === "/live_bid"?"active":""} to="/live_bid"><i className="bi bi-hammer" />Live Bids</Link></li>
          <li><Link className={location.pathname === "/allsellers"?"active":"" } to="/allsellers"><i className="bi bi-people" />All Artist</Link></li>
          <li><Link className={location.pathname === "/my_collections"?"active":""} to="/my_collections"><i className="bi bi-collection" />All Collections</Link></li>
          <li><Link className={location.pathname === "/create-nft"?"active":""} to="/create-nft"><i className="bi bi-columns-gap" />Create NFT</Link></li>
          <li><Link className={location.pathname === "/my_wallet"?"active":""} to="/my_wallet"><i className="bi bi-wallet2" />My Wallet</Link></li>
          {/* <li><a href="notifications.html"><i className="bi bi-bell" />Notifications</a></li> */}
          <li><Link className={location.pathname === "/sattings"?"active":""} to="/sattings"><i className="bi bi-gear" />Settings</Link></li>
          {/* <li><a href="" aria-disabled><i className="bi bi-" />Create Nft</a></li> */}
        </ul>
      </div>
      <div className="mt-auto">
        <div className="mt-5" />
        {/* Mode Switching */}
        {/* <div className="dark-light-mode">
          <input id="darkLightSwitch" type="checkbox" />
          <label className="shadow" htmlFor="darkLightSwitch">Toggle</label>
        </div> */}
        <div className="copywrite-text mt-4">
          <p className="mb-0 fz-14">2022 © All rights reserved by <a className="fz-14">SOC Solutions</a></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminSidebar
