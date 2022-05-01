import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Rating from '../Rating/Rating';
import image from "../../assets/Images/ml.png";
import "./MyItemCard.css";
import { motion } from "framer-motion";

import useComponentVisible from "../../component/useComponentVisible/useComponentVisible";

const buttonva = {
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: {
      yoyo: Infinity,
    },
  },
};

const MyCourseCard = ({ item, id, isAdd, setisAdd, editItem, removeItem }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const hadleEdit = (id, category) => {
    editItem(id, category);
    setisAdd(true);
  };
  return (
    <div className="CartContent">
      <div
        className={
          id == item._id
            ? "d-flex justify-content-between align-items-center bg-warning "
            : "d-flex justify-content-between align-items-center bg-light"
        }
      >
        
        <div className="d-flex justify-content-between "> 
        <Link className="productLink" to="/">
          <div className="CardImageParent">
            <img src={image} className="img-fluid" style={{width:"100px", height:"80px"}} alt="course" />
          </div>
        </Link>

        <div className="product">
          <p className="CourseTitle m-0">{item.name}</p>
            <p className="m-0 p-0" style={{fontSize:"10px"}}>{item.catagory}</p>
            <p className="m-0 p-0" style={{fontSize:"10px"}}>{item.catagory}</p>
        </div>
        </div> 
        <div>
        <p className="m-0 p-0">{item.price}</p>
        </div>
        <div>
          <p className="m-0 p-0">sun, 1 july, 2020</p>
        </div>
        <div>
        <motion.i
            whileHover={{ scale: 1.1 }}
            className={hovered ? " m-2 fas fa-cog fa-spin" : " m-2 fas fa-cog"}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            style={
              !(id == item._id)
                ? { color: "orange", cursor: "pointer" }
                : { color: "#FF4500", cursor: "pointer" }
            }
            onClick={() => hadleEdit(item._id, item.catagory)}
          ></motion.i>
          <motion.i
            variants={buttonva}
            whileHover="hover"
            class="m-2 fas fa-trash"
            style={{ color: "#FF4500", cursor: "pointer" }}
            onClick={() => {
              removeItem(item._id);
            }}
          ></motion.i>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
