import React from "react";
import './HomeBanner.css';
import image from "../../assets/Images/bg1.jpg"

const HomepageBanner = () => {
  return (
    <div className="">
        <p className="Banner-text">
          Best place to <br />
          learn new things
        </p>
        <div className="BannerSection">
          <img className="BannerImage" src={image} alt="banner1" />
        </div>
    </div>
  );
};

export default HomepageBanner;
