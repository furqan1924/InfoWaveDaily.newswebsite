import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div style={{marginBottom:"5rem"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed sticky-top" style={{position: "fixed" , width:"100%" , zIndex:"1" , marginBottom: "2rem"}}>
        <div className="container-fluid ">
          <a href='/' className="navbar-brand">News Website</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item"> <a className="nav-link"  to="/">About Us</a></li> */}
             
              <li className="nav-item dropdown">
                <li className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Catagory
                </li>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/science">Science</Link></li>
                  <li><Link className="dropdown-item" to="/sports"> Sports</Link></li>
                  <li><Link className="dropdown-item" to="/business">Business</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/health">Health</Link></li>
                  <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                 
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>

    </div>
  )
}
