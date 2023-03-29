import React from 'react'

const AdminHeader = () => {
  return (
    <header  className="header-area">
    <nav  className="navbar navbar-expand-lg">
      <div className="container">
        {/* Navbar Brand */}<a className="navbar-brand" href="index.html"><img className="light-logo" src="img/core-img/logo.png" alt='img'/><img className="dark-logo" src="img/core-img/logo-white.png" alt='img'/></a>
        {/* Navbar Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#funtoNav" aria-controls="funtoNav" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-grid" /></button>
        {/* Navbar */}
        <div className="collapse navbar-collapse" id="funtoNav">
          <ul className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
            <li className="ft-dd"><a href="art.html">Art</a>
              <ul className="ft-dd-menu">
                <li><a href="artists.html">Artists</a></li>
                <li><a href="digitize.html">Digitize</a></li>
                <li><a href="exhibition.html">Exhibitions</a></li>
              </ul>
            </li>
            <li><a href="about-us.html">The Gat3s</a></li>
            <li><a href="join-us.html">Join us</a></li>
          </ul>
          {/* Header Meta */}
          <div className="header-meta d-flex align-items-center ms-lg-auto">
            {/* Search Form */}
            <div className="search-form position-relative d-flex align-items-center">
              <input className="form-control" type="text" placeholder="Search" />
              <button className="position-absolute" type="submit"><i className="bi bi-search" /></button>
            </div>
            {/* User Dropdown */}
            {/* <div class="user-dropdown dropdown mx-3">
          <button class="btn dropdown-toggle user-btn" id="dropdownMenuButton1" type="button"
            data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots"></i></button>
          <ul class="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="dashboard.html"><i class="me-2 bi bi-speedometer2"></i>Dashboard</a>
            </li>
            <li><a class="dropdown-item" href="my-collection.html"><i
                  class="me-2 bi bi-collection"></i>Collections</a></li>
            <li><a class="dropdown-item" href="notifications.html"><i class="me-2 bi bi-bell"></i>Notifications</a>
            </li>
            <li><a class="dropdown-item" href="settings.html"><i class="me-2 bi bi-gear"></i>Settings</a></li>
          </ul>
        </div> */}
            {/* Create New Button */}<a href='/dashboard' className="btn btn-warning btn-sm rounded-pill mx-3" >Connect Wallet</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default AdminHeader
