import React from "react";
import { NavLink } from "react-router-dom";

function Aheader() {
  return (
    <>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
            <h1>
              <a className="navbar-brand pe-xl-5 pe-lg-4" href="index.html">
                Dashboard
              </a>
            </h1>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/Manage_artist"
                  >
                    Manage artist
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Manage_contact">
                    Manage Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Add_blog">
                    Add Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Manage_blog">
                    Manage Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  {/* <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Blog
                    </NavLink>
                    <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                      <NavLink to="/Add_blog" className="dropdown-item">
                        Add-Blog
                      </NavLink>
                      <NavLink to="/Manage_blog" className="dropdown-item">
                        Manage-Blog
                      </NavLink>
                    </div>
                  </div> */}
                </li>
              </ul>
            </div>
            {/* toggle switch for light and dark theme */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun" />
                      <i className="gg-moon" />
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            {/* //toggle switch for light and dark theme */}
          </nav>
        </div>
      </header>
      <div className="inner-banner py-5"></div>
    </>
  );
}

export default Aheader;
