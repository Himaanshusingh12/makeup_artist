import React from "react";
import Navbar from "./Navbar";

function Header1() {
  return (
    <>
      <div>
        <Navbar />
        <section
          class="w3l-main-slider banner-slider position-relative"
          id="home"
        >
          <div class="owl-one owl-carousel owl-theme">
            <div class="item">
              <div class="slider-info banner-view banner-top1">
                <div class="container">
                  <div class="banner-info header-hero-19">
                    <h5>Beauty Care for Everyone</h5>
                    <h3 class="title-hero-19">
                      Experience the Best Beauty Services
                    </h3>
                  </div>
                  <div class="banner-info header-hero-19 banner-info2 header-hero-192">
                    <h5>Spa for your Style Fitness</h5>
                    <h3 class="title-hero-19">
                      Professional Makeup & Skin Care
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="scroll-button">
            <a href="#about" class="scroll">
              <div class="arrow"></div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Header1;
