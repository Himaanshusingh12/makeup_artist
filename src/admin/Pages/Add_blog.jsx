import React from "react";
import Aheader from "../Components/Aheader";
import Afooter from "../Components/Afooter";

function Add_blog() {
  return (
    <>
      <Aheader />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {/* <div className="card">
              <img
                src="blog-image.jpg"
                className="card-img-top"
                alt="Blog Image"
              /> */}
            <div className="card-body">
              <h5 className="card-title">Write Your Blog</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Enter title"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="content">Blog</label>
                  <textarea
                    className="form-control"
                    name="content"
                    rows={4}
                    placeholder="Write your blog content"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Image</label>
                  <input
                    type="url"
                    className="form-control"
                    name="image"
                    placeholder="Enter image url"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Afooter />
    </>
  );
}

export default Add_blog;
