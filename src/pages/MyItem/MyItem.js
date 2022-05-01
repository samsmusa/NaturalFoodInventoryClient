import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Categories from "../../component/Catagories/Categories";
import LoadHomeData from "../../component/loadData/LoadHomeData";
import MyItemCard from "../../component/MyItemCard/MyItemCard";
import "./MyItem.css";
import "./CreateItem.css";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import useComponentVisible from "../../component/useComponentVisible/useComponentVisible";
// import "./style.css"
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
// timestamp= {nanoseconds: 0,
//   seconds: 1562524200}

//   console.log(new Date(timestamp.seconds*1000))

const MyItem = () => {
  // hadnle user
  const [user, loading, error] = useAuthState(auth);
  const { lastSignInTime, creationTime } = user;
  console.log(user?.metadata?.lastSignInTime);
  console.log(user?.metadata?.creationTime);

  const [selectedOption, setSelectedOption] = useState(catagorie[0]);
  const [id, setid] = useState("we");
  const [formData, setformData] = useState({});
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);
  const [alldata, setalldata] = LoadHomeData();
  const [isAdd, setisAdd] = useState(false);

  const editItem = (id, category) => {
    // setisAdd(true);
    console.log(category);
    setSelectedOption(category);
    setid(id);
  };

  const removeItem = (id) => {
    setalldata([...alldata.filter((itm) => itm._id != id)]);
  };
  useEffect(() => {
    setformData(alldata.find((itm) => itm._id == String(id)));
  }, [id]);

  const handleChangeTitle = (event) => {
    const { name, ...res } = formData;
    setformData({ name: event.target.value });
  };
  // const handleChangeImage = (event)=>{
  //   const {name, ...res} = formData
  //   setformData({name:event.target.value})
  // }
  const handleChangePrice = (event) => {
    const { price, ...res } = formData;
    setformData({ price: event.target.value });
  };
  const handleChangeQuantity = (event) => {
    const { quantity, ...res } = formData;
    setformData({ quantity: event.target.value });
  };
  // const handleChangeTitle = (event)=>{
  //   const {name, ...res} = formData
  //   setformData({name:event.target.value})
  // }
  const addItem = () => {
    setisAdd(false);
    setSelectedOption("Cereals");
    setformData({
      name: "",
      image: "",
      price: "",
      quantity: "",
      category: "Cereals",
    });
    setid("");
  };

  const submitHandle = (event) => {
    console.log(event.target.title.value);
    event.preventDefault();
    if (!isAdd) {
      console.log(102);
      setalldata([
        {
          name: event.target.title.value,
          catagory: event.target.title.value,
          price: event.target.price.value,
          quantity: selectedOption,
        },
        ...alldata,
      ]);
    } else {
      console.log(502);
      const editdata = alldata.find((itm) => itm._id == String(id));
      editdata.name = event.target.title.value;
      // editdata.name = event.target.image.value
      editdata.price = event.target.price.value;
      editdata.quantity = event.target.quantity.value;
      editdata.catagory = selectedOption;

      setalldata([editdata, ...alldata.filter((itm) => itm._id != id)]);
    }
  };
  return (
    <div className="container p-0  bg-light">
      <div className=" Course-Content row p-0 m-0">
        <div className="halfs col-3 p-0 m-0">
          <div className="p-2 pt-5 contents  h-100">
            <Categories alldata={alldata} setalldata={setalldata} />
            <input
              type="submit"
              onClick={addItem}
              value="Add New"
              className="text-center mx-2 btn btn-sm btn-primary text-dark bg-warning"
            />
            <input
              type="submit"
              value="Select item to edit"
              className="text-center btn btn-sm btn-primary mx-2 text-dark bg-danger"
              disabled={!isAdd}
              style={{ cursor: "progress" }}
            />

            <form onSubmit={submitHandle} className="px-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group first">
                    <label>Product Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ef mango"
                      value={formData?.name}
                      name="title"
                      onChange={handleChangeTitle}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group first">
                    <label>Product Image</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="eg htt"
                      value={formData?.image}
                      name="image"
                      onChange={handleChangeTitle}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group first">
                    <label>Product Category</label>
                    <select
                      value={selectedOption}
                      className="form-control"
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      {catagorie.map((itm, index) => (
                        <option key={index} value={itm}>
                          {itm}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group first">
                    <label>Price</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="eg $100"
                      value={formData?.price}
                      name="price"
                      onChange={handleChangePrice}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group first">
                    <label>Total Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="eg 10"
                      value={formData?.quantity}
                      name="quantity"
                      onChange={handleChangeQuantity}
                    />
                  </div>
                </div>
              </div>

              <input
                type="submit"
                value={!isAdd ? "Add" : "Edit"}
                className="active-category text-center mt-3"
                style={{ backgroundColor: "#FF4500", border: "none" }}
              />
            </form>
          </div>
        </div>

        <div className="mt-5 p-0  col-6">
          {/* <div className="col-12 ">
            <div className="d-flex justify-content-between">
              <div>
                <p className="CartSubTitle">last time visit: {user?.metadata?.lastSignInTime}</p>
                <p className="CartSubTitle">Account Created at: {user?.metadata?.creationTime}</p>
              </div>
              <div>
                <p className="CartTitle">My Store</p>
                <p className="CartSubTitle">You have 4 items!</p>
              </div>
            </div>
          </div> */}
          <AnimatePresence>
            <div class="panel-heading">
              <li
                className="list-group-item active text-center"
                aria-current="true"
              >
                An active item
              </li>
              <li
                class="list-group-item text-center text-dark"
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
                      price
                    </p>
                  </div>
                  <div>
                    <p className="m-0 p-0" style={{ color: "#696969" }}>
                      Date added
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
            <div class="panel-body">
              <ul
                className="list-group scrollspy-example"
                data-bs-spy="scroll"
                data-bs-offset="0"
                tabindex="0"
              >
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
                      initial={{ opacity: 0.5, scale: 0.5 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      key={index}
                      className="list-group-item col-12 "
                    >
                      <MyItemCard
                        item={item}
                        id={id}
                        isAdd={isAdd}
                        setisAdd={setisAdd}
                        editItem={editItem}
                        removeItem={removeItem}
                      />
                    </motion.li>
                  ))
                )}
              </ul>
            </div>
          </AnimatePresence>
        </div>
        <div className="col-3 mt-5">
          you have {alldata.length} items
        </div>
      </div>

      <i className="fa-solid fa-trash-xmark"></i>
      <i className="fa-solid fa-trash-xmark"></i>
      <i className="fa-solid fa-trash-xmark"></i>
      <div className="fa-3x">
        <i className="fas fa-spinner fa-spin"></i>
        <i className="fas fa-circle-notch fa-spin"></i>
        <i className="fas fa-sync fa-spin"></i>
        <i className="fas fa-cog fa-spin"></i>
        <i className="fas fa-spinner fa-pulse"></i>
        <i className="fas fa-stroopwafel fa-spin"></i>
      </div>
    </div>
    // <div>
    //   <div className="container">
    //       <div className="mt-3 Course-Content">
    //         <Categories alldata={alldata} setalldata={setalldata} />
    //         <div className="row mt-5">
    //           <div className="col-12">
    //             <p className="CartTitle">My Courses</p>
    //           </div>
    //         </div>

    //         <div className="row">
    //           <div className="col-12">
    //             <p className="CartSubTitle">You have 4 Courses!</p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="flex-row">
    //         <MyItemCard />
    //       </div>

    //   </div>
    // </div>
  );
};

export default MyItem;
