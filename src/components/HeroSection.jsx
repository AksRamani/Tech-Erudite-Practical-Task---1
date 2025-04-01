import React from "react";
// import background from "../assets/hero-bg.svg";
import sectionBG from "../assets/hero-bg.png";
import heroBG from "../assets/Asset 1@4xbanner.png";

const HeroSection = () => {
  return (
    <>
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${sectionBG})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          height: "800px",
        }}
      >
        <div className="container h-100">
          <div className="d-flex align-items-center h-100">
            <div className="row align-items-center ">
              <div className="col-6 text-start">
                <div className="hero-content">
                  <h1 className="hero-title">How much could you save?</h1>
                  <p>
                    {" "}
                    Answer the questions below to get a fixed price quotation
                    for us to take your accountancy hassles away from you.
                  </p>
                </div>
                <div className="hero-expected-box">
                  <h3 className="expected-title">
                    Is your turnover expected to be more than £85k?
                  </h3>
                  <div className="d-flex flex-col gap-2 justify-content-center align-items-center">
                    <button>Yes</button>
                    <button>No</button>
                  </div>
                </div>
                <p className="hero-note">Takes less than 30 seconds</p>
              </div>
              <div className="col-6">
                <img src={heroBG} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
