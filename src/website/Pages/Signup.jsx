import React from "react";
import { Link } from "react-router-dom";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";

function signup() {
  return (
    <>
      <Header2 />
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Sign Up</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  name="mobile"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="profileImage" className="form-label">
                  Your Image
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="profileImage"
                  placeholder="upload your image"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
            <Link to="/Log_in">If you already Registered then Login here</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default signup;
