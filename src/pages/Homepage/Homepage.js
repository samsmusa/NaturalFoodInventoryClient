import React, { useEffect, useState } from "react";
import Categories from "../../component/Catagories/Categories";
import HomepageBanner from "../../component/HomepageBanner/HomepageBanner";
import LoadHomeData from "../../component/loadData/LoadHomeData";
// import MyComponent from "../../component/MyEditor/MyComponent"
import Recommendation from "../../component/Recommendation/Recommendation";
import "./Homepage.css";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import HomeItemCards from "../../component/HomeItemCards/HomeItemCards";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import EmailVerification from "../../component/EmailVefication/EmailVerification";

import image from "../../assets/Images/ml.png";

const Homepage = () => {
  const [alldata, setalldata] = LoadHomeData();
  const [isGrid, setIsGrid] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.location;
  const url = "http://localhost:5000/products/"

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        className="container"
      >
        <HomepageBanner />
        <div className="row g-3">
          <div className="col-3">
            <Categories alldata={alldata} setalldata={setalldata} url={url} />
          </div>
          <div className="col-9">
            <div className="d-flex justify-content-between align-items-center my-3 border-bottom border-primary">
              <h3>Natural-Food-Invantory </h3>{" "}
              <p>
                <i
                  className={
                    isGrid
                      ? "border border-primary px-2 text-primary fas fa-th"
                      : "border border-dark px-2 text-dark fas fa-th"
                  }
                  onClick={() => setIsGrid(true)}
                  style={{ cursor: "pointer" }}
                ></i>{" "}
                <i
                  className={
                    !isGrid
                      ? " border border-primary px-2 text-primary fas fa-list"
                      : " border border-dark px-2 text-dark fas fa-list"
                  }
                  onClick={() => setIsGrid(false)}
                  style={{ cursor: "pointer" }}
                ></i>
              </p>
            </div>
            <div className=" row g-5">
              {/* <div className="col-4"><img src={image} className="img-fluid" /></div>
              <div className="col-4"><img src={image} className="img-fluid" /></div>
              <div className="col-4"><img src={image} className="img-fluid" /></div>
              <div className="col-4"><img src={image} className="img-fluid" /></div>
              <div className="col-4"><img src={image} className="img-fluid" /></div> */}
              <AnimateSharedLayout>
                {alldata.length === 0 ? (
                  <Box
                    className="mt-4 w-100 vh-100 justify-content-center"
                    sx={{ display: "flex" }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  alldata.map((e) => (
                    <HomeItemCards
                      key={e._id + "453"}
                      item={e}
                      isGrid={isGrid}
                    />
                  ))
                )}
              </AnimateSharedLayout>
            </div>
            <Recommendation />
          </div>

          {location.state?.location && <EmailVerification />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Homepage;
