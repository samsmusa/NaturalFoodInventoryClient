import React, { useEffect } from "react";
import { useState } from "react";
import "./CategoriesCard.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import LoadHomeData from "../loadData/LoadHomeData";

const Categories = ({setalldata, alldata}) => {
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
  const [data, setdata] = LoadHomeData();
  const [catValue, setcatValue] = useState([]);
  function handleinput(event) {
    // console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      
        setcatValue([event.target.value, ...catValue]);
        // console.log(catValue);
      
    } else {
      setcatValue(catValue.filter((item) => item !== event.target.value));
      // console.log(catValue);
    }
    // console.log(catValue);
  }

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
    // console.log(value[0]);
  };

  useEffect(()=>{
    // console.log(value, catValue)
    // console.log(catValue.includes('Eggs'))
    setalldata(data.filter(e=>(parseInt(e.price.$numberDecimal) >= value[0]) && (parseInt(e.price.$numberDecimal) <= value[1]) ))
    if(catValue.length !== 0){
    setalldata(data.filter(e=> (parseInt(e.price.$numberDecimal) >= value[0]) && (parseInt(e.price.$numberDecimal) <= value[1]) && catValue.includes(e.catagory)))
    }
  },[value,catValue])




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

  return (
    <div className="CategoryDevider px-4">
      <div className="Categories-main">
        <h3 className="Categories-heading"> Categories </h3>

        <div className="ListOfCourses">
          {catName.map((e, index) => (
            <div key={index} className="m-0">
              <label className="mx-1">
                <input
                  className="mx-1"
                  type="checkbox"
                  value={e}
                  onClick={handleinput}
                />
                {e}
              </label>
            </div>
          ))}
        </div>
        <input
          type="submit"
          className="active-category text-center cb"
          style={{ backgroundColor: "#FF4500", border: "none" }}
          onClick={seeAll}
          value={toggle ? "SEE-ALL" : "Collapse"}
        />
          

        <p className="my-3 fw-bold text-center text-warning">Prifdf df df df df  dfd fdf df dfd d fdf dce Range</p>
        <Box>
          <Slider
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

      <div
        className="Course-Devider"
        style={{ height: toggle ? "50%" : "92%" }}
      ></div>

      <div className="CategoriesSlider">
        {catName.map((e, index) => (
          <p key={index} className="Sactive-categoryy">
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
    </div>
  );
};

export default Categories;
