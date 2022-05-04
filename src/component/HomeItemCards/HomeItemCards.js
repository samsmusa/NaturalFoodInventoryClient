import React from "react";
// import "./CategoriesCard.css";
import image from "../../assets/Images/ml.png";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
const HomeItemCards = ({item}) => {
  
  return (
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ease:"easeIn" ,duration: 0.2 }}
      className="Course-Cards">
      <div className="my-card rounded  bg-light">
        <NavLink to="/">
          <img src={image} loading="lazy" />
          <p className="Course-Title m-2">{item.name} </p>
        </NavLink>
        <p className="Course-Teacher mx-2">{item.catagory}</p>
        <p className="Course-info mx-3">
          
          <span className="CourseTimesUpdated">{item.quantity.$numberInt}</span>
          <span className="Course-Price">${item.price.$numberDecimal}</span>
          <span className="Course-Price">{item.addDate}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default HomeItemCards;
