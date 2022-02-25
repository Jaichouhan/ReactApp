import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
      <div className="container navbar-Sapce">
       <Link to="/" className="navbar-brand"><img src="/images/Untitled-13.png" alt="Logo"/></Link>
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 Navbar_padding">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page"
                >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/details" className="nav-link" >About us</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Selling</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Our Comapny</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" >Media News</Link>
            </li>
            <div className="icon_center">
              <i className="fa fa-heart-o icon_center_i icon_center_i_hover"></i>
              <i className="fa fa-user-o icon_center_i icon_center_i_number"></i>
              {/* <p className='icon_center_i_number_i'>1</p> */}
            </div>
            <li>
              <button className="btn-style theme-btn-1 btn_hover_effect" type="button">
                <div className="Hover_effect_div"></div>
                <Link to="/contact"  className="eff-1"> Contact Now</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar