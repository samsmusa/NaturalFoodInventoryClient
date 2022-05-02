import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, CircularProgress } from "@mui/material";
import CustomerCart from "../../../../component/CustomerCart/CutomerCart";
import LoadDivisions from "../../../../component/LoadDivisions/LoadDivisions";

const textMotion = {
  rest: {
    // color: "white",
    x: 0,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    // color: "white",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const leftslashMotion = {
  rest: { opacity: 1, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    rotate: 180,
    x:-10,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};
const rightslashMotion = {
  rest: {
    opacity: 1,
    rotate: 180,
    ease: "easeOut",
    duration: 0.2,
    type: "tween",
  },
  hover: {
    opacity: 1,
    x:10,
    rotate: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};
// const [divisions, setDivisions] = LoadDivisions();
const CustomerList = () => {
  const [alldata, setAllData] = useState([]);
  const [divisions, setDivisions] = LoadDivisions();
  const [selectedOption, setSelectedOption] = useState("")


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setAllData(res));
  }, [alldata]);

  const RefreshItem = () => {
    setAllData([]);
  };
  return (
    <div className="row">
      <div className=" p-0  col-9 px-2">
        <AnimatePresence>
          <div className="panel-heading ">
            <li
              className=" d-flex justify-content-between align-items-center list-group-item table-heading text-center text-light"
              aria-current="true"
            >
              <span>
                {alldata.length !== 0
                  ? `You have ${alldata.length} Active Customers`
                  : "No customer available ! please sell something"}
              </span>
              <i
                className="fas mx-3 fa-sync "
                onClick={RefreshItem}
                onMouseEnter={(event) => event.target.classList.add("fa-spin")}
                onMouseLeave={(event) =>
                  event.target.classList.remove("fa-spin")
                }
              ></i>
            </li>
            <li
              className="list-group-item text-center text-dark"
              aria-current="true"
              style={{
                backgroundColor: "#c4c3d0",
                fontSize: "15px",
                color: "black",
              }}
            >
              <div
                className="d-flex justify-content-between m-0 p-0"
                style={{ color: "black" }}
              >
                <div>
                  <p className="m-0 p-0 fw-400" style={{ color: "#696969" }}>
                    Image
                  </p>
                </div>
                <div>
                  <p className="m-0 p-0" style={{ color: "#696969" }}>
                    info
                  </p>
                </div>
                <div>
                  <p className="m-0 p-0" style={{ color: "#696969" }}>
                    price
                  </p>
                </div>
                <div>
                  <p className="m-0 p-0" style={{ color: "#696969" }}>
                    Date added
                  </p>
                </div>
                <div>
                  <p className="m-0 p-0" style={{ color: "#696969" }}>
                    edit/delete
                  </p>
                </div>
              </div>
            </li>
          </div>
          <div className="panel-body">
            <ul className="list-group scrollspy-example">
              {alldata.length === 0 ? (
                <Box
                  className="w-100 vh-50 justify-content-center align-items-center"
                  sx={{ display: "flex" }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                alldata.map((item, index) => (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.5 }}
                    transition={{ ease: "easeIn", duration: 0.2 }}
                    key={index+'1005621'}
                    className="list-group-item col-12 "
                  >
                    <CustomerCart key={index} user={item} />
                  </motion.li>
                ))
              )}
            </ul>
          </div>
        </AnimatePresence>
      </div>

      <div className="col-3 p-0 m-0 ">
        <div class="card p-0 m-0 border border-primary">
          <div class="card-header table-heading right-side-card">
            Filter with Type
          </div>
          <div class="card-body">
            <motion.div
              className="mx-auto mt-0 text-dark d-flex align-items-center justify-content-center select-side-tab "
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.i
                variants={leftslashMotion}
                style={{ color: "#8b8589" }}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>

              <motion.span
                variants={textMotion}
                className="m-0 p-0 text-left"
                // style={{ fontSize: "15px", color: "#8b8589" }}
              >
                Standard  User
              </motion.span>
              <motion.i
                style={{ color: "#8b8589" }}
                variants={rightslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>
            </motion.div>
            <motion.div
              className="mx-auto mt-0 text-dark d-flex align-items-center justify-content-center "
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.i
                variants={leftslashMotion}
                style={{ color: "#8b8589" }}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>

              <motion.span
                variants={textMotion}
                className="m-0 p-0 text-left"
                style={{ fontSize: "15px", color: "#8b8589" }}
              >
                Modarate User
              </motion.span>
              <motion.i
                style={{ color: "#8b8589" }}
                variants={rightslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>
            </motion.div>
            <motion.div
              className="mx-auto mt-0 text-dark d-flex align-items-center justify-content-center "
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.i
                variants={leftslashMotion}
                style={{ color: "#8b8589" }}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>

              <motion.span
                variants={textMotion}
                className="m-0 p-0 text-left"
                style={{ fontSize: "15px", color: "#8b8589" }}
              >
                Premium User
              </motion.span>
              <motion.i
                style={{ color: "#8b8589" }}
                variants={rightslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>
            </motion.div>
          </div>
        </div>
        <div class="card p-0 m-0">
          <div
            class="card-header right-side-card"
            style={{ backgroundColor: "#a9a9a9" }}
          >
            Filter with location
          </div>
          <div class="card-body">
          <motion.div
              className="mx-auto mt-0 text-dark d-flex align-items-center justify-content-center select-side-tab-blue table-heading "
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.i
                variants={leftslashMotion}
                // style={{ color: "#8b8589" }}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>

              {/* <motion.span
                variants={textMotion}
                className="m-0 p-0 text-left text-white"
                // style={{ fontSize: "15px", color: "#8b8589" }}
              >
                Customer Lists
              </motion.span> */}
              {/* <select
                        value={selectedOption}
                        className="form-control"
                        onChange={(e) => setSelectedOption(e.target.value)}
                      >
                        {divisions.map((itm, index) => (
                          <option key={index+'432'} value={itm}>
                            {itm}
                          </option>
                        ))}
                      </select> */}
              <motion.i
                // style={{ color: "#8b8589" }}
                variants={rightslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>
            </motion.div>
          </div>
        </div>
        <div class="card p-0 m-0 border border-primary">
          <div class="card-header  table-heading right-side-card">
            Filter with location
          </div>
          <div class="card-body">
            <motion.div
              className="mx-auto mt-0 text-dark d-flex align-items-center justify-content-center select-side-tab "
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.i
                variants={leftslashMotion}
                style={{ color: "#8b8589" }}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>

              <motion.span
                variants={textMotion}
                className="m-0 p-0 text-left"
                // style={{ fontSize: "15px", color: "#8b8589" }}
              >
                Customer Lists
              </motion.span>
              <motion.i
                style={{ color: "#8b8589" }}
                variants={rightslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>
            </motion.div>
            <motion.div
              className="mx-auto mt-0 text-dark d-flex align-items-center justify-content-center "
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.i
                variants={leftslashMotion}
                style={{ color: "#8b8589" }}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>

              <motion.span
                variants={textMotion}
                className="m-0 p-0 text-left"
                style={{ fontSize: "15px", color: "#8b8589" }}
              >
                Customer Lists
              </motion.span>
              <motion.i
                style={{ color: "#8b8589" }}
                variants={rightslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>
            </motion.div>
            <motion.div
              className="mx-auto mt-0 text-dark d-flex align-items-center justify-content-center "
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.i
                variants={leftslashMotion}
                style={{ color: "#8b8589" }}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>

              <motion.span
                variants={textMotion}
                className="m-0 p-0 text-left"
                style={{ fontSize: "15px", color: "#8b8589" }}
              >
                Customer Lists
              </motion.span>
              <motion.i
                style={{ color: "#8b8589" }}
                variants={rightslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
