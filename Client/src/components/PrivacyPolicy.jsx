import React from 'react'
import { tns } from 'tiny-slider';
import {useEffect} from 'react';

function PrivacyPolicy() {
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
                    <h2 className="breadcrumb-title">Privacy Policy</h2>
                
                  </div>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a>Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Privacy</li>
                      </ol>
                    </nav>
                </div>
              </div>
              <div className="divider" />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10 col-xxl-8">
                    <h3>PRIVACY POLICY</h3>
                    <p>By using or accessing the service in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that we will collect, use, and share your information in the following ways.</p>
                    <div className="mb-5" />
                    <h3>WHAT DATA WE COLLECT AND WHY WE COLLECT</h3>
                    <p>As is true of most websites, we gather certain information (such as mobile provider, operating system, etc.) automatically and store it in log files. We use this information, which does not identify individual users, to analyze trends, to administer the website, to track users movements around the website and to gather demographic information about our user base as a whole. We may link some of this automatically-collected data to certain Personally Identifiable Information.</p>
                    <div className="mb-5" />
                    <h3>PERSONALLY IDENTIFIABLE INFORMATION</h3>
                    <p>If you are a Client, when you register with us via our Website, we will ask you for some personally identifiable information, such as your first and last name, company name, email address, billing address, and credit card information. You may review and update this personally identifiable information in your profile by logging in and editing such information on your dashboard. If you decide to delete all of your information, we may cancel your account. We may retain an archived copy of your records as required by law or for reasonable business purposes.</p>
                    <p>Due to the nature of the Service, except to assist Clients with certain limited technical problems or as otherwise legally compelled, we will not access any of the Content that you upload to the Service.</p>
                    <p>Some Personally Identifiable Information may also be provided to intermediaries and third parties who assist us with the Service, but who may make no use of any such information other than to assist us in providing the Service. Except as otherwise provided in this Privacy Policy, however, we will not rent or sell your Personally Identifiable Information to third parties.</p>
                    <div className="mb-5" />
                    <div className="updated-info">
                      <p className="mb-0">Last updated Dec 31, 2021</p>
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

export default PrivacyPolicy