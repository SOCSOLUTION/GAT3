import React from 'react'
import { Link } from 'react-router-dom'
const AdminAllSellerCard = () => {
  return (
    <div className="col-12 col-sm-6 col-xl-4 col-xxl-3">
    {/* Featured Card */}
    <div className="nft-card card border-0">
      <div className="card-body">
        <div className="img-wrap"><img src="img/bg-img/9.jpg" alt="" />
          {/* Badge */}
          <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Artist</div>
          {/* Dropdown */}
          <div className="dropdown">
            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownw892" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
            {/* Dropdown Menu */}
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownw892">
              <li><a className="dropdown-item" ><i className="me-1 bi bi-share" />Share</a></li>
              <li><a className="dropdown-item" ><i className="me-1 bi bi-flag" />Report</a></li>
              <li><a className="dropdown-item" ><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
            </ul>
          </div>
          {/* Bid End */}
          {/* <div className="bid-ends" data-date="March 31, 2023 14:19:54">
            <div><span className="days" /><span>Days</span></div>
            <div><span className="hours" /><span>Hours</span></div>
            <div><span className="minutes" /><span>Min</span></div>
            <div><span className="seconds" /><span>Sec</span></div>
          </div> */}
        </div>
        {/* Others Info */}
       
        {/* Meta Info */}
        <div className="row gx-2 align-items-center mt-2">
          <div className="col-8">
            <div className="name-info d-flex align-items-center">
              <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
              <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate"  data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">Fancy Car</a><Link className="author d-block fz-12 hover-primary text-truncate" to="/sellerdetails">@fancy_car</Link></div>
            </div>
          </div>
          {/* <div className="col-4">
            <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
              <h6 className="mb-0">0.784 ETH</h6>
            </div>
          </div> */}
          <div className="col-12"><Link to="/sellerdetails" className="btn btn-danger rounded-pill btn-sm mt-3 w-100" ><i className="me-1 bi bi-eye" />Artist NFT's</Link></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminAllSellerCard
