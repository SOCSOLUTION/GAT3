import React from "react";
import { tns } from "tiny-slider";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import banner from './'

function Exhibition() {
  useEffect(() => {
    if (document.querySelectorAll(".featured-nfts-slide").length > 0) {
      tns({
        container: ".featured-nfts-slide",
        items: 4,
        gutter: 24,
        slideBy: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 900,
        loop: true,
        mouseDrag: true,
        nav: false,
        controls: true,
        controlsPosition: "top",
        controlsText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
        responsive: {
          320: {
            items: 1,
          },
          480: {
            items: 1.3,
          },
          576: {
            items: 1.5,
          },
          768: {
            items: 2.4,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 3.5,
          },
          1400: {
            items: 4,
          },
        },
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

    let navarToggler = document.querySelector(".navbar-toggler");
    let header = document.querySelector(".header-area");

    if (navarToggler) {
      navarToggler.addEventListener("click", function () {
        header.classList.toggle("mobile-menu-open");
        header.classList.add("sticky-on");
      });
    }

    if (header) {
      function stickyNavigation() {
        if (window.pageYOffset > 10) {
          header.classList.add("sticky-on");
        } else {
          header.classList.remove("sticky-on");
        }
      }

      window.addEventListener("load", stickyNavigation);
      window.addEventListener("scroll", stickyNavigation);
    }

    // :: Anchor Prevent Default

    let anchor = document.querySelectorAll('a[href="#"]');
    let anchorLength = anchor.length;

    if (anchorLength > 0) {
      for (let i = 0; i < anchorLength; i++) {
        anchor[i].addEventListener("click", function (e) {
          e.preventDefault();
        });
      }
    }

    // :: Preloader

    let preloader = document.getElementById("preloader");

    if (preloader) {
      window.addEventListener("load", function () {
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
            <h2 className="breadcrumb-title">Exhibitions</h2>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a>Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Exhibition
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container mt-2">
        <h4>Welcome to Get3</h4>
      </div>
      <div className="divider" />

      <div className="collection-wrapper">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-12 col-xl-12">
              <div className="">
                <Link to="/exhibition-artist">
                  <div className="">
                    <img src="img/core-img/img2.jpg" alt="" />
                  </div>
                  <h2 className="mt-2">Digital Exhibitions</h2>
                </Link>
              </div>
            </div>

            {/*                     
                    <div className="col-12 col-md-12 col-xl-12">
                    <div className="mt-5">
                      <h3>Get3</h3>

                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorem sit facilis est officiis mollitia cumque suscipit exercitationem aspernatur error porro, ducimus praesentium ipsa cupiditate quam eveniet magnam animi tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati delectus porro vero minima modi cumque corrupti commodi eius magni iusto sapiente dicta quam, laudantium laborum at nisi. Ea, ipsa provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo dolores et quis magni distinctio molestiae ipsa, magnam quos? Consequuntur, alias libero. Provident eveniet suscipit incidunt quidem! Minima, consectetur modi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit nostrum delectus inventore dolores nam officiis vel accusantium dolore? Adipisci omnis modi sed sunt voluptatem, laboriosam fugiat autem esse ullam blanditiis.</p>
                     </div>
                    </div> */}
          </div>
        </div>
        {/* <div className="container">
                  <div className="text-center mt-70"><a className="btn btn-primary btn-sm rounded-pill" href="exhibition.html#">Load more<i className="ms-1 bi bi-arrow-repeat" /></a></div>
                </div> */}
      </div>

      <div className="divider" />
      
      <div className="container_wrapper">
        <div className=" container container_wrapper">
          <div className="row">
            {/* <h2 className="mt-2">The Gates</h2> */}

            <div className=" col-lg-6 col-xl-6 col-md-6">
              <img src="img/get3.jpg" className="img-style" alt="" />
            </div>

            <div className="col-lg-6 col-xl-6 col-md-6 justify-content-center">
              <div className="container text-wrapper ">
                <div className=" text-start mt-5 ">
                  <h2 className="mb-5">The Get3 World</h2>
                  <p className="mb-5  pera-style">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, aliquam similique. Ea cupiditate, iure animi commodi
                    modi{" "}
                  </p>

                  <a>
                    {" "}
                    <button
                      className="btn btn-lg btn-info btn-custom"
                      width="50"
                    >
                      Get3
                    </button>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div style={{marginTop:'20px'}} className="collection-wrapper">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-xl-6">
                <div className="">
                  <Link to="/exhibition-artist">
                    <div className="">
                      <img src="img/core-img/img2.jpg" alt="" />
                    </div>
                    <h2 className="mt-2">Digital Exhibitions</h2>
                  </Link>
                </div>
              </div>

              <div className="col-12 col-md-6 col-xl-6">
                <div className="">
                  <Link to="/coming_soon">
                    <div className="">
                      <img src="img/core-img/img1.jpg" alt="" />
                    </div>
                    <h2 className="mt-2">IRL Exhibitions</h2>
                  </Link>
                </div>
              </div>

              {/*                     
                 <div className="col-12 col-md-12 col-xl-12">
                 <div className="mt-5">
                   <h3>Get3</h3>

                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorem sit facilis est officiis mollitia cumque suscipit exercitationem aspernatur error porro, ducimus praesentium ipsa cupiditate quam eveniet magnam animi tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati delectus porro vero minima modi cumque corrupti commodi eius magni iusto sapiente dicta quam, laudantium laborum at nisi. Ea, ipsa provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo dolores et quis magni distinctio molestiae ipsa, magnam quos? Consequuntur, alias libero. Provident eveniet suscipit incidunt quidem! Minima, consectetur modi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit nostrum delectus inventore dolores nam officiis vel accusantium dolore? Adipisci omnis modi sed sunt voluptatem, laboriosam fugiat autem esse ullam blanditiis.</p>
                  </div>
                 </div> */}
            </div>
          </div>
          {/* <div className="container">
               <div className="text-center mt-70"><a className="btn btn-primary btn-sm rounded-pill" href="exhibition.html#">Load more<i className="ms-1 bi bi-arrow-repeat" /></a></div>
             </div> */}
      </div>
      
      
      
      
      <div className="divider" />
      {/* Dark Light Wrapper */}
      {/* Footer */}

      {/* Scroll To Top */}
      <div id="scrollTopButton">
        <i className="bi bi-arrow-up-short" />
      </div>
      {/* All JavaScript Files*/}
    </div>
  );
}

export default Exhibition;
