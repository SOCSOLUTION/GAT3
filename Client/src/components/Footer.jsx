import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer
        className="footer-area  p-4"
        // style={{ backgroundImage: 'url("img/bg-img/1.jpg")' }}
        style={{ backgroundColor: " hsla(0, 0%, 13%, 1)" }}
      >
        <div className="container">
          <div className="row">
            {/* Footer Widget */}
            <div className="col-12 col-lg-5">
              <div className="footer-widget-area mb-30 pe-lg-4 pe-xl-5 me-lg-4 me-xl-5 border-end">
                <Link className="d-block mb-4" to="/dashboard">
                  <img
                    className="light-logo"
                    src="img/core-img/logo.png"
                    alt="img"
                  />
                  <img
                    className="dark-logo"
                    src="img/core-img/logo-white.png"
                    alt="img"
                  />
                </Link>
                <h1 style={{ fontSize: "45px" }}>We seek beauty</h1>
                <p className="mb-0">
                  {" "}
                  Email: <a href="mailto:abc@dummy.com">help@gat3.com</a>
                </p>
                {/* Social Icon */}
                <h5 className="mt-4 mb-3">Join the community</h5>
                <div className="footer-social-icon d-flex align-items-center flex-wrap">
                  <Link
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="discord"
                  >
                    <i className="bi bi-discord" style={{ fontSize: "20pt" }} />
                  </Link>
                  <a
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Instagram"
                  >
                    <i
                      className="bi bi-instagram"
                      style={{ fontSize: "20pt" }}
                    />
                  </a>
                  <a
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Twitter"
                  >
                    <i className="bi bi-twitter" style={{ fontSize: "20pt" }} />
                  </a>
                  {/* <a
                    href="index.html#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Medium"
                  >
                    <i className="bi bi-medium" style={{ fontSize: "20pt" }} />
                  </a> */}
                </div>
                {/* Newsletter Form */}
              </div>
            </div>
            {/* Footer Widget */}
            <div className="col-12 col-lg-7">
              <div className="row g-4">
                <div
                  style={{ marginBottom: "-40px" }}
                  className="col-6 col-sm-4"
                >
                  <div className="footer-widget-area mb-70">
                    {/* <h5 class="mb-4">Marketplace</h5> */}
                    <ul className="list-unstyled mb-0">
                      {/* <li>

                        <Link to="/about_us">About Us</Link>
                      </li> */}
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/about_us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/term_Of_Service">Terms Of Service</Link>
                      </li>
                      <li>
                        <Link to="/privacy_policy">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* 
                <div className="col-6 col-sm-4">
                  <div className="footer-widget-area mb-70">
                    <h5 class="mb-4">Admin</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="about-us.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="faq.html">My Wallet</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">My Collection </a>
                      </li>
                      <li>
                        <a href="terms-of-service.html">Setting</a>
                      </li>
                    </ul>
                  </div>
                </div> */}

                {/* <div className="col-6 col-sm-4">
                  <div className="footer-widget-area mb-70">
                    <h5 class="mb-4">The Get3s</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="about-us.html">About us</a>
                      </li>
                      <li>
                        <a href="faq.html">Join Us</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Newsletter</a>
                      </li>
                      <li>
                        <a href="terms-of-service.html">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div> */}

                <div>
                  <div className="newsletter-form me-5">
                    <form className="d-flex align-items-stretch">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter email"
                      />
                      <Link>
                        <button className="btn btn-warning px-3">
                          Subscribe
                        </button>
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copywrite-wrapper d-lg-flex align-items-lg-center justify-content-lg-between">
            {/* Copywrite Text */}
            <div className="copywrite-text text-center text-lg-start mb-3 mb-lg-0">
              <p className="mb-0">2022 © All rights reserved ®SOC Solutions</p>
            </div>
            {/* Footer Nav */}
            {/* <div class="footer-nav">
      <ul class="mb-0 d-flex flex-wrap justify-content-center list-unstyled">
        <li><a href="privacy-policy.html">Privacy Policy</a></li>
        <li><a href="terms-of-service.html">Terms of Services</a></li>
      </ul>
    </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
