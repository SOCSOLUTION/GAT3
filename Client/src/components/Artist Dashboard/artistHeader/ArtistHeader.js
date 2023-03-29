import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const ArtistHeader = () => {
  const location = useLocation();

  const [show, setShow] = useState("");
  const handleShow = () => {
    if (show === "active") {
      setShow("");
      console.log("hide");
    } else {
      setShow("active");
      console.log("show");
    }
  };
  useEffect(() => {}, [show]);

  var items = sessionStorage.getItem('fullname')
  var image = sessionStorage.getItem('image')
  return (
    <div className={`dashboard-header-${show}`}>
      <header className="header-area dashboard-header px-0 px-sm-0">
        <nav
          style={{ backgroundColor: "#383737" }}
          className="navbar navbar-expand-lg"
        >
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              {/* Brand Logo */}
              <div className="admin-logo me-1 me-sm-3">
                <img src="img/core-img/dashboard-logo.png" alt="" />
              </div>
              {/* Search Form */}
              <div className="search-form position-relative d-flex align-items-center">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
                <button className="position-absolute" type="submit">
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
            {/* Header Meta */}
            <div className="header-meta d-flex align-items-center">
              {/* Notification */}
              <div className="user-dropdown dropdown mx-2 mx-sm-3">
                <button
                  className="btn dropdown-toggle user-btn"
                  id="dd10"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="img/core-img/notification.png" alt="" />
                </button>
                <ul
                  className="dropdown-menu noti-dd-menu dropdown-menu-end mt-3"
                  aria-labelledby="dd10"
                >
                  <li>
                    <a className="dropdown-item" >
                      <i className="me-2 bi bi-percent" />
                      You have an offer!
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" >
                      <i className="bg-info me-2 bi bi-tags" />
                      Congratulations! You sale an item.
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" >
                      <i className="bg-danger me-2 bi bi-gift" />
                      January freebies have arrived.
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" >
                      <i className="bg-warning me-2 bi bi-star" />A new rating
                      has been received.
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item justify-content-center"
                      
                    >
                      View all notifications
                    </a>
                  </li>
                </ul>
              </div>
              {/* User Dropdown */}
              <div className="user-dropdown dropdown">
                <button
                  className="btn dropdown-toggle user-btn"
                  id="dd20"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="img/core-img/user.png" alt="" />
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end mt-3"
                  aria-labelledby="dd20"
                >
                  <li>
                    <a className="dropdown-item" >
                      <i className="me-2 bi bi-person-circle" />
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" >
                      <i className="me-2 bi bi-hammer" />
                      My bids
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" >
                      <i className="me-2 bi bi-collection" />
                      Collection
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" >
                      <i className="me-2 bi bi-gear" />
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
              {/* Menu Toggler */}
              <div
                onClick={handleShow}
                className="menu-toggler ms-2 ms-sm-3"
                id="dashboardMenuTrigger"
              >
                <i className="bi bi-list" />
              </div>
              {/* Button */}
              <Link
                className="btn btn-sm btn-danger rounded-pill ms-2 ms-sm-3 d-none d-sm-block"
                to="/"
              >
                <i className="bi bi-box-arrow-left me-1" />
                Logout
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* Admin Sidebar Wrap */}
      <div className="admin-sidebar-wrap" style={{backgroundColor:"black"}}>
        <div className="overflowY-scroll">
          {/* User Profile */}
          <div className="user-profile">
            {/* User Name */}
            <div className="user-name mb-5">
              <div className="d-flex align-items-center">
                <img src={image} alt="" />
                <div className="ms-3">
                  <h6 className="lh-1 text-dark fz-18">{items}</h6>
                  <span className="badge bg-primary fz-12">Premium User</span>
                </div>
              </div>
            </div>
            {/* Balance */}
            <div className="card shadow mb-5">
              <div className="card-body text-center p-4">
                <h6 className="mb-1">Current balance</h6>
                <h5 className="mb-0 text-dark d-flex align-items-center justify-content-center">
                  <img
                    className="me-1"
                    src="img/core-img/ethereum.png"
                    alt=""
                  />
                  <span className="counter">4.09685</span>
                  <span className="ms-2">ETH</span>
                </h5>
                <a
                  className="btn btn-warning rounded-pill btn-sm w-100 mt-3"
                  
                >
                  Recharge
                </a>
              </div>
            </div>
          </div>
          {/* Sidenav */}
          <div className="sidenav" >
            <ul >
              <li>Menu</li>
              <li>
                <Link className={location.pathname === "/artist_dashboard"?"active":""} to="/artist_dashboard">
                  <i className="bi bi-speedometer" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className={location.pathname === "/artistlivebids"?"active":""} to="/artistlivebids">
                  <i className="bi bi-hammer" />
                  Live Bids
                </Link>
              </li>
              <li>
                <Link className={location.pathname === "/mycollectionartist"?"active":""} to="/mycollectionartist">
                  <i className="bi bi-columns-gap" />
                  My Collections
                </Link>
              </li>
              <li>
                <Link className={location.pathname === "/artistcreatenft"?"active":""}  to="/artistcreatenft">
                  <i className="bi bi-columns-gap" />
                  Create NFT
                </Link>
              </li>
              <li>
                <Link className={location.pathname === "/artistwallet"?"active":""}  to="/artistwallet">
                  <i className="bi bi-wallet2" />
                  My Wallet
                </Link>
              </li>
              {/* <li><a href="notifications.html"><i className="bi bi-bell" />Notifications</a></li> */}
              <li>
                <Link className={location.pathname === "/artistsettings"?"active":""}  to="/artistsettings">
                  <i className="bi bi-gear" />
                  Settings
                </Link>
              </li>
              {/* <li><a href="" aria-disabled><i className="bi bi-" />Create Nft</a></li> */}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="mt-5" />
            {/* Mode Switching */}
            {/* <div className="dark-light-mode">
              <input id="darkLightSwitch" type="checkbox" />
              <label className="shadow" htmlFor="darkLightSwitch">
                Toggle
              </label>
            </div> */}
            <div className="copywrite-text mt-4">
              <p className="mb-0 fz-14">
                2022 © All rights reserved by{" "}
                <a className="fz-14"  target="_blank">
                  Designing World
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistHeader;
