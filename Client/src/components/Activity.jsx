import React from 'react'

function Activity() {
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
                  <div className="breadcrumb-content">
                    <h2 className="breadcrumb-title">Activity</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a >Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Activity</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="divider" />
              <div className="activity-wrapper">
                <div className="container">
                  <div className="row g-4 justify-content-between">
                    <div className="col-12 col-sm-6 col-lg-3">
                      <form action="activity.html#"> 
                        <input className="form-control" type="search" placeholder="Search" />
                      </form>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      <select className="filter-select bg-gray w-100">
                        <option selected value={1}>All</option>
                        <option value={2}>Purchase</option>
                        <option value={3}>Offer</option>
                        <option value={4}>Auctions</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-4 d-block w-100" />
                <div className="container">
                  <div className="table-responsive border shadow-sm activity-table mb-70">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Item</th>
                          <th scope="col">Price</th>
                          <th scope="col">Author</th>
                          <th scope="col">Event</th>
                          <th scope="col">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" > <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" ><img className="rounded-pill me-1" src="img/bg-img/u1.jpg" alt="" />@creative_art</a></td>
                          <td><i className="bi bi-cart" />Sales</td>
                          <td><i className="bi bi-clock" />29 min ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" > <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" ><img className="rounded-pill me-1" src="img/bg-img/u2.jpg" alt="" />@designing_world</a></td>
                          <td><i className="bi bi-percent" />Offer</td>
                          <td><i className="bi bi-clock" />1h ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" > <img className="rounded me-1" src="img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" ><img className="rounded-pill me-1" src="img/bg-img/u3.jpg" alt="" />@art_world</a></td>
                          <td><i className="bi bi-patch-exclamation" />Alert</td>
                          <td><i className="bi bi-clock" />2h ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" > <img className="rounded me-1" src="img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" ><img className="rounded-pill me-1" src="img/bg-img/u4.jpg" alt="" />@fancy_car</a></td>
                          <td><i className="bi bi-cart" />Sales</td>
                          <td><i className="bi bi-clock" />3h ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" > <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" ><img className="rounded-pill me-1" src="img/bg-img/u1.jpg" alt="" />@creative_art</a></td>
                          <td><i className="bi bi-cart" />Sales</td>
                          <td><i className="bi bi-clock" />12h ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" > <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" ><img className="rounded-pill me-1" src="img/bg-img/u2.jpg" alt="" />@designing_world</a></td>
                          <td><i className="bi bi-percent" />Offer</td>
                          <td><i className="bi bi-clock" />17h ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" > <img className="rounded me-1" src="img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" ><img className="rounded-pill me-1" src="img/bg-img/u3.jpg" alt="" />@art_world</a></td>
                          <td><i className="bi bi-patch-exclamation" />Alert</td>
                          <td><i className="bi bi-clock" />1d ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" > <img className="rounded me-1" src="img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" ><img className="rounded-pill me-1" src="img/bg-img/u4.jpg" alt="" />@fancy_car</a></td>
                          <td><i className="bi bi-cart" />Sales</td>
                          <td><i className="bi bi-clock" />3d ago</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Pagination             */}
                <div className="funto-pagination">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mb-0">
                      <li className="page-item active"><a className="page-link" >1</a></li>
                      <li className="page-item"><a className="page-link" >2</a></li>
                      <li className="page-item"><a className="page-link">3</a></li>
                      <li className="page-item"><a className="page-link" >4</a></li>
                      <li className="page-item"><a className="page-link" >...</a></li>
                      <li className="page-item"><a className="page-link" >9</a></li>
                    </ul>
                  </nav>
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

export default Activity