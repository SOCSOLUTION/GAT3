import React from 'react'
import { Link } from 'react-router-dom'
import ArtistHeader from '../artistHeader/ArtistHeader'

const ArtistSettings = () => {
  return (
    <div>
    {/* Preloader*/}
    {/* <div className="preloader" id="preloader">
      <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
    </div> */}
    {/* Header Area*/}
    <header className="header-area">
      <ArtistHeader></ArtistHeader>
    </header>
    {/* Admin Sidebar Wrap */}
    {/* Create New Button */}
    <div className="create-new-button"><Link className="shadow-lg btn btn-warning" to="/artistcreatenft" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg" /></Link></div>
    <div className="admin-wrapper">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9 col-xxl-8">
            <ul className="nav nav-tabs border-0 mb-3" role="tablist">
              <li className="nav-item"><a className="position-relative nav-link mb-0 rounded-pill border-0 me-1 active" id="tab--1" data-bs-toggle="tab" href="settings.html#tab1" role="tab" aria-controls="tab1" aria-selected="true">General</a></li>
              <li className="nav-item"><a className="nav-link mb-0 rounded-pill border-0 me-1" id="tab--2" data-bs-toggle="tab" href="settings.html#tab2" role="tab" aria-controls="tab2" aria-selected="false">Others</a></li>
            </ul>
            <div className="tab-content">
              {/* Tab Pane*/}
              <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                <div className="card">
                  <div className="card-body p-4 p-sm-5">
                    <form>
                      <div className="row g-4">
                        <div className="col-12">
                          <input className="form-control bg-gray border-0" type="text" name="fullName" placeholder="Full Name" />
                        </div>
                        <div className="col-12">
                          <input className="form-control bg-gray border-0" type="email" name="email" placeholder="Email Address" />
                        </div>
                        <div className="col-12">
                          <input className="form-control bg-gray border-0" type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="col-12">
                          <input className="form-control bg-gray border-0" type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="col-12">
                          <select className="filter-select2 w-100 bg-gray">
                            <option selected value={1}>Timezone</option>
                            <option value={2}>UTC +0</option>
                            <option value={3}>UTC +1</option>
                            <option value={4}>UTC +2</option>
                            <option value={5}>UTC +3</option>
                            <option value={6}>UTC +4</option>
                            <option value={7}>UTC +5</option>
                            <option value={8}>UTC +6</option>
                            <option value={9}>UTC +7</option>
                            <option value={10}>UTC +8</option>
                            <option value={11}>UTC +9</option>
                            <option value={12}>UTC +10</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <select className="filter-select w-100 bg-gray">
                            <option selected value={1}>Week starts on</option>
                            <option value={2}>Saturday</option>
                            <option value={3}>Sunday</option>
                            <option value={4}>Monday</option>
                          </select>
                        </div>
                        <div className="col-12">
                         <Link> <button className="btn btn-primary w-100 rounded-pill" type="submit"><i className="bi bi-sd-card-fill me-1" />Save changes</button></Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Tab Pane*/}
              <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                <div className="card">
                  <div className="card-body p-4 p-sm-5">
                    <form>
                      <div className="row g-4">
                        <div className="col-12 col-md-4">
                          <div className="form-check">
                            <input className="form-check-input" id="liveBids" type="checkbox" defaultValue defaultChecked />
                            <label className="form-check-label" htmlFor="liveBids">Live Bids</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="form-check">
                            <input className="form-check-input" id="onSale" type="checkbox" defaultValue />
                            <label className="form-check-label" htmlFor="onSale">On Sale</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="form-check">
                            <input className="form-check-input" id="comingSoon" type="checkbox" defaultValue />
                            <label className="form-check-label" htmlFor="comingSoon">Coming Soon</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check form-switch mb-3">
                            <input className="form-check-input" id="switch1" type="checkbox" role="switch" />
                            <label className="form-check-label" htmlFor="switch1">Enable Notifications</label>
                          </div>
                          <div className="form-check form-switch mb-3">
                            <input className="form-check-input" id="switch2" type="checkbox" role="switch" defaultChecked />
                            <label className="form-check-label" htmlFor="switch2">Enable Chats Sounds</label>
                          </div>
                          <div className="form-check form-switch">
                            <input className="form-check-input" id="switch3" type="checkbox" role="switch" />
                            <label className="form-check-label" htmlFor="switch3">Enable Lazyload</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <textarea className="form-control" name="message" cols={10} rows={5} placeholder="Short Description" defaultValue={""} />
                        </div>
                        <div className="col-12">
                          <Link><button className="btn btn-primary w-100 rounded-pill" type="submit"><i className="bi bi-sd-card-fill me-1" />Save changes</button></Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
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

export default ArtistSettings
