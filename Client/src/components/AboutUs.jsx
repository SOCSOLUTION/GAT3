import React from 'react'
import { tns } from 'tiny-slider';
// import slideToggle from "react-slide-toggle";
import {useEffect} from 'react';
// import AOS from 'react-aos'

function AboutUs() {
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


// :: Related Project Slide

if (document.querySelectorAll('.related-project-slide').length > 0) {
  tns({
      'container': '.related-project-slide',
      'items': 4,
      'gutter': 24,
      'slideBy': 1,
      'autoplay': true,
      'autoplayButtonOutput': false,
      'autoplayTimeout': 5000,
      'speed': 750,
      'loop': true,
      'mouseDrag': true,
      'controls': true,
      'nav': false,
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


// :: Client Feedback Slide

if (document.querySelectorAll('.client-feedback-content').length > 0) {
  tns({
      'container': '.client-feedback-slides',
      'items': 4,
      'gutter': 24,
      'slideBy': 1,
      'autoplay': false,
      'autoplayButtonOutput': false,
      'autoplayTimeout': 5000,
      'speed': 750,
      'loop': false,
      'mouseDrag': true,
      'controls': false,
      'navPosition': 'bottom',
      'autoHeight': true,
      'responsive': {
          320: {
              'items': 1
          },
          480: {
              'items': 1.7,
          },
          576: {
              'items': 2,
          },
          992: {
              'items': 3,
          },
          1200: {
              'items': 4,
          }
      }
  });
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
                    <h2 className="breadcrumb-title">About Us</h2>
                
                  </div>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a>Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                      </ol>
                    </nav>
                </div>
              </div>
              <div className="divider" />
              {/* About */}
              <div className="about-area">
                <div className="container">
                  <div className="row g-4">
                    <div className="col-12 col-sm-6 col-xl-3">
                      <div className="card about-card shadow-sm">
                        <div className="card-body py-4">
                          <div className="icon bg-success"><i className="bi bi-shield-fill-check" /></div>
                          <h4 className="mb-3">Trustworthy</h4>
                          <p className="mb-0">It's crafted with the latest trend of design &amp; coded with all modern approaches.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-3">
                      <div className="card about-card shadow-sm">
                        <div className="card-body py-4">
                          <div className="icon bg-primary"><i className="bi bi-shield-lock" /></div>
                          <h4 className="mb-3">Secure &amp; Safe</h4>
                          <p className="mb-0">It's crafted with the latest trend of design &amp; coded with all modern approaches.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-3">
                      <div className="card about-card shadow-sm">
                        <div className="card-body py-4">
                          <div className="icon bg-info"><i className="bi bi-people-fill" /></div>
                          <h4 className="mb-3">Loyal Customer</h4>
                          <p className="mb-0">It's crafted with the latest trend of design &amp; coded with all modern approaches.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-3">
                      <div className="card about-card shadow-sm">
                        <div className="card-body py-4">
                          <div className="icon bg-danger"><i className="bi bi-wallet2" /></div>
                          <h4 className="mb-3">Easy Wallet</h4>
                          <p className="mb-0">It's crafted with the latest trend of design &amp; coded with all modern approaches.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider" />
                <div className="container">
                  <div className="row g-4 g-xl-5 align-items-center justify-content-between">
                    <div className="col-12 col-lg-7 col-xl-6">
                      <h2 className="h2 fw-bold mb-3">Digital arts are trends now. Welcome to the world of NFTs.</h2>
                      <p className="fz-18">It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a
                        robust &amp; multi-dimensional usable template.</p><a className="btn btn-primary rounded-pill mt-4">Know More</a>
                    </div>
                    <div className="col-12 col-lg-5"><img className="rounded" src="img/illustrator/4.png" alt="" /></div>
                  </div>
                </div>
                <div className="divider" />
                <div className="divider" />
                <div className="container">
                  <div className="row g-4 g-xl-5 align-items-center justify-content-between">
                    <div className="col-12 col-lg-5"><img className="rounded" src="img/illustrator/4.png" alt="" /></div>
                    <div className="col-12 col-lg-7 col-xl-6">
                      <h2 className="h2 fw-bold mb-3">Explore, buy, and sell exceptional NFTs.</h2>
                      <p className="fz-18">It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a
                        robust &amp; multi-dimensional usable template.</p>
                      <p className="fz-18">It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a
                        robust &amp; multi-dimensional usable template.</p><a className="btn btn-primary rounded-pill mt-4">Explore</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider" />
              <div className="container">
                <div className="counter-wrap p-5 shadow border">
                  <div className="row g-4">
                    {/* Counter */}
                    <div className="col-6 col-md-3">
                      <div className="single-counter text-center">
                        <h4 className="counter h2 fw-bold">3409</h4>
                        <h6 className="mb-0">Total Items</h6>
                      </div>
                    </div>
                    {/* Counter */}
                    <div className="col-6 col-md-3">
                      <div className="single-counter text-center">
                        <h4 className="counter h2 fw-bold">7831</h4>
                        <h6 className="mb-0">Users</h6>
                      </div>
                    </div>
                    {/* Counter */}
                    <div className="col-6 col-md-3">
                      <div className="single-counter text-center">
                        <h4 className="counter h2 fw-bold">45236</h4>
                        <h6 className="mb-0">NFTs</h6>
                      </div>
                    </div>
                    {/* Counter */}
                    <div className="col-6 col-md-3">
                      <div className="single-counter text-center">
                        <h4 className="counter h2 fw-bold">247</h4>
                        <h6 className="mb-0">Daily Sale</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider" />
              {/* Client Feedback */}
              <div className="client-feedback-wrap">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-9 col-md-8 col-lg-7">
                      <div className="section-heading">
                        <h2>Read some reviews from our beloved clients about our work.</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="client-feedback-content">
                    <div className="client-feedback-slides">
                      {/* Single Feedback  */}
                      <div>
                        <div className="card feedback-card p-2">
                          <div className="card-body p-4">
                            <div className="client-info d-flex align-items-center">
                              <div className="client-thumb rounded-circle me-1 position-relative"><img className="rounded-circle" src="img/bg-img/u1.jpg" alt="" /></div>
                              <div className="client-name">
                                <h6 className="fz-16 mb-0">Designing World</h6>
                                <p className="mb-0 fz-14">@designing_world</p>
                              </div>
                            </div>
                            <div className="ratings text-warning mt-4 mb-3 fz-14"><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /></div>
                            <p className="text-dark mb-0 fw-bold">You've saved our business! Thanks guys, keep up the good work!</p>
                          </div>
                        </div>
                      </div>
                      {/* Single Feedback Slide */}
                      <div>
                        <div className="card feedback-card p-2">
                          <div className="card-body p-4">
                            <div className="client-info d-flex align-items-center">
                              <div className="client-thumb rounded-circle me-1 position-relative"><img className="rounded-circle" src="img/bg-img/u2.jpg" alt="" /></div>
                              <div className="client-name">
                                <h6 className="fz-16 mb-0">Designing World</h6>
                                <p className="mb-0 fz-14">@designing_world</p>
                              </div>
                            </div>
                            <div className="ratings text-warning mt-4 mb-3 fz-14"><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /></div>
                            <p className="text-dark mb-0 fw-bold">I strongly recommend to everyone interested in running a business!</p>
                          </div>
                        </div>
                      </div>
                      {/* Single Feedback Slide */}
                      <div>
                        <div className="card feedback-card p-2">
                          <div className="card-body p-4">
                            <div className="client-info d-flex align-items-center">
                              <div className="client-thumb rounded-circle me-1 position-relative"><img className="rounded-circle" src="img/bg-img/u3.jpg" alt="" /></div>
                              <div className="client-name">
                                <h6 className="fz-16 mb-0">Designing World</h6>
                                <p className="mb-0 fz-14">@designing_world</p>
                              </div>
                            </div>
                            <div className="ratings text-warning mt-4 mb-3 fz-14"><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /></div>
                            <p className="text-dark mb-0 fw-bold">Absolutely wonderful! I wish I would have thought of it first.
                              Excellent product!</p>
                          </div>
                        </div>
                      </div>
                      {/* Single Feedback  */}
                      <div>
                        <div className="card feedback-card p-2">
                          <div className="card-body p-4">
                            <div className="client-info d-flex align-items-center">
                              <div className="client-thumb rounded-circle me-1 position-relative"><img className="rounded-circle" src="img/bg-img/u4.jpg" alt="" /></div>
                              <div className="client-name">
                                <h6 className="fz-16 mb-0">Designing World</h6>
                                <p className="mb-0 fz-14">@designing_world</p>
                              </div>
                            </div>
                            <div className="ratings text-warning mt-4 mb-3 fz-14"><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /></div>
                            <p className="text-dark mb-0 fw-bold">You've saved our business! Thanks guys, keep up the good work!</p>
                          </div>
                        </div>
                      </div>
                      {/* Single Feedback  */}
                      <div>
                        <div className="card feedback-card p-2">
                          <div className="card-body p-4">
                            <div className="client-info d-flex align-items-center">
                              <div className="client-thumb rounded-circle me-1 position-relative"><img className="rounded-circle" src="img/bg-img/u1.jpg" alt="" /></div>
                              <div className="client-name">
                                <h6 className="fz-16 mb-0">Designing World</h6>
                                <p className="mb-0 fz-14">@designing_world</p>
                              </div>
                            </div>
                            <div className="ratings text-warning mt-4 mb-3 fz-14"><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /></div>
                            <p className="text-dark mb-0 fw-bold">You've saved our business! Thanks guys, keep up the good work!</p>
                          </div>
                        </div>
                      </div>
                      {/* Single Feedback Slide */}
                      <div>
                        <div className="card feedback-card p-2">
                          <div className="card-body p-4">
                            <div className="client-info d-flex align-items-center">
                              <div className="client-thumb rounded-circle me-1 position-relative"><img className="rounded-circle" src="img/bg-img/u2.jpg" alt="" /></div>
                              <div className="client-name">
                                <h6 className="fz-16 mb-0">Designing World</h6>
                                <p className="mb-0 fz-14">@designing_world</p>
                              </div>
                            </div>
                            <div className="ratings text-warning mt-4 mb-3 fz-14"><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /></div>
                            <p className="text-dark mb-0 fw-bold">I strongly recommend to everyone interested in running a business!</p>
                          </div>
                        </div>
                      </div>
                      {/* Single Feedback Slide */}
                      <div>
                        <div className="card feedback-card p-2">
                          <div className="card-body p-4">
                            <div className="client-info d-flex align-items-center">
                              <div className="client-thumb rounded-circle me-1 position-relative"><img className="rounded-circle" src="img/bg-img/u3.jpg" alt="" /></div>
                              <div className="client-name">
                                <h6 className="fz-16 mb-0">Designing World</h6>
                                <p className="mb-0 fz-14">@designing_world</p>
                              </div>
                            </div>
                            <div className="ratings text-warning mt-4 mb-3 fz-14"><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /></div>
                            <p className="text-dark mb-0 fw-bold">Absolutely wonderful! I wish I would have thought of it first.
                              Excellent product!</p>
                          </div>
                        </div>
                      </div>
                      {/* Single Feedback  */}
                      <div>
                        <div className="card feedback-card p-2">
                          <div className="card-body p-4">
                            <div className="client-info d-flex align-items-center">
                              <div className="client-thumb rounded-circle me-1 position-relative"><img className="rounded-circle" src="img/bg-img/u4.jpg" alt="" /></div>
                              <div className="client-name">
                                <h6 className="fz-16 mb-0">Designing World</h6>
                                <p className="mb-0 fz-14">@designing_world</p>
                              </div>
                            </div>
                            <div className="ratings text-warning mt-4 mb-3 fz-14"><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /></div>
                            <p className="text-dark mb-0 fw-bold">You've saved our business! Thanks guys, keep up the good work!</p>
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

export default AboutUs