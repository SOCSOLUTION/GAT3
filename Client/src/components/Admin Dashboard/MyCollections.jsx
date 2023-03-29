import React from 'react'
import AdminSidebar from '../adminSidebar/AdminSidebar'
import DashboardHeader from '../dashboardHeader/DashboardHeader'
import CollectionCard from './collectionCard/CollectionCard'

function MyCollections() {
  return (
  
            <div>
              {/* Preloader*/}
              {/* <div className="preloader" id="preloader">
                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
              </div> */}
              {/* Header Area*/}
              <DashboardHeader></DashboardHeader>
              {/* Admin Sidebar Wrap */}
              {/* Create New Button */}
              <div className="create-new-button"><a className="shadow-lg btn btn-warning" href="create-new.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg" /></a></div>
              <div className="admin-wrapper">
                <div className="container">
                  <h5 className="mb-3">Your collections</h5>
                  <div className="row g-4">
                    <CollectionCard></CollectionCard>
                    <CollectionCard></CollectionCard>
                    <CollectionCard></CollectionCard>
                    <CollectionCard></CollectionCard>
                    {/* Catagory Card */}
                    {/* <div className="col-12 col-md-6 col-xxl-4">
                      <div className="catagory-card card shadow-sm">
                        <div className="card-body">
                          <div className="row g-1">
                            <div className="col-6"><img className="rounded" src="img/bg-img/39.jpg" alt="" /><img className="rounded" src="img/bg-img/38.jpg" alt="" /></div>
                            <div className="col-6"><img className="rounded" src="img/bg-img/6.jpg" alt="" /><img className="rounded" src="img/bg-img/10.jpg" alt="" /></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-7">
                              <h5 className="mb-0">Arts<span className="badge bg-primary ms-2 fz-14">206</span></h5>
                            </div>
                            <div className="col-5 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* Catagory Card */}
                    {/* <div className="col-12 col-md-6 col-xxl-4">
                      <div className="catagory-card card shadow-sm">
                        <div className="card-body">
                          <div className="row g-1">
                            <div className="col-6"><img className="rounded" src="img/bg-img/35.jpg" alt="" /><img className="rounded" src="img/bg-img/34.jpg" alt="" /></div>
                            <div className="col-6"><img className="rounded" src="img/bg-img/25.jpg" alt="" /><img className="rounded" src="img/bg-img/27.jpg" alt="" /></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-7">
                              <h5 className="mb-0">Photos<span className="badge bg-primary ms-2">973</span></h5>
                            </div>
                            <div className="col-5 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* Catagory Card */}
                    {/* <div className="col-12 col-md-6 col-xxl-4">
                      <div className="catagory-card card shadow-sm">
                        <div className="card-body">
                          <div className="row g-1">
                            <div className="col-6"><img className="rounded" src="img/bg-img/18.jpg" alt="" /><img className="rounded" src="img/bg-img/20.jpg" alt="" /></div>
                            <div className="col-6"><img className="rounded" src="img/bg-img/37.jpg" alt="" /><img className="rounded" src="img/bg-img/36.jpg" alt="" /></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-7">
                              <h5 className="mb-0">Collectibles<span className="badge bg-primary ms-2">1098</span></h5>
                            </div>
                            <div className="col-5 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* Catagory Card */}
                    {/* <div className="col-12 col-md-6 col-xxl-4">
                      <div className="catagory-card card shadow-sm">
                        <div className="card-body">
                          <div className="row g-1">
                            <div className="col-6"><img className="rounded" src="img/bg-img/39.jpg" alt="" /><img className="rounded" src="img/bg-img/38.jpg" alt="" /></div>
                            <div className="col-6"><img className="rounded" src="img/bg-img/6.jpg" alt="" /><img className="rounded" src="img/bg-img/10.jpg" alt="" /></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-7">
                              <h5 className="mb-0">Arts<span className="badge bg-primary ms-2">206</span></h5>
                            </div>
                            <div className="col-5 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* Catagory Card */}
                    {/* <div className="col-12 col-md-6 col-xxl-4">
                      <div className="catagory-card card shadow-sm">
                        <div className="card-body">
                          <div className="row g-1">
                            <div className="col-6"><img className="rounded" src="img/bg-img/35.jpg" alt="" /><img className="rounded" src="img/bg-img/34.jpg" alt="" /></div>
                            <div className="col-6"><img className="rounded" src="img/bg-img/25.jpg" alt="" /><img className="rounded" src="img/bg-img/27.jpg" alt="" /></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-7">
                              <h5 className="mb-0">Photos<span className="badge bg-primary ms-2">973</span></h5>
                            </div>
                            <div className="col-5 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* Catagory Card */}
                    {/* <div className="col-12 col-md-6 col-xxl-4">
                      <div className="catagory-card card shadow-sm">
                        <div className="card-body">
                          <div className="row g-1">
                            <div className="col-6"><img className="rounded" src="img/bg-img/18.jpg" alt="" /><img className="rounded" src="img/bg-img/20.jpg" alt="" /></div>
                            <div className="col-6"><img className="rounded" src="img/bg-img/37.jpg" alt="" /><img className="rounded" src="img/bg-img/36.jpg" alt="" /></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-7">
                              <h5 className="mb-0">Collectibles<span className="badge bg-primary ms-2">1098</span></h5>
                            </div>
                            <div className="col-5 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* Catagory Card */}
                    {/* <div className="col-12 col-md-6 col-xxl-4">
                      <div className="catagory-card card shadow-sm">
                        <div className="card-body">
                          <div className="row g-1">
                            <div className="col-6"><img className="rounded" src="img/bg-img/39.jpg" alt="" /><img className="rounded" src="img/bg-img/38.jpg" alt="" /></div>
                            <div className="col-6"><img className="rounded" src="img/bg-img/6.jpg" alt="" /><img className="rounded" src="img/bg-img/10.jpg" alt="" /></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-7">
                              <h5 className="mb-0">Arts<span className="badge bg-primary ms-2">206</span></h5>
                            </div>
                            <div className="col-5 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* Catagory Card */}
                    {/* <div className="col-12 col-md-6 col-xxl-4">
                      <div className="catagory-card card shadow-sm">
                        <div className="card-body">
                          <div className="row g-1">
                            <div className="col-6"><img className="rounded" src="img/bg-img/35.jpg" alt="" /><img className="rounded" src="img/bg-img/34.jpg" alt="" /></div>
                            <div className="col-6"><img className="rounded" src="img/bg-img/25.jpg" alt="" /><img className="rounded" src="img/bg-img/27.jpg" alt="" /></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-7">
                              <h5 className="mb-0">Photos<span className="badge bg-primary ms-2">973</span></h5>
                            </div>
                            <div className="col-5 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* Catagory Card */}
                    {/* <div className="col-12 col-md-6 col-xxl-4">
                      <div className="catagory-card card shadow-sm">
                        <div className="card-body">
                          <div className="row g-1">
                            <div className="col-6"><img className="rounded" src="img/bg-img/18.jpg" alt="" /><img className="rounded" src="img/bg-img/20.jpg" alt="" /></div>
                            <div className="col-6"><img className="rounded" src="img/bg-img/37.jpg" alt="" /><img className="rounded" src="img/bg-img/36.jpg" alt="" /></div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-7">
                              <h5 className="mb-0">Collectibles<span className="badge bg-primary ms-2">1098</span></h5>
                            </div>
                            <div className="col-5 text-end"><a className="btn btn-minimal hover-primary" href="explore-1.html">View all<i className="ms-1 fz-14 bi bi-arrow-right" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* All JavaScript Files*/}
            </div>
     
  )
}

export default MyCollections