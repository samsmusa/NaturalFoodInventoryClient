import React from "react";
// import "./CategoriesCard.css";
import image from "../../assets/Images/ml.png";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
const HomeItemCards = ({item}) => {
  
  return (
    
    <motion.div 
      initial={{opacity:0.5, scale:0.5 }}
      animate={{y:0, opacity:1, scale:1 }}
      exit={{ scale:0.5 , opacity: 0 }}
      className="Course-Cards">
      <div className="my-card">
        <NavLink to="/">
          <img src={image} loading="lazy" />
          <p className="Course-Title">{item.name} </p>
        </NavLink>
        <p className="Course-Teacher">{item.catagory}</p>
        <p className="Course-info">
          
          <span className="CourseTimesUpdated">{item.quantity.$numberInt}</span>
          <span className="Course-Price">${item.price.$numberDecimal}</span>
          <span className="Course-Price">{item.addDate}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default HomeItemCards;
