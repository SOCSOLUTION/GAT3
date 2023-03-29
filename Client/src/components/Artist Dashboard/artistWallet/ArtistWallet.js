import React from 'react'
import ArtistHeader from '../artistHeader/ArtistHeader'
import { Link } from 'react-router-dom'
const ArtistWallet = () => {
  return (
    <div>
    {/* Preloader*/}
    {/* <div className="preloader" id="preloader">
      <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
    </div> */}
    {/* Header Area*/}
    <header className="header-area">
     <ArtistHeader></ArtistHeader>
    </header>
    {/* Admin Sidebar Wrap */}
    {/* Create New Button */}
    <div className="create-new-button"><Link className="shadow-lg btn btn-warning" to="/artistcreatenft" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg" /></Link></div>
    <div className="admin-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h4 className="mb-3">Your current wallet</h4>
          </div>
          <div className="col-12 col-xl-7 col-xxl-6">
            <div className="card wallet-card shadow-sm">
              <div className="card-body px-4 text-center">
                <div className="d-flex align-items-center">
                  <div className="img-wrap"><img src="img/bg-img/metamask.png" alt="" /></div>
                  <h4 className="mb-0 me-3">Metamask</h4><a className="btn btn-sm btn-danger rounded-pill ms-auto" >Change</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <div className="text-center">
              <h4 className="mb-4 mt-5">Connect with one of our other available wallet providers.</h4>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="card wallet-card shadow-sm">
              <div className="card-body px-4">
                <div className="d-flex align-items-center">
                  <div className="img-wrap"><img src="img/bg-img/metamask.png" alt="" /></div>
                  <h4 className="mb-0 me-3">Metamask<span className="badge bg-danger rounded-pill align-top fz-12 ms-1">Hot</span></h4><a className="btn btn-sm btn-warning rounded-pill ms-auto" >Connect<i className="ms-1 bi bi-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="card wallet-card shadow-sm">
              <div className="card-body px-4">
                <div className="d-flex align-items-center">
                  <div className="img-wrap"><img src="img/bg-img/coinbase.png" alt="" /></div>
                  <h4 className="mb-0 me-3">Coinbase Wallet</h4><a className="btn btn-sm btn-warning rounded-pill ms-auto" >Connect<i className="ms-1 bi bi-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="card wallet-card shadow-sm">
              <div className="card-body px-4">
                <div className="d-flex align-items-center">
                  <div className="img-wrap"><img src="img/bg-img/kaikas.png" alt="" /></div>
                  <h4 className="mb-0 me-3">Kaikas</h4><a className="btn btn-sm btn-warning rounded-pill ms-auto" >Connect<i className="ms-1 bi bi-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="card wallet-card shadow-sm">
              <div className="card-body px-4">
                <div className="d-flex align-items-center">
                  <div className="img-wrap"><img src="img/bg-img/venly.png" alt="" /></div>
                  <h4 className="mb-0 me-3">Venly</h4><a className="btn btn-sm btn-warning rounded-pill ms-auto" >Connect<i className="ms-1 bi bi-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* All JavaScript Files*/}
  </div>
  )
}

export default ArtistWallet
