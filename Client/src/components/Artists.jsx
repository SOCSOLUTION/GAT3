import React from 'react'
import { tns } from 'tiny-slider';

import {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Artists() {
  
  useEffect(() => {
    if (document.querySelectorAll('.featured-nfts-slide').length > 0) {
      tns({
          'container': '.featured-nfts-slide',
          'items': 4,
          'gutter': 24,
          'slideBy': 1,
          'autoplay': true,
          'autoplayButtonOutput': false,
          'autoplayTimeout': 5000,
          'speed': 900,
          'loop': true,
          'mouseDrag': true,
          'nav': false,
          'controls': true,
          'controlsPosition': 'top',
          'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
          'responsive': {
              320: {
                  'items': 1,
              },
              480: {
                  'items': 1.3,
              },
              576: {
                  'items': 1.5,
              },
              768: {
                  'items': 2.4,
              },
              992: {
                  'items': 3,
              },
              1200: {
                  'items': 3.5,
              },
              1400: {
                  'items': 4,
              }
          }
      });
  }
  //mobileDropdownMenu fucntion
  
//   function mobileDropdownMenu() {
//     let sbdropdown = document.querySelectorAll('.ft-dd').length;

//     if (sbdropdown > 0) {
//         let navUrl = document.querySelectorAll('.navbar-nav li ul');
//         let navUrlLen = navUrl.length;

//         for (let i = 0; i < navUrlLen; i++) {
//             navUrl[i].insertAdjacentHTML('beforebegin', '<div class="dropdown-toggler"><i class="bi bi-caret-down-fill"></i></div>');
//         }

//         let ddtroggler = document.querySelectorAll('.dropdown-toggler');
//         let ddtrogglerlen = ddtroggler.length;

//         for (let i = 0; i < ddtrogglerlen; i++) {
//             ddtroggler[i].addEventListener('click', function () {
//                 let ddNext = ddtroggler[i].nextElementSibling;
//                 slideToggle(ddNext, 300);
//             });
//         }
//     }
// }

// window.addEventListener('load', mobileDropdownMenu);
// sticky header


let navarToggler = document.querySelector('.navbar-toggler');
let header = document.querySelector('.header-area');

if (navarToggler) {
    navarToggler.addEventListener('click', function () {
        header.classList.toggle('mobile-menu-open');
        header.classList.add('sticky-on');
     
    });
}

if (header) {
    function stickyNavigation() {
        if (window.pageYOffset > 10) {
            header.classList.add('sticky-on');
        } else {
            header.classList.remove('sticky-on');
        }
    }

    window.addEventListener('load', stickyNavigation);
    window.addEventListener('scroll', stickyNavigation);
}

// :: Anchor Prevent Default

let anchor = document.querySelectorAll('a[href="#"]');
let anchorLength = anchor.length;

if (anchorLength > 0) {
    for (let i = 0; i < anchorLength; i++) {
        anchor[i].addEventListener('click', function (e) {
            e.preventDefault();
        });
    }
}


// :: Preloader

let preloader = document.getElementById('preloader');

if (preloader) {
    window.addEventListener('load', function () {
        let fadeOut = setInterval(function () {
            if (!preloader.style.opacity) {
                preloader.style.opacity = 1;
            }
            if (preloader.style.opacity > 0) {
                preloader.style.opacity -= 0.1;
            } else {
                clearInterval(fadeOut);
                preloader.remove();
            }
        }, 20);
    });
}
  }, []);
  return (
  
            <div>
              {/* Preloader*/}
            {/* <div className="preloader" id="preloader">
                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
              </div> */}
              {/* Header Area*/}
    
              {/* Breadcrumb */}
              <div className="breadcrumb-wrapper">
                <div className="container">
                  <div className="breadcrumb-content justify-content-center">
                    <h2 className="breadcrumb-title">Artists</h2>
                 
                  </div>
                
                </div>
                <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a >Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Artists</li>
                      </ol>
                    </nav>
              </div>
              <div className="divider" />
              <div className="seller-wrapper">
                <div className="container">
                  <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u1.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#1</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to="/artist_details">socsols<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><Link className="author d-block fz-14 hover-primary text-truncate" >@designing_world</Link>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.3 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />637 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u2.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#2</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Art World<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@art_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.8 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />671 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u3.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#3</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Style Wear<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@style_wear</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.8 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />599 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u4.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#4</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>socsols<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@designing_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.1 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />478 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u1.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#5</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Art World<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@art_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.3 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />411 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u2.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#6</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Style Wear<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@style_wear</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.1 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />379 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u3.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#7</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>socsols<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@designing_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.2 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />349 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u4.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#8</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Art World<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@art_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">1 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />330 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u1.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#9</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Style Wear<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@style_wear</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">.12 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />290 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u2.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#10</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>socsols<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@designing_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.1 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />246 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u3.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#11</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Art World<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@art_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.4 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />239 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u4.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#12</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Style Wear<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@style_wear</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.7 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />199 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u1.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#13</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>socsols<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@designing_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.9 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />156 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u2.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#14</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Art World<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@art_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.7 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />155 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u3.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#15</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Style Wear<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@style_wear</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.8 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />149 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u4.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#16</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>socsols<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@designing_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.8 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />145 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u1.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#17</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Art World<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@art_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.9 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />144 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u2.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#18</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Style Wear<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@style_wear</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.2 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />138 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u3.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#19</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>socsols<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@designing_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.2 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />135 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u4.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#20</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Art World<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@art_world</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.4 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />133 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
                      {/* Single Card */}
                      <div className="nft-card card seller-card shadow-sm">
                        <div className="abab card-body">
                          <div className="row align-items-center g-3">
                            <div className="col-4">
                              <div className="img-wrap"><img src="img/bg-img/u1.jpg" alt="" />
                                <div className="badge bg-danger position-absolute px-2 py-1">#21</div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="name-author"><Link className="name d-block hover-primary fw-bold text-truncate" to={"/artist_details"}>Style Wear<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></Link><a className="author d-block fz-14 hover-primary text-truncate" >@style_wear</a>
                                {/* <div className="price-bid d-flex align-items-center mt-3">
                                  <div className="price me-3">
                                    <h6 className="mb-0 d-inline-block fz-14 border border-2 rounded py-1 px-2">0.5 ETH</h6>
                                  </div>
                                  <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />134 Items</p>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider" />
              {/* Dark Light Wrapper */}
              {/* Footer */}
      
              {/* Scroll To Top */}
              <div id="scrollTopButton"><i className="bi bi-arrow-up-short" /></div>
              {/* All JavaScript Files*/}
            </div>
        
  )
}

export default Artists