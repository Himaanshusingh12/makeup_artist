import React from "react";
import Header1 from "../Components/Header1";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header1 />

      {/*/bottom-3-grids*/}
      <div className="w3l-3-grids py-5" id="grids-3">
        <div className="container py-md-5 py-2">
          <div className="title-content text-center">
            <h6 className="title-subw3hny mb-1">About Us</h6>
            <h3 className="title-w3l">Popular Services</h3>
            <p className="text-para mb-4">
              Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.{" "}
            </p>
          </div>
          {/*/row-1*/}
          <div className="row pt-lg-4 mt-5 top-grids3-info">
            <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-4">
              <div className="grids3-info position-relative">
                <a href="#" className="d-block zoom">
                  <img
                    src="assets/images/b3.jpg"
                    alt
                    className="img-fluid news-image"
                  />
                </a>
                <div className="w3-grids3-info"></div>
              </div>
              <h4 className="text-center mt-4">
                <a href="#">Professional Team</a>
              </h4>
              <p className="text-center mb-3">
                Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.
              </p>
              <a className="w3item-link" href="#">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-4 grids3-info2">
              <div className="grids3-info second position-relative">
                <a href="blog-single.html" className="d-block zoom">
                  <img
                    src="assets/images/b2.jpg"
                    alt
                    className="img-fluid news-image"
                  />
                </a>
                <div className="w3-grids3-info second"></div>
              </div>
              <h4 className="gdnhy-1 mt-4">
                <a href="#">Premium Products</a>
              </h4>
              <p className="text-center mb-3">
                Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.
              </p>
              <a className="w3item-link" href="#">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
              <div className="grids3-info position-relative">
                <a href="blog-single.html" className="d-block zoom">
                  <img
                    src="assets/images/b6.jpg"
                    alt
                    className="img-fluid news-image"
                  />
                </a>
                <div className="w3-grids3-info"></div>
              </div>
              <h4 className="gdnhy-1 mt-4">
                <a href="#">The Latest Equipment</a>
              </h4>
              <p className="text-center mb-3">
                Lorem ipsum dolor sit amet, elit. Id ab commodi magnam.
              </p>
              <a className="w3item-link" href="#">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*//bottom-3-grids*/}

      <section className="w3l-video-sec py-5" id="video">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-lg-7 w3l-index5 py-5">
              <div className="w3video-bghny py-5">
                <div className="history-info position-relative py-5 my-lg-5">
                  <a
                    href="#small-dialog1"
                    className="popup-with-zoom-anim play-view text-center position-absolute"
                  >
                    <span className="video-play-icon">
                      <span className="fa fa-play" />
                    </span>
                  </a>
                  {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 w3l-video-info-right ps-lg-5 mt-lg-0 mt-5">
              <div className="title-content-two">
                <h6 className="title-subw3hny">Popular Services</h6>
                <h3 className="title-w3l">Memorable Beauty Experience</h3>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet elit. Velit beatae rem ullam dolore
                  nisi esse quasi, sit amet.Lorem ipsum dolor sit amet elit.
                  Velit beatae rem ullam dolore nisi esse quasi,Lorem ipsum
                  dolor sit amet.
                </p>
                <a
                  href="services.html"
                  className="btn btn-style btn-primary mt-lg-5 mt-4"
                >
                  Our Services{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/Gallery-Section*/}
      <section className="w3l-gallery" id="gallery">
        <div className="destionation-innf py-5">
          <div className="container py-lg-5 py-md-4 py-2 HomePageGallery">
            <div className="title-content text-center">
              <h6 className="title-subw3hny text-center">Gallery</h6>
              <h3 className="title-w3l mb-5 text-center">Photo Gallery</h3>
            </div>
            {/*/grids-grids*/}
            <ul className="gallery_agile">
              <li>
                <div className="w3_agile_portfolio_grid">
                  <a href="#">
                    <img
                      src="https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305147.jpg?t=st=1713942593~exp=1713946193~hmac=c359e16aafeeb4ac74c0ef62048214b624f698f6ec9f58897cba5060122c0721&w=900"
                      alt=" "
                      className="img-fluid radius-image"
                    />
                    {/* <div className="portfolio-info">
                      <h4>Gallery 1</h4>
                      <i className="fas fa-plus details-link" />
                    </div> */}
                  </a>
                </div>
                <div className="w3_agile_portfolio_grid mt-4">
                  <a href="#">
                    <img
                      src="https://img.freepik.com/premium-photo/photo-makeup-artist-doing-bridal-woman-elegant-makeup_763111-159830.jpg?w=740"
                      alt=" "
                      className="img-fluid radius-image"
                    />
                    {/* <div className="portfolio-info">
                      <h4>Gallery 2</h4>
                      <i className="fas fa-plus details-link" />
                    </div> */}
                  </a>
                </div>
              </li>
              <li>
                <div className="w3_agile_portfolio_grid">
                  <a href="#">
                    <img
                      src="https://th.bing.com/th?id=OIP.vvSxipT-s3WPDns0S8fCPAAAAA&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                      alt=" "
                      className="img-fluid radius-image"
                    />
                    {/* <div className="portfolio-info">
                      <h4>Gallery 3</h4>
                      <i className="fas fa-plus details-link" />
                    </div> */}
                  </a>
                </div>
              </li>
              <li>
                <div className="w3_agile_portfolio_grid">
                  <a href="#">
                    <img
                      src="https://th.bing.com/th?id=OIP.mPaZLA03RPQroF-8EMQNBAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                      alt=" "
                      className="img-fluid radius-image"
                    />
                    {/* <div className="portfolio-info">
                      <h4>Gallery 4</h4>
                      <i className="fas fa-plus details-link" />
                    </div> */}
                  </a>
                </div>
                <div className="w3_agile_portfolio_grid mt-4">
                  <a href="#">
                    <img
                      src="https://th.bing.com/th/id/OIP.Jhpu_CmJqkDVHJCkEnpTegHaLG?w=202&h=303&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                      alt=" "
                      className="img-fluid radius-image"
                    />
                    {/* <div className="portfolio-info">
                      <h4>Gallery 5</h4>
                      <i className="fas fa-plus details-link" />
                    </div> */}
                  </a>
                </div>
              </li>
            </ul>
            {/*//grids-grids*/}
          </div>
        </div>
      </section>
      {/*//Gallery-Section*/}

      {/*//testimonials*/}
      <section className="w3l-clients-1" id="testimonials">
        {/*/cusrtomer-layout*/}
        <div className="cusrtomer-layout py-5 pt-0">
          <div className="container py-lg-5 py-md-4 py-2 pt-0">
            {/*/testimonial-grids*/}
            <div className="testimonial-row">
              <div
                id="owl-demo1"
                className="owl-testimonial owl-carousel owl-theme"
              >
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <div className="testi-des">
                        <i className="fas fa-quote-left" />
                        <div className="peopl align-self">
                          <h3>Dennis wilson</h3>
                        </div>
                      </div>
                      <blockquote>
                        Lorem ipsum dolor sit amet int consectetur adipisicing
                        elit. Velita beatae laudantium Quas minima sunt natus
                        tempore, maiores aliquid modi felis vitae facere aperiam
                        sequi optio lacinia id ipsum non velit, culpa. voluptate
                        rem ullam dolore nisi est quasi, doloribus tempora.
                      </blockquote>
                      <ul className="social-media-test m-0 mt-4 p-0">
                        <li>
                          <a href="#facebook" className="facebook">
                            <span className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#twitter" className="twitter">
                            <span className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#instagram" className="instagram">
                            <span className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*//testimonial-grids*/}
          </div>
        </div>
        {/*//cusrtomer-layout*/}
      </section>
      {/* //testimonials */}

      {/*/home-page-mid*/}
      <section className="w3-midhny-sec py-5" id="mid">
        <div className="container py-lg-5">
          <div className="w3-midhny-info">
            <div className="row">
              <div className="col-lg-7">
                <div className="bottom-info">
                  <div className="header-section title-content-two pe-lg-5">
                    <h5 className="title-subw3hny mb-3">Our Special Offer</h5>
                    <h3 className="title-w3l two mb-4">
                      An Incredible Spa <br />
                      Experience
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 align-self mt-lg-0 mt-sm-5 mt-4">
                <div className="w3l-buttons d-sm-flex justify-content-end">
                  <a
                    href="#book"
                    className="btn btn-style btn-white btn-primary"
                  >
                    Make an appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//home-page-mid*/}

      {/*/w3l-subscribe*/}
      <section className="w3l-subscribe-content py-5">
        <div className="container py-md-4 py-3 text-center">
          <div className="row">
            <div className="col-lg-9 col-md-10 mx-auto">
              <div className="subscribe mx-auto">
                <div className="header-section text-center mx-auto">
                  <h6 className="title-subw3hny mb-2">Join Us</h6>
                  <h3 className="title-w3l">Stay Update!</h3>
                  <p className="my-3 px-lg-5">
                    We appreciate your trust greatly! Our clients choose us and
                    our products because they know we’re the best.
                  </p>
                </div>
                <form
                  action="#"
                  method="post"
                  className="subscribe-wthree pt-2 mt-5"
                >
                  <div className="flex-wrap subscribe-wthree-field">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                    <button className="btn btn-style btn-primary" type="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//w3l-subscribe*/}

      <section className="instagram-grid-wrap-top">
        <div className="container-fluid mx-lg-0">
          <div className="row footer-top-29 instagram-grid-wrap px-0">
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="#">
                    <img src="assets/images/b1.jpg" alt className="img-fluid" />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="#">
                        <span className="far fa-heart" />
                        1k
                      </a>
                      <a href="#">
                        <span className="far fa-comment" />9
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="#">
                    <img src="assets/images/b2.jpg" alt className="img-fluid" />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="#">
                        <span className="far fa-heart" />
                        3k
                      </a>
                      <a href="#">
                        <span className="far fa-comment" />6
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="#">
                    <img src="assets/images/b3.jpg" alt className="img-fluid" />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="#">
                        <span className="far fa-heart" />
                        4k
                      </a>
                      <a href="#">
                        <span className="far fa-comment" />7
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="#">
                    <img src="assets/images/b4.jpg" alt className="img-fluid" />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="#">
                        <span className="far fa-heart" />
                        4k
                      </a>
                      <a href="#">
                        <span className="far fa-comment" />8
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="#">
                    <img src="assets/images/b5.jpg" alt className="img-fluid" />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="#">
                        <span className="far fa-heart" />
                        3k
                      </a>
                      <a href="#">
                        <span className="far fa-comment" />9
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="#">
                    <img src="assets/images/b6.jpg" alt className="img-fluid" />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="#">
                        <span className="far fa-heart" />
                        6k
                      </a>
                      <a href="#">
                        <span className="far fa-comment" />7
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
          </div>
        </div>
      </section>
      {/*//instagram-grid-wrap*/}
      <Footer />
    </>
  );
}

export default Home;
