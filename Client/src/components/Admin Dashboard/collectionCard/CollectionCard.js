import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = () => {
  return (
      <div className="col-12 col-md-6 col-xxl-4">
        <div className="catagory-card card shadow-sm">
          <div className="card-body">
            <div className="row g-1">
              <div className="col-6">
                <img className="rounded" src="img/bg-img/39.jpg" alt="" />
                <img className="rounded" src="img/bg-img/38.jpg" alt="" />
              </div>
              <div className="col-6">
                <img className="rounded" src="img/bg-img/6.jpg" alt="" />
                <img className="rounded" src="img/bg-img/10.jpg" alt="" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-7">
                <h5 className="mb-0">
                  Arts<span className="badge bg-primary ms-2 fz-14">206</span>
                </h5>
              </div>
              <div className="col-5 text-end">
                <Link to="/nftpage"
                  className="btn btn-minimal hover-primary"
                  href="explore-1.html"
                >
                  View all
                  <i className="ms-1 fz-14 bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CollectionCard;
