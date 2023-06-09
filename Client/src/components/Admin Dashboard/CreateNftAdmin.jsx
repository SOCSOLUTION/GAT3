import React from 'react'
import { tns } from 'tiny-slider';
// import slideToggle from "react-slide-toggle";
import {useEffect,useState} from 'react';
import AdminSidebar from '../adminSidebar/AdminSidebar';

function CreateNftAdmin() {

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


// :: Trending Auction Slide

if (document.querySelectorAll('.trending-auction-slide').length > 0) {
  tns({
      'container': '.trending-auction-slide',
      'items': 2,
      'gutter': 24,
      'slideBy': 1,
      'autoplay': true,
      'autoplayButtonOutput': false,
      'autoplayTimeout': 5000,
      'speed': 750,
      'loop': true,
      'mouseDrag': true,
      'controls': false,
      'nav': false,
      'responsive': {
          320: {
              'items': 1,
          },
          576: {
              'items': 1.8,
          },
          768: {
              'items': 2.5,
          },
          992: {
              'items': 2,
          },
          1200: {
              'items': 2.5,
          },
          1400: {
              'items': 1.75,
          }
      }
  });
}

// :: Top Buyer Slide

if (document.querySelectorAll('.top-buyer-slide').length > 0) {
  tns({
      'container': '.top-buyer-slide',
      'items': 7,
      'gutter': 16,
      'slideBy': 1,
      'autoplay': true,
      'autoplayButtonOutput': false,
      'autoplayTimeout': 5000,
      'speed': 750,
      'loop': true,
      'mouseDrag': true,
      'nav': false,
      'controls': true,
      'controlsPosition': 'top',
      'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
      'responsive': {
          320: {
              'items': 3,
          },
          480: {
              'items': 4,
          },
          576: {
              'items': 5,
          },
          768: {
              'items': 4,
          },
          992: {
              'items': 4,
          },
          1200: {
              'items': 5,
          },
          1400: {
              'items': 7,
          }
      }
  });
}



  }, []);

  const [radioValue, setradioValue] = useState( );

  const handleClickNew = () =>{
    setradioValue(document.querySelector('#inlineRadio1').value)
  };

  const handleClick = () =>{
    setradioValue(document.querySelector('#inlineRadio3').value)
  };

  
  console.log(radioValue)


  return (
    
            <div>
              {/* Preloader*/}
              {/* <div className="preloader" id="preloader">
                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
              </div> */}
              {/* Header Wrapper */}
              <header className="header-area dashboard-header px-0 px-sm-0">
                <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid">
                    <div className="d-flex align-items-center">
                      {/* Brand Logo */}
                      <div className="admin-logo me-1 me-sm-3"><img src="img/core-img/dashboard-logo.png" alt="" /></div>
                      {/* Search Form */}
                      <div className="search-form position-relative d-flex align-items-center">
                        <input className="form-control" type="text" placeholder="Search" />
                        <button className="position-absolute" type="submit"><i className="bi bi-search" /></button>
                      </div>
                    </div>
                    {/* Header Meta */}
                    <div className="header-meta d-flex align-items-center">
                      {/* Notification */}
                      <div className="user-dropdown dropdown mx-2 mx-sm-3">
                        <button className="btn dropdown-toggle user-btn" id="dd10" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="img/core-img/notification.png" alt="" /></button>
                        <ul className="dropdown-menu noti-dd-menu dropdown-menu-end mt-3" aria-labelledby="dd10">
                          <li><a className="dropdown-item" href="dashboard.html#"><i className="me-2 bi bi-percent" />You have an offer!</a></li>
                          <li><a className="dropdown-item" href="dashboard.html#"><i className="bg-info me-2 bi bi-tags" />Congratulations! You sale an item.</a></li>
                          <li><a className="dropdown-item" href="dashboard.html#"><i className="bg-danger me-2 bi bi-gift" />January freebies have arrived.</a></li>
                          <li><a className="dropdown-item" href="dashboard.html#"><i className="bg-warning me-2 bi bi-star" />A new rating has been received.</a></li>
                          <li><a className="dropdown-item justify-content-center" href="notifications.html">View all notifications</a></li>
                        </ul>
                      </div>
                      {/* User Dropdown */}
                      <div className="user-dropdown dropdown">
                        <button className="btn dropdown-toggle user-btn" id="dd20" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="img/core-img/user.png" alt="" /></button>
                        <ul className="dropdown-menu dropdown-menu-end mt-3" aria-labelledby="dd20">
                          <li><a className="dropdown-item" href="dashboard.html"><i className="me-2 bi bi-person-circle" />Dashboard</a></li>
                          <li><a className="dropdown-item" href="live-bids.html"><i className="me-2 bi bi-hammer" />My bids</a></li>
                          <li><a className="dropdown-item" href="my-collection.html"><i className="me-2 bi bi-collection" />Collection</a></li>
                          <li><a className="dropdown-item" href="settings.html"><i className="me-2 bi bi-gear" />Settings</a></li>
                        </ul>
                      </div>
                      {/* Menu Toggler */}
                      <div className="menu-toggler ms-2 ms-sm-3" id="dashboardMenuTrigger"><i className="bi bi-list" /></div>
                      {/* Button */}<a className="btn btn-sm btn-danger rounded-pill ms-2 ms-sm-3 d-none d-sm-block" href="index.html"><i className="bi bi-eye me-1" />Frontend</a>
                    </div>
                  </div>
                </nav>
              </header>
              {/* Admin Sidebar Wrap */}
             <AdminSidebar></AdminSidebar>
              {/* Create New Button */}
              <div className="divider" />
              <div className="create-new-button"><a className="shadow-lg btn btn-warning" href="create-new.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg" /></a></div>
             <div className="admin-wrapper">
              <div className="create-new-wrapper">
                <div className="container">
                  <div className="row g-5 justify-content-center">
                    <div className="col-12 col-lg-8">
                      {/* Create New Form */}
                      <div className="create-new-form border shadow-sm p-4 p-sm-5">
                        <h2 className="mb-4">Create new NFT</h2>
                        <form action="digitize.html">
                          <div className="row align-items-center">
                            <div className="col-12">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="formFileMultiple">Upload Files</label>
                                <input className="form-control bg-transparent" id="formFileMultiple" type="file" multiple />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group mb-4">
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" id="inlineRadio1" onClick={()=> {handleClickNew()}}  type="radio" name="inlineRadioOptions" defaultValue="option1" defaultChecked />
                                  <label className="form-check-label" htmlFor="inlineRadio1">Fixed price</label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" id="inlineRadio2" type="radio" name="inlineRadioOptions" defaultValue="option2" />
                                  <label className="form-check-label" htmlFor="inlineRadio2">Unlock Purchased</label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" id="inlineRadio3" onClick={()=> {handleClick()}} type="radio" name="inlineRadioOptions" defaultValue="option3" />
                                  <label className="form-check-label" htmlFor="inlineRadio3">Open for bids</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="title">Title</label>
                                <input className="form-control" id="title" type="text" placeholder="Macaw Bird" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="description">Description</label>
                                <input className="form-control" id="description" type="text" placeholder="Write short description" />
                              </div>
                            </div>
                            { radioValue === "option3" ?
                            <div className="col-12 col-md-6">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="price">Price</label>
                                <input className="form-control" id="price" type="text" placeholder="0.324 ETH" disabled/>
                              </div>
                            </div> :
                            <div className="col-12 col-md-6">
                            <div className="form-group mb-4">
                              <label className="mb-2 fz-16" htmlFor="price">Price</label>
                              <input className="form-control" id="price" type="text" placeholder="0.324 ETH" />
                            </div>
                          </div>  }
                            <div className="col-12 col-md-6">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="catagories">Catagory</label>
                                <select className="filter-select2 border border-2 w-100 " id="catagories">
                                  <option selected value={1}>Art</option>
                                  <option value={2}>Cards</option>
                                  <option value={3}>Collectibles</option>
                                  <option value={4}>Domain</option>
                                  <option value={5}>Music</option>
                                  <option value={6}>Memes</option>
                                  <option value={7}>Photos</option>
                                  <option value={8}>Sports</option>
                                  <option value={9}>Videos</option>
                                  <option value={10}>Vitual Worlds</option>
                                </select>
                              </div>
                            </div>
                            {radioValue === "option3" ? <> 
                            <div className="col-12 col-sm-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="startingDate">Starting Date</label>
                                <input className="form-control" id="startingDate" type="date" />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="endingDate">Ending Date</label>
                                <input className="form-control" id="endingDate" type="date" />
                              </div>
                            </div> </> : 
                            <> 
                            <div className="col-12 col-sm-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="startingDate">Starting Date</label>
                                <input className="form-control" id="startingDate" type="date" disabled/>
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="endingDate">Ending Date</label>
                                <input className="form-control" id="endingDate" type="date" disabled/>
                              </div>
                            </div> </> }
                            <div className="col-12 col-lg-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="royality">Royality</label>
                                <input className="form-control" id="royality" type="text" placeholder="5%" />
                              </div>
                            </div>
                            {/* <div className="col-12 col-sm-6 col-lg-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="noOfcopies">No of copies</label>
                                <input className="form-control" id="noOfcopies" type="text" placeholder={13} />
                              </div>
                            </div> */}
                            {/* <div className="col-12 col-sm-6 col-lg-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="size">Size</label>
                                <input className="form-control" id="size" type="text" placeholder="20MB" />
                              </div>
                            </div> */}
                            <div className="col-12 col-md-8">
                              <div className="form-check mb-4 mb-md-0">
                                <input className="form-check-input" id="rememberMe" type="checkbox" defaultValue defaultChecked />
                                <label className="form-check-label" htmlFor="rememberMe">I agree to all terms &amp; conditions.</label>
                              </div>
                            </div>
                            <div className="col-12 col-md-4">
                              <button className="btn btn-primary rounded-pill w-100" type="submit">Create</button>
                            </div>
                          </div>
                        </form>
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

export default CreateNftAdmin