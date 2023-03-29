import React, { useState } from "react";
import { tns } from "tiny-slider";
// import slideToggle from "react-slide-toggle";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigateTo = useNavigate();
  const[logData,setLogData] = useState({
   email:" ",
   password: " " 
  })
  function HandleChange(e){
    setLogData({...logData,[e.target.name]:e.target.value})
    console.log(logData);
  }
  function authvalidate(e){
    e.preventDefault();
    if(logData.email === "" || logData.password === ""){
      Swal.fire(
        ' ☠ ',
        'Please fill all required fields',
        'error'
      )
    }
    else {
      FireLogin()
    }
  }
  
  
    function FireLogin(){
      
      axios.post("http://localhost:3001/login",logData)
       .then(response => {
         //get token from response
         const token  =  response.data.token;
         const fullname = response.data.fullname;
         const image = response.data.image;
         // If we want it to store in Session
         sessionStorage.setItem("token",token);
         sessionStorage.setItem("fullname",fullname);
         sessionStorage.setItem("image",image);
         Swal.fire(
          ' success ',
          '********',
          'success'
        )
        navigateTo("/artist_dashboard");      
        console.log(token);
       })
       .catch(err => 
        Swal.fire(
          ' ☠ ',
          err.message,
          'error'
        )
        );
   };
    

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
      
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="breadcrumb-content justify-content-center">
            <h2 className="breadcrumb-title">SignIn</h2>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a>Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                SignIn
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="divider" />
      {/* Contact Wrapper */}
      <div className="contact-wrapper">
        <div className="container ">
          <div className="row g-5 justify-content-center align-items-center">
            {/* Contact Form */}
            <div className="col-12 col-lg-7">
              <div className="contact-form">
                <h1 className="mb-3">
                  SignIn <br /> 
                </h1>
                <p className="mb-5">
                  Happy Login
                </p>
                <div >
                  <div className="row g-4">
                    
                    
                    <div className="col-12">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        defaultValue={""}
                        onChange={HandleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        className="form-control"
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={HandleChange}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                    
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary rounded-pill"
                        type="submit"
                        onClick={authvalidate}>
                        Send now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
         
          </div>
        </div>
      </div>
      <div className="divider" />
     
      <div id="scrollTopButton">
        <i className="bi bi-arrow-up-short" />
      </div>
     
    </div>
  );
}

export default Login;
