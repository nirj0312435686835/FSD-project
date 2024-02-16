import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <>
  <div className="container my-5 ">
      <footer className="bg-dark text-center text-lg-start text-white">
        {/* Grid container */}
        <div className="container p-4">
          {/* Grid row */}
          <div className="row mt-4">
            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">See other books</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Bestsellers</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>All books</a>
                </li>
                <li>
                  <a href="#!" className="text-white"><i className="fas fa-user-edit fa-fw fa-sm me-2"></i>Our authors</a>
                </li>
              </ul>
            </div>
            {/* Grid column */}
            {/* Repeat the same structure for other columns */}
          </div>
          {/* Grid row */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2021 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
    </>
  )
}

export default Footer