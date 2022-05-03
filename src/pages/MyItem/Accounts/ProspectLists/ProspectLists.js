import { Box, CircularProgress } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import MyProspectCart from '../../../../component/MyPropectCart/MyProspectCart';

const ProspectLists = () => {
    const [alldata, setAllData] = useState([]);



  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/samsmusa/natural--inventory/master/public/fakebdprosfect.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setAllData(res);
      });
  }, []);

  const RefreshItem = () => {
    setAllData([]);
  };


    return (

    <div className="row">
      <div className=" p-0  col-12 px-2">
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
                    key={index + "1e3ra21"}
                    className="list-group-item col-12 "
                  >
                    <MyProspectCart key={index} user={item} />
                  </motion.li>
                ))
              )}
            </ul>
          </div>
        </AnimatePresence>
      </div>

      
    </div>
  );
};


export default ProspectLists;