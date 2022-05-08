import React from "react";
// import "./CategoriesCard.css";
import image from "../../assets/Images/ml.png";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const HomeItemCards = ({ item, isGrid }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
      className={isGrid ? "col-4 rounded  " : "col-12 rounded  "}
    >
      <div
        className={
          isGrid
            ? "h-100  bg-light d-flex flex-column justify-content-between py-2 px-2"
            : "h-100  row bg-light py-2 m-0 px-2"
        }
      >
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={isGrid ? "" : "col-4 p-0 m-0"}
        >
          <img
            src={item.image}
            className="rounded img-fluid"
            loading="lazy"
            style={{ width: "300px", height: "200px" }}
          />
        </motion.div>
        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={isGrid ? "" : "col-8"}
          >
            <span className="d-block" style={{ fontSize: "14px" }}>
              {item.title}{" "}
            </span>
            <span className="d-block">{item.catagory}</span>
            <span className="d-block" style={{ fontSize: "12px" }}>
              <span className="d-block">{item?.quantity?.$numberInt}</span>
              <span className="d-block" style={{ color: "red" }}>
                ${item.price}
              </span>
              <span className="d-block">
                {" "}
                {item.quantity && item.quantity !== "0" ? (
                  <span style={{ fontSize: "12px" }}>
                    available({item.quantity}){" "}
                    <i class=" text-success fas fa-check-circle"></i>
                  </span>
                ) : (
                  <span style={{ fontSize: "12px" }}>
                    item is not available{" "}
                    <i class="fas fa-exclamation-circle text-warning"></i>
                  </span>
                )}{" "}
              </span>
            </span>
            {isGrid ? (
              ""
            ) : (
              <>
                <span className="d-block" style={{ fontSize: "13px" }}>
                  {item.category}
                </span>
                <span className="d-block" style={{ fontSize: "13px" }}>
                  Stored:{item.email}
                </span>
                <span className="d-block" style={{ fontSize: "13px" }}>
                  Description:
                </span>
                <span className="d-block" style={{ fontSize: "12px" }}>
                  {item.description.slice(0, 200)}...
                </span>
                <Link to={ `/item/${item._id}`} >
                  <button
                    className="table-heading border-0 rounded text-light p-2 mt-4"
                    style={{ fontSize: "13px", fontWeight: "600" }}
                  >
                    {" "}
                    Know more{" "}
                  </button>
                </Link>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
    // <div className="col-4"><img src={image} className="img-fluid" /></div>
  );
};

export default HomeItemCards;
