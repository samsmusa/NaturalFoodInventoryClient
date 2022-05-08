import React, { useEffect } from "react";
import { useState } from "react";
import "./CategoriesCard.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import LoadHomeData from "../loadData/LoadHomeData";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import LoadDivisions from "../LoadDivisions/LoadDivisions";

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
const Categories = ({ setalldata, alldata, url }) => {
  const catagorie = [
    "Cereals",
    "Roots",
    "Pulses and Nuts",
    "Milk",
    "Eggs",
    "Fish and Shellfish",
    "Meat",
    "Vegetables",
    "Fruits",
    "Fats and Oils",
    "Sweets and Sugars",
    "Spices and Condiments",
    "Beverage",
  ];
  const [catName, setcatName] = useState(catagorie.slice(1, 5));
  const [toggle, setToggle] = useState(true);
  const [value, setValue] = React.useState([0, 1000]);
  const [catdata, setcatdata] = useState([]);


  const [data, setdata] = useState([]);
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(res=>setdata(res))
  },[]);


  const [catValue, setcatValue] = useState([]);
  function handleinput(event) {
    if (event.target.checked) {
      setcatValue([event.target.value, ...catValue]);
    } else {
      setcatValue(catValue.filter((item) => item !== event.target.value));
    }
  };

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };

  

  const seeAll = () => {
    if (toggle) {
      setcatName(catagorie);
    } else {
      setcatName(catagorie.slice(0, 4));
    }
    setToggle(!toggle);
  };

  function valuetext(value) {
    return `${value}`;
  }




  useEffect(() => {
    setalldata(
      data.filter(
        (e) => parseInt(e.price) >= value[0] && parseInt(e.price) <= value[1]
      )
    );
    if (catValue.length !== 0) {
      setalldata(
        data.filter(
          (e) =>
            parseInt(e.price) >= value[0] &&
            parseInt(e.price) <= value[1] &&
            catValue.includes(e.category)
        )
      );
    }
  }, [value, catValue]);

  return (
    <div className="container">
      <AnimateSharedLayout>
        <div className="Categories-main mt-2">
          <h3 className="Categories-heading"> Categories </h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="ListOfCourses"
          ><AnimatePresence>
            {catName.map((e, index) => (
              <motion.div layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} key={index + "1349"} className="m-0">
                <label className="mx-1 overflow-hidden">
                  <input
                    className="mx-1"
                    type="checkbox"
                    value={e}
                    onClick={handleinput}
                  />
                  {e}
                </label>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>
          <input
            type="submit"
            className="text-center border-0  mb-2 bg-transparent"
            style={{
              border: "none",
              textDecoration: "underline",
              fontSize: "12px",
            }}
            onClick={seeAll}
            value={toggle ? "see-all" : "Collapse"}
          />

          <div className="border-top">
            <p className="my-1 fw-bold text-left text-dark">price</p>
            <Box>
              <Slider
                size="small"
                getAriaLabel={() => "Price range"}
                value={value}
                onChange={handleChange1}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
                min={0}
                max={1000}
                // color="#000000"
              />
            </Box>
          </div>
        </div>

        <div className="CategoriesSlider">
          {catName.map((e, index) => (
            <p key={index + "jk"} className="Sactive-categoryy">
              {e}
            </p>
          ))}
          <p
            // variant="primary"
            className="Sactive-category text-center cb"
            style={{ backgroundColor: "#FF4500", border: "none" }}
            onClick={seeAll}
          >
            {toggle ? "SEE-ALL" : "Collapse"}
          </p>
        </div>
        
      </AnimateSharedLayout>
    </div>
  );
};

export default Categories;
