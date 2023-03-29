import React from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../adminSidebar/AdminSidebar'
import DashboardHeader from '../../dashboardHeader/DashboardHeader'
import AdminAllSellerCard from './adminAllSellerCard/AdminAllSellerCard'
const AdminAllSellers = () => {
  return (
    <div>
              {/* Preloader*/}
              {/* <div className="preloader" id="preloader">
                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
              </div> */}
              {/* Header Area*/}
              <DashboardHeader></DashboardHeader>

         {/* <AdminSidebar></AdminSidebar> */}
              {/* Create New Button */}
              <div className="create-new-button"><Link className="shadow-lg btn btn-warning" to="/create-nft" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg" /></Link></div>
              <div className="admin-wrapper">
                <div className="container">
                  <h5 className="mb-3">All Artist</h5>
                  <div className="row g-4">
                    <AdminAllSellerCard></AdminAllSellerCard>
                    <AdminAllSellerCard></AdminAllSellerCard>
                    <AdminAllSellerCard></AdminAllSellerCard>
                    <AdminAllSellerCard></AdminAllSellerCard>
                    <AdminAllSellerCard></AdminAllSellerCard>
                    <AdminAllSellerCard></AdminAllSellerCard>
                    <AdminAllSellerCard></AdminAllSellerCard>
                    
                  </div>
                </div>
              </div>
              {/* All JavaScript Files*/}
            </div>
  )
}

export default AdminAllSellers
