import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Rating from '../Rating/Rating';
import image from "../../assets/Images/ml.png";
import "./MyItemCard.css";
import { motion } from "framer-motion";

import useComponentVisible from "../../component/useComponentVisible/useComponentVisible"

const buttonva = {
  hover: {
    scale: 1.2,
    rotate:15,
    transition: {
      yoyo: Infinity,
    },
  },
};

const MyCourseCard = ({ item,id, isAdd,setisAdd, editItem,  removeItem}) => {
  const [hovered, setHovered] = useState(false);
//   const [select, setSelect] = useState(false)
  const toggleHover = () => setHovered(!hovered);

//   const {
//     ref,
//     isComponentVisible,
//     setIsComponentVisible
//   } = useComponentVisible(false);

  const hadleEdit=(id)=>{
    editItem(id)
    // setIsComponentVisible(true)

    // setSelect(true)
    setisAdd(false)

  }
//   useEffect(()=>{
//       console.log(select, isComponentVisible)
//     // setIsComponentVisible(true)
//     // setisAdd(!isComponentVisible)
//     setSelect(false)
//   },[isAdd])
  return (
    <div className="CartContent">
      <div className={  (id==item._id) ? "CardMain position-relative bg-warning " : "CardMain position-relative "}>
        <motion.div
          variants={buttonva}
          whileHover="hover"
          className="fa-2x position-absolute top-0 end-0"
          
        >
          <i
            class="m-2 fas fa-trash"
            style={{ color: "#FF4500", cursor: "pointer" }}
            onClick={()=>{removeItem(item._id)}}
          >X</i>
        </motion.div>
        <motion.div className="fa-2x position-absolute bottom-0 end-0">
          <motion.i
            whileHover={{ scale: 1.1 }}
            className={hovered ? " m-2 fas fa-cog fa-spin" : " m-2 fas fa-cog"}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            style={!(id==item._id)? { color: "orange", cursor: "pointer" }:{ color: "#FF4500", cursor: "pointer" }}
            onClick={()=>hadleEdit(item._id)}
          >Z</motion.i>
        </motion.div>
        <Link className="productLink" to="/">
          <div className="CardImageParent">
            <img src={image} alt="course" />
          </div>
        </Link>

        <div className="CardSideContent">
          <p className="CourseTitle">{item.name}</p>

          <div className="CardParent1">
            <p className="CourseTeacher">{item.catagory}</p>
          </div>
          <div className="CardParent1">
            <p className="CourseTeacher">{item.catagory}</p>
          </div>

          <div className="CardParent3">
            <p className="CoursePrice">₹ {item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
