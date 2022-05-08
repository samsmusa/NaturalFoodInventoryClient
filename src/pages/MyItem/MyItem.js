import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Categories from "../../component/Catagories/Categories";
import LoadHomeData from "../../component/loadData/LoadHomeData";
import MyItemCard from "../../component/MyItemCard/MyItemCard";
import "./MyItem.css";
import "./CreateItem.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Line, CartesianGrid, XAxis, YAxis, ComposedChart, Tooltip, Legend, Area, Bar } from 'recharts';

import useComponentVisible from "../../component/useComponentVisible/useComponentVisible";

const MyItem = () => {
  const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  // hadnle user
  const [user, loading, error] = useAuthState(auth);

  let location = useLocation();

  let locationName = location.pathname;

  
  return (
    <div className="container my-container p-0  bg-light">
      <div className=" Course-Content row p-0 m-0">
        <AnimatePresence>
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="col-2 m-0 p-0"
          style={{ backgroundColor: "#dcdcdc" }}
        >
          <div className="px-2 border rounded bg-light">
            <p className="m-0 p-0" style={{ color: "#696969" }}>
              Loged in: {user.email}
            </p>
            <p
              className="m-0 p-0"
              style={{ fontSize: "12px", color: "#696969" }}
            >
              Last view at: {user?.metadata?.lastSignInTime}
            </p>
            <p
              className="m-0 p-0"
              style={{ fontSize: "12px", color: "#696969" }}
            >
              Account Created at: {user?.metadata?.creationTime}
            </p>
          </div>
          <div className="list-group">
          <div className="mt-2 p-0 py-2 rounded" style={{ backgroundColor: "#f4f0ec" }}>
            <div className="d-flex m-0 mx-2 p-0 align-items-center justify-content-start">
              <i className="fa-2x fas fa-cog" onMouseEnter={(event)=> event.target.classList.add('fa-spin')} onMouseLeave={(event)=>event.target.classList.remove('fa-spin')}></i>
              <span className="mx-3 fs-3 fw-bold">Accounts</span>
            </div>
            <div>
              <div className={locationName==="/myitem/accounts/customer" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
                <Link to="accounts/customer">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Customer Lists
                </span>
                </Link>
              </div>
              <div className={locationName==="/myitem/accounts/prospect" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
              <Link to="accounts/prospect">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Prospect Lists
                </span>
                </Link>
              </div>
              <div className={locationName==="/myitem/accounts/vendor" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
              <Link to="accounts/vendor">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Vendor Lists
                </span>
                </Link>
              </div>
              <div className={locationName==="/myitem/accounts/sales" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
              <Link to="accounts/sales">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Sales Opportunities
                </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-2 p-0 py-2 rounded" style={{ backgroundColor: "#f4f0ec" }}>
            <div className="d-flex m-0 mx-2 p-0 align-items-center justify-content-start">
              <i className="fa-2x fas fa-warehouse-full"></i>
              <span className="mx-3 fs-3 fw-bold">Orders</span>
            </div>
            <div>
              <div className={locationName==="/myitem/orders/salesorder" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
                <Link to="orders/salesorder">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Sales Orders
                </span>
                </Link>
              </div>
              <div className={locationName==="/myitem/orders/purchase" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
              <Link to="orders/purchase">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Purchase Orders
                </span>
                </Link>
              </div>
              <div className={locationName==="/myitem/orders/quotation" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
              <Link to="orders/quotation">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Quotations
                </span>
                </Link>
              </div>
              <div className={locationName==="/myitem/orders/invoices" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
              <Link to="orders/invoices">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Invoices
                </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-2 p-0 py-2 rounded" style={{ backgroundColor: "#f4f0ec" }}>
            <div className="d-flex m-0 mx-2 p-0 align-items-center justify-content-start">
              <i className="fa-2x fas fa-warehouse-full"></i>
              <span className="mx-3 fs-3 fw-bold">Inventory</span>
            </div>
            <div>
              <div className={locationName==="/myitem/inventory/inventory" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
                <Link to="inventory/inventory">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Inventory Lists
                </span>
                </Link>
              </div>
              <div className={locationName==="/myitem/inventory/stock" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
              <Link to="inventory/stock">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Stock Transfers
                </span>
                </Link>
              </div>
              <div className={locationName==="/myitem/inventory/categories" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
              <Link to="inventory/categories">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Manage Categories{" "}
                </span>
                </Link>
              </div>
              <div className={locationName==="/myitem/inventory/attributes" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
              <Link to="inventory/attributes">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Manage Attributes{" "}
                </span>
                </Link>
              </div>
              <div className={locationName==="/myitem/inventory/lz" ? "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab  select-side-tab" : "mx-3 my-2 text-dark d-flex align-items-center justify-content-start side-tab"} onClick={goToTop}>
              <Link to="inventory/lz">
                <i
                  className="mx-2  mt-0 p-0 fas fa-angle-right"
                  style={{ color: "#8b8589" }}
                ></i>
                <span
                  className="m-0 p-0 text-left"
                  style={{ fontSize: "15px", color: "#8b8589" }}
                >
                  Location & ZOnes{" "}
                </span>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
        </AnimatePresence>
        <div className="col-10">
          <Outlet/>
        </div>
      </div>

      
      
    </div>
    
  );
};

export default MyItem;
