import React from "react";
import { tns } from "tiny-slider";
import { Link, useNavigate } from 'react-router-dom'
// import slideToggle from "react-slide-toggle";
import { useEffect , useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";
import { useFormik } from 'formik';
import { validEmail, validPassword } from '../../RegularExpression/regex';
function Register() {

  const navigateTo = useNavigate();
  // const[regData,setRegData] = useState({
  //   fullname:"",
  //   email:"",
  //   password:"",
  //   repeatpassword:"",
  // })
  // function HandleChange(e){
  //   setRegData({...regData,[e.target.name]:e.target.value});
  // }

  // const [formData, setFormData] = useState({

  //   image: null

  // });

  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setrepeatpassword] = useState("");
  const [image, setImage] = useState("");

  const HandleNameChange = (event) => {
    setfullname(event.target.value);
  };

  const HandleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const HandlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const HandleRepeatPasswordChange =(event) => {
    setrepeatpassword(event.target.value)
  }

  const handleImageChange = event => {
    setImage(event.target.files[0]);
  };

  // async function  sendtoBackend(e){
  
  //   try{
  //     if(regData.fullname && regData.email && regData.password && regData.repeatpassword !== null && regData.image !== null){
  //       if(validEmail.test(regData.email) && validPassword.test(regData.password)){
  //        await axios.post('http://localhost:3001/register',finalObj)
  //           navigateTo('/login')
  //           console.log(finalObj);
  //       }
  //       else{
  //         Swal.fire(
  //               ' ☠ ',
  //               "Email or password may be incorrect please insert strong password with special characters",
  //               'error'
  //             )
  //       }
  //       e.preventDefault();
  //     }
  
  //     else{
  //       e.preventDefault();
  //       Swal.fire(
  //         ' ☠ ',
  //         "please fill all required fields",
  //         'error'
  //       )
  //     }
  //   }
  //   catch(err){
  //     Swal.fire(
  //       ' ☠ ',
  //       err.message,
  //       'error'
  //     )
  //     e.preventDefault();
  //   }
      
        
  //   }
  async function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("repeatpassword", repeatpassword);
    formData.append("image", image);
    // axios.post('http://localhost:3001/register',formData)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
     
    try{  
         await axios.post('http://localhost:3001/register',formData)
            navigateTo('/login')  
        }
        
      catch(err){
        Swal.fire(
        ' ☠ ',
        err.message,
        'error'
      )
      event.preventDefault();
    }
       
    }
  


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
            <h2 className="breadcrumb-title">SignUp</h2>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a>Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                SignUp
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
                  SignUp <br /> 
                </h1>
                <p className="mb-5">
                  Register Yourself...
                </p>
                <form onSubmit={handleSubmit} enctype="multipart/form-data">
                  <div className="row g-4">
                    
                  <div className="col-12">
                      <input
                        className="form-control"
                        id="fullname"
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        onChange={HandleNameChange}
                        defaultValue={""}
                        required
                      />
                    </div>


                    <div className="col-12">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        onChange={HandleEmailChange}
                        defaultValue={""}
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
                        onChange={HandlePasswordChange}
                        defaultValue={""}
                        required
                      />
                    </div>


                    <div className="col-12">
                      <input
                        className="form-control"
                        id="repeatpassword"
                        type="password"
                        placeholder="Repeat Password"
                        name="repeatpassword"
                        defaultValue={""}
                        onChange={HandleRepeatPasswordChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        className="form-control"
                        id="image"
                        type="file"
                        placeholder="image"
                        name="image"
                        defaultValue={""}
                        onChange={handleImageChange}
                        required
                      />
                    </div>
                    
                    <div className="col-12">
                      <button
                        className="btn btn-primary rounded-pill"
                        type="submit"
                       // onClick={sendtoBackend}
                      >
                        Send now
                      </button>
                    </div>
                  </div>
                </form>

                
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

export default Register;
