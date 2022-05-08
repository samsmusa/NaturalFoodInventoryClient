import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, CircularProgress } from "@mui/material";
import CustomerCart from "../../../../component/CustomerCart/CutomerCart";
import LoadDivisions from "../../../../component/LoadDivisions/LoadDivisions";
import LoadDistrict from "../../../../component/LoadDistrict/LoadDistrict";

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
    // x:-10,
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
    // x:10,
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
  const [data, setData] = useState([]);
  const [divisions, setDivisions] = LoadDivisions();
  const [selectDistrict, setselectDistrict] = useState("select");
  const [selectDivision, setSelecteDivision] = useState("");
  const [userType, setUserType] = useState("all");

  //   const [district, setDistrict] = LoadDistrict(selectDivision, selectDistrict);

  const [district, setDistrict] = useState([]);
  useEffect(() => {
    fetch(`https://bdapis.herokuapp.com/api/v1.1/division/${selectDistrict}`)
      .then((res) => res.json())
      .then((result) => setDistrict(result.data));
  }, [selectDivision]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/samsmusa/natural--inventory/master/public/fakedbuser.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setAllData(res);
        setData(res);
      });
  }, []);

  const RefreshItem = () => {
    setAllData([]);
    setUserType("all");
  };

  // filter users with location
  useEffect(() => {
    if (selectDistrict !== "select") {
      setAllData(
        data.filter(
          (e) =>
            e.address.division === selectDivision.toLowerCase() &&
            e.address.district === selectDistrict.toLowerCase()
        )
      );
    }
  }, [selectDivision, selectDistrict]);

  // filter user by type
  const hadleUserType = (type) => {
    setUserType(type);
  };
  useEffect(() => {
    if (userType === "all") {
      setAllData(data);
    } else {
      setAllData(data.filter((e) => e.type === userType));
    }
  }, [userType]);

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
                    Item Buy from your store
                  </p>
                </div>
                <div>
                  <p className="m-0 p-0" style={{ color: "#696969" }}>
                    Total invest
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
                    key={index + "1123434"}
                    className="list-group-item col-12 "
                  >
                    <CustomerCart key={index +"5564343"} user={item} />
                  </motion.li>
                ))
              )}
            </ul>
          </div>
        </AnimatePresence>
      </div>

      <div className="col-3 p-0 m-0  ">
        <div className="card p-0 m-0 mt-3 border border-primary">
          <div className="card-header table-heading  right-side-card">
            Filter with Type
          </div>
          <div className="card-body">
            <motion.div
              className={
                userType == "all"
                  ? "mx-auto mt-0 text-dark d-flex align-items-center justify-content-between select-side-tab w-75"
                  : "mx-auto mt-0 text-dark d-flex align-items-center justify-content-between w-75"
              }
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{ cursor: "pointer" }}
              onClick={() => hadleUserType("all")}
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
                All User
              </motion.span>
              <motion.i
                style={{ color: "#8b8589" }}
                variants={rightslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>
            </motion.div>
            <motion.div
              className={
                userType == "standard"
                  ? "mx-auto mt-0 text-dark d-flex align-items-center justify-content-between select-side-tab w-75"
                  : "mx-auto mt-0 text-dark d-flex align-items-center justify-content-between w-75"
              }
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{ cursor: "pointer" }}
              onClick={() => hadleUserType("standard")}
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
                Standard User
              </motion.span>
              <motion.i
                style={{ color: "#8b8589" }}
                variants={rightslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>
            </motion.div>
            <motion.div
              className={
                userType === "modarate"
                  ? "mx-auto mt-0 text-dark d-flex align-items-center justify-content-between select-side-tab w-75"
                  : "mx-auto mt-0 text-dark d-flex align-items-center justify-content-between w-75"
              }
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{ cursor: "pointer" }}
              onClick={() => hadleUserType("modarate")}
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
              className={
                userType == "premium"
                  ? "mx-auto mt-0 text-dark d-flex align-items-center justify-content-between select-side-tab w-75"
                  : "mx-auto mt-0 text-dark d-flex align-items-center justify-content-between w-75"
              }
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{ cursor: "pointer" }}
              onClick={() => hadleUserType("premium")}
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
        <div className="card p-0 m-0 mt-3">
          <div
            className="card-header right-side-card"
            style={{ backgroundColor: "#a9a9a9" }}
          >
            Filter with location
          </div>
          <div className="card-body mt-3">
            <motion.div
              className="mx-auto mt-0 text-dark d-flex align-items-center justify-content-between select-side-tab-blue table-heading "
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.i
                variants={leftslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>

              <select
                value={selectDivision}
                className="form-control"
                onChange={(e) => {
                  setSelecteDivision(e.target.value);
                  setselectDistrict(e.target.value);
                }}
              >
                {divisions.map((itm, index) => (
                  <option key={index + "432"} value={itm.division}>
                    {itm.division}
                  </option>
                ))}
              </select>
              <motion.i
                // style={{ color: "#8b8589" }}
                variants={rightslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>
            </motion.div>
            <motion.div
              className="mx-auto mt-0 text-dark d-flex align-items-center justify-content-between select-side-tab-blue table-heading "
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.i
                variants={leftslashMotion}
                className="mx-2  mt-0 p-0 fas fa-angle-right"
              ></motion.i>

              <select
                value={selectDistrict}
                className="form-control"
                onChange={(e) => setselectDistrict(e.target.value)}
              >
                {district.map((itm, index) => (
                  <option key={index + "4ed32"} value={itm.district}>
                    {itm.district}
                  </option>
                ))}
              </select>
              <motion.i
                // style={{ color: "#8b8589" }}
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
