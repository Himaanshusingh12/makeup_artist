import React from "react";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";

function Artist_profile() {
  return (
    <>
      <Header2 title="Artist Profile" />

      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center">
                <span />
                My Profile
                <span />
              </p>
              <h1 className="text-center mb-5">
                Edit Profile and Manage Profile
              </h1>
            </div>
            <div className="row g-4">
              <div
                className="offset-lg-4 col-lg-4 col-md-6 offset-md-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item bg-light rounded">
                  <div className="text-center border-bottom p-4">
                    <img className="img-fluid rounded-circle mb-4" src="" alt />
                    <h5>name</h5>
                    <span>Email : </span>
                    <br />
                    <br />
                    <span>ID : </span>
                    <br />
                    <br />
                    <span>Mobile : </span>
                    <br />
                    <br />
                    <button
                      className="btn btn-primary"
                      //   onClick={() => editdata(data.id)}
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Edit Profile
                    </button>

                    <div className="modal" id="myModal">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          {/* Modal Header */}
                          <div className="modal-header">
                            <h4 className="modal-title">Edit Profile</h4>
                            <button
                              type="button"
                              className="btn-close"
                              data-dismiss="modal"
                            />
                          </div>
                          {/* Modal body */}
                          <div className="modal-body">
                            <div className="container">
                              <form action="" method="post">
                                <div className="row g-3">
                                  <div className="col-md-6">
                                    <div className="form-floating">
                                      <label htmlFor="name">Your Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        // value={formvalue.name}
                                        // onChange={getform}
                                        id="name"
                                        placeholder="Your Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <label htmlFor="email">Your Email</label>
                                    <div className="form-floating">
                                      <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        // value={formvalue.email}
                                        // onChange={getform}
                                        id="email"
                                        placeholder="Your Email"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-floating">
                                      <label htmlFor="email">Your Mobile</label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        name="mobile"
                                        // value={formvalue.mobile}
                                        // onChange={getform}
                                        id="email"
                                        placeholder="Your Email"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-floating">
                                      <label htmlFor="email">Your Image</label>
                                      <input
                                        type="url"
                                        className="form-control"
                                        name="img"
                                        // value={formvalue.img}
                                        // onChange={getform}
                                        id="email"
                                        placeholder="enter url"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-12">
                                    <button
                                      //   onClick={submithandel}
                                      data-dismiss="modal"
                                      className="btn btn-primary w-100 py-3"
                                      type="submit"
                                    >
                                      Save
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Artist_profile;
