import React from 'react'
import { tns } from "tiny-slider";
// import slideToggle from "react-slide-toggle";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ethers } from "ethers";
import ArtistHeader from '../artistHeader/ArtistHeader';
import { Link } from 'react-router-dom';
// const fs = require("fs");

// import fs from "fs";

const FormData = require("form-data");
const ArtistCreateNft = () => {
    const CONTRACTABI = "";
  const CONTRACTADDRESS = "0xc1a76eE0e010b8D55C685aCd1b377bAe5E527994";
  const dataFetchedRef = useRef(false);
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

    // :: Related Project Slide

    if (document.querySelectorAll(".related-project-slide").length > 0) {
      tns({
        container: ".related-project-slide",
        items: 4,
        gutter: 24,
        slideBy: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 750,
        loop: true,
        mouseDrag: true,
        controls: true,
        nav: false,
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

    // :: Trending Auction Slide

    if (document.querySelectorAll(".trending-auction-slide").length > 0) {
      tns({
        container: ".trending-auction-slide",
        items: 2,
        gutter: 24,
        slideBy: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 750,
        loop: true,
        mouseDrag: true,
        controls: false,
        nav: false,
        responsive: {
          320: {
            items: 1,
          },
          576: {
            items: 1.8,
          },
          768: {
            items: 2.5,
          },
          992: {
            items: 2,
          },
          1200: {
            items: 2.5,
          },
          1400: {
            items: 1.75,
          },
        },
      });
    }

    // :: Top Buyer Slide

    if (document.querySelectorAll(".top-buyer-slide").length > 0) {
      tns({
        container: ".top-buyer-slide",
        items: 7,
        gutter: 16,
        slideBy: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 750,
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
            items: 3,
          },
          480: {
            items: 4,
          },
          576: {
            items: 5,
          },
          768: {
            items: 4,
          },
          992: {
            items: 4,
          },
          1200: {
            items: 5,
          },
          1400: {
            items: 7,
          },
        },
      });
    }
  }, []);

  const [radioValue, setradioValue] = useState();

  const handleClickNew = () => {
    setradioValue(document.querySelector("#inlineRadio1").value);
  };

  const handleClick = () => {
    setradioValue(document.querySelector("#inlineRadio3").value);
  };

  console.log(radioValue);

  const [file, setFile] = useState(null);

  const sendFileToIPFS = async (e) => {
    //e.preventDefault();

    if (file) {
      try {
        var name = document.getElementById("name").value;
        var decription = document.getElementById("description").value;
        var price = document.getElementById("price").value;
        console.log("Ye Price hai " + price);
        const formData = new FormData();
        formData.append("file", file, name, decription);

        const metadata = JSON.stringify({
          name: name,
          description: decription,
        });

        formData.append("pinataMetadata", metadata);

        const options = JSON.stringify({
          cidVersion: 0,
        });

        formData.append("pinataOptions", options);
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `331a4a62a8dbe9a7b00f`,
            pinata_secret_api_key: `fc9beecc86c151bf2affe183dbb306823ac149b0c3a8574c134f636d05627373`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `${resFile.data.IpfsHash}`;
        var images = `ipfs/${ImgHash}`;
        console.log(images);

        const data = {
          name: name,
          image: images,
          description: decription,
          price: price,
        };

        console.log(data);
        const value = await mintJsonToIpfs(data);
        console.log("Aagaya hash pori tarha " + value.pinataUrl);
        await contractWrite(value.pinataUrl);
        await createToken(value.pinataUrl, price);
        // handleSubmission(data)
      } catch (error) {
        console.log("Error sending File to IPFS: ");
        console.log(error);
      }
    }
  };
  const mintJsonToIpfs = async (data) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    //making axios POST request to Pinata ⬇️
    return axios
      .post(url, data, {
        headers: {
          pinata_api_key: "331a4a62a8dbe9a7b00f",
          pinata_secret_api_key:
            "fc9beecc86c151bf2affe183dbb306823ac149b0c3a8574c134f636d05627373",
        },
      })
      .then(function (response) {
        return {
          success: true,
          pinataUrl:
            "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
        };
      })
      .catch(function (error) {
        console.log(error);
        return {
          success: false,
          message: error.message,
        };
      });
  };
  /////////////////////////////////////////////////////
  const contractWrite = async (uri) => {
    //var a = uri.pinataUrl;
    //console.log("Pohanch gaya write mai " + value.pinataUrl);
    var select = document.getElementById("catagories");
    var value = select.options[select.selectedIndex].value;
    console.log("Ye value hai index ki " + value);
    //var price = document.getElementById("price").value;
    //var contractAddresses = "0x356B43F15BedEC3AFEED64d48C366DFB11d206DB";
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const insertSmartContract = await new ethers.Contract(
      CONTRACTADDRESS,
      CONTRACTABI,
      provider
    );
    const setInsertSmartContract = await insertSmartContract
      .connect(signer)
      .mintNft(uri, value - 1);
    console.log("Minting Done " + setInsertSmartContract);

    console.log("Write to smart contract");
  };

  /////////////////////////////////////////////////////
  const [category, setCategoryListt] = useState([]);
  const fetchCategoryList = async () => {
    //var contractAddresses = "0x356B43F15BedEC3AFEED64d48C366DFB11d206DB";
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const categoryList = await new ethers.Contract(
      CONTRACTADDRESS,
      CONTRACTABI,
      provider
    );
    const setCategoryList = await categoryList
      .connect(signer)
      .getAllNFTSCategory();
    //console.log("Ye Category List hai "+setCategoryList);
    for (let i = 0; i < setCategoryList.length; i++) {
      await setTheList(setCategoryList[i]);
    }
    //setCategoryListt(setCategoryList);
  };

  /////////////////////////////////////////////////
  const createToken = async (tokenURI, price) => {
    var select = document.getElementById("catagories");
    var value = select.options[select.selectedIndex].value;
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const createTokenOfNFT = await new ethers.Contract(
      CONTRACTADDRESS,
      CONTRACTABI,
      provider
    );
    const setCreateTokenOfNFT = await createTokenOfNFT
      .connect(signer)
      .createToken(tokenURI, price, value, 1);
  };
  /////////////////////////////////////////////////
  const setTheList = async (category) => {
    let result = {
      list: category,
    };
    setCategoryListt((category) => [...category, result]);
  };
  const set = new Set(category);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchCategoryList();
  });
  useEffect(() => {
    //console.log("Ye list hai "+ category)
  }, [category]);
  return (
    <div>
      <div>
      {/* Preloader*/}
      {/* <div className="preloader" id="preloader">
                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
              </div> */}
      {/* Header Wrapper */}
      <ArtistHeader></ArtistHeader>
      {/* Admin Sidebar Wrap */}
      {/* Create New Button */}
      <div className="divider" />
      <div className="create-new-button">
        <Link
          className="shadow-lg btn btn-warning"
          to="/artistcreatenft"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Create New NFT"
        >
          <i className="fz-18 bi bi-plus-lg" />
        </Link>
      </div>
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
                          <label
                            className="mb-2 fz-16"
                            htmlFor="formFileMultiple"
                          >
                            Upload Files
                          </label>
                          <input
                            className="form-control bg-transparent"
                            id="formFileMultiple"
                            type="file"
                            multiple
                            onChange={(e) => setFile(e.target.files[0])}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-4">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              id="inlineRadio1"
                              onClick={() => {
                                handleClickNew();
                              }}
                              type="radio"
                              name="inlineRadioOptions"
                              defaultValue="option1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio1"
                            >
                              Fixed price
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              id="inlineRadio2"
                              type="radio"
                              name="inlineRadioOptions"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio2"
                            >
                              Unlock Purchased
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              id="inlineRadio3"
                              onClick={() => {
                                handleClick();
                              }}
                              type="radio"
                              name="inlineRadioOptions"
                              defaultValue="option3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio3"
                            >
                              Open for bids
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-4">
                          <label className="mb-2 fz-16" htmlFor="title">
                            Title
                          </label>
                          <input
                            className="form-control"
                            id="name"
                            type="text"
                            placeholder="Macaw Bird"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-4">
                          <label className="mb-2 fz-16" htmlFor="description">
                            Description
                          </label>
                          <input
                            className="form-control"
                            id="description"
                            type="text"
                            placeholder="Write short description"
                          />
                        </div>
                      </div>
                      {radioValue === "option3" ? (
                        <div className="col-12 col-md-6">
                          <div className="form-group mb-4">
                            <label className="mb-2 fz-16" htmlFor="price">
                              Price
                            </label>
                            <input
                              className="form-control"
                              id="price"
                              type="text"
                              placeholder="0.324 ETH"
                              disabled
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="col-12 col-md-6">
                          <div className="form-group mb-4">
                            <label className="mb-2 fz-16" htmlFor="price">
                              Price
                            </label>
                            <input
                              className="form-control"
                              id="price"
                              type="text"
                              placeholder="0.324 ETH"
                            />
                          </div>
                        </div>
                      )}
                      <div className="col-12 col-md-6">
                        <div className="form-group mb-4">
                          <label className="mb-2 fz-16" htmlFor="catagories">
                            Catagory
                          </label>
                          <select
                            className="filter-select2 border border-2 w-100 "
                            id="catagories"
                          >
                            {/* <option selected value={1}>
                              Art
                            </option> */}
                            {Array.from(set).map((product, index) => (
                              <option key={index + 1} value={index + 1}>
                                {product.list}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      {radioValue === "option3" ? (
                        <>
                          <div className="col-12 col-sm-4">
                            <div className="form-group mb-4">
                              <label
                                className="mb-2 fz-16"
                                htmlFor="startingDate"
                              >
                                Starting Date
                              </label>
                              <input
                                className="form-control"
                                id="startingDate"
                                type="date"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group mb-4">
                              <label
                                className="mb-2 fz-16"
                                htmlFor="endingDate"
                              >
                                Ending Date
                              </label>
                              <input
                                className="form-control"
                                id="endingDate"
                                type="date"
                              />
                            </div>
                          </div>{" "}
                        </>
                      ) : (
                        <>
                          <div className="col-12 col-sm-4">
                            <div className="form-group mb-4">
                              <label
                                className="mb-2 fz-16"
                                htmlFor="startingDate"
                              >
                                Starting Date
                              </label>
                              <input
                                className="form-control"
                                id="startingDate"
                                type="date"
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group mb-4">
                              <label
                                className="mb-2 fz-16"
                                htmlFor="endingDate"
                              >
                                Ending Date
                              </label>
                              <input
                                className="form-control"
                                id="endingDate"
                                type="date"
                                disabled
                              />
                            </div>
                          </div>{" "}
                        </>
                      )}
                      <div className="col-12 col-lg-4">
                        <div className="form-group mb-4">
                          <label className="mb-2 fz-16" htmlFor="royality">
                            Royality
                          </label>
                          <input
                            className="form-control"
                            id="royality"
                            type="text"
                            placeholder="5%"
                          />
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
                          <input
                            className="form-check-input"
                            id="rememberMe"
                            type="checkbox"
                            defaultValue
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            I agree to all terms &amp; conditions.
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <button
                          className="btn btn-primary rounded-pill w-100"
                          type="button"
                          onClick={() => {
                            sendFileToIPFS();
                          }}
                        >
                          Create
                        </button>
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
    </div>
  )
}

export default ArtistCreateNft
