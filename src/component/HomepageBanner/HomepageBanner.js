import React from "react";
import './HomeBanner.css';

const HomepageBanner = () => {
  return (
    <div className="mt-5">
        <p className="Banner-text">
          Best place to <br />
          learn new things
        </p>
        <div className="BannerSection">
          <img className="BannerImage" src="banner.jpg" alt="banner1" />
        </div>
    </div>
  );
};

export default HomepageBanner;
