import React, { useEffect, useState } from "react";
import Categories from "../../component/Catagories/Categories";
import HomepageBanner from "../../component/HomepageBanner/HomepageBanner";
import LoadHomeData from "../../component/loadData/LoadHomeData";
// import MyComponent from "../../component/MyEditor/MyComponent"
import Recommendation from "../../component/Recommendation/Recommendation";
import "./Homepage.css";
import { motion, AnimatePresence } from "framer-motion";
import HomeItemCards from "../../component/HomeItemCards/HomeItemCards";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import EmailVerification from "../../component/EmailVefication/EmailVerification";

const Homepage = () => {
  const [alldata, setalldata] = LoadHomeData();
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.location;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ease:"easeIn" ,duration: 0.5 }}
        className="container"
      >
        <HomepageBanner />
        <div className="mt-3 Course-Content">
          <div style={{ maxWidth: "300px" }}>
            <Categories alldata={alldata} setalldata={setalldata} />
          </div>
          <div className="Course-Content-col">
            <h3 className="CategoriesTitle">Natural-Food-Invantory </h3>
            <div className="Course-Content-wrap">
              <AnimatePresence>
                {alldata.length === 0 ? (
                  <Box
                    className="mt-4 w-100 vh-100 justify-content-center"
                    sx={{ display: "flex" }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  alldata.map((e) => <HomeItemCards key={e._id} item={e} />)
                )}
              </AnimatePresence>
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
