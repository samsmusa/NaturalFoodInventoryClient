import React, { useEffect, useState } from "react";
import Categories from "../../component/Catagories/Categories";
import HomepageBanner from "../../component/HomepageBanner/HomepageBanner";
import LoadHomeData from "../../component/loadData/LoadHomeData";
// import MyComponent from "../../component/MyEditor/MyComponent"
import Recommendation from "../../component/Recommendation/Recommendation";
import "./Homepage.css";
import { motion, AnimatePresence } from "framer-motion"
import HomeItemCards from "../../component/HomeItemCards/HomeItemCards";

const Homepage = () => {
  const [alldata, setalldata] = LoadHomeData();

  

  return (
    <div className="container">
      <HomepageBanner />
      <div className="mt-3 Course-Content">
        <div style={{maxWidth:"300px"}}>
        <Categories
         alldata={alldata}
         setalldata={setalldata}
        />
        </div>
        <div className="Course-Content-col">
          <h3 className="CategoriesTitle">Natural-Food-Invantory </h3>
          <div className="Course-Content-wrap">
            <AnimatePresence>
            {alldata.map((e) => (
              <HomeItemCards key={e._id} item={e} />
            ))}
            </AnimatePresence>
          </div>
          <Recommendation />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
