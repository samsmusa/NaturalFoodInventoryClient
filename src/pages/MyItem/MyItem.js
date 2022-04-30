import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Categories from "../../component/Catagories/Categories";
import LoadHomeData from "../../component/loadData/LoadHomeData";
import MyItemCard from "../../component/MyItemCard/MyItemCard";
import "./MyItem.css";
import "./CreateItem.css";
import { Link } from "react-router-dom";

import useComponentVisible from "../../component/useComponentVisible/useComponentVisible";
// import "./style.css"

const MyItem = () => {
  const [id, setid] = useState("we");
  const [formData, setformData] = useState({});
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  const [alldata, setalldata] = LoadHomeData();
  const [isAdd, setisAdd] = useState(false);

  const editItem = (id) => {
    // setisAdd(false);
    setid(id);
  };
  useEffect(() => {
    setformData(alldata.find((itm) => itm._id == String(id)));
  }, [id]);


  const handleChangeTitle = (event)=>{
    const {name, ...res} = formData
    setformData({name:event.target.value}) 
  }
  // const handleChangeImage = (event)=>{
  //   const {name, ...res} = formData
  //   setformData({name:event.target.value}) 
  // }
  const handleChangePrice = (event)=>{
    const {price, ...res} = formData
    setformData({price:event.target.value}) 
  }
  const handleChangeQuantity = (event)=>{
    const {quantity, ...res} = formData
    setformData({quantity:event.target.value}) 
  }
  // const handleChangeTitle = (event)=>{
  //   const {name, ...res} = formData
  //   setformData({name:event.target.value}) 
  // }
  const addItem = ()=>{
    setisAdd(true)
    setformData({name:'',image:'',price:'',quantity:''})
    setid("");
  }

  const submitHandle=(event)=>{
    console.log(event.target.title.value)
      event.preventDefault()
      if(!isAdd){
        console.log(102)
        setalldata([{
          name:event.target.title.value,
          price:event.target.price.value,
          quantity:event.target.quantity.value
        },...alldata])
      }
      else {
        const editdata = alldata.find((itm) => itm._id == String(id))
        editdata.name = event.target.title.value;
        // editdata.name = event.target.image.value
        editdata.price.$numberDecimal = event.target.price.value;
        editdata.quantity.$numberInt = event.target.quantity.value;

        setalldata([editdata,...alldata.filter(itm=> itm._id!=id)])
      }
  }
  const removeItem = (id) => {};
  return (
    <div className="container bg-light">
      <div className=" Course-Content">
        <div className="halfs">
          <div className="pt-5 contents  h-100">
            <Categories alldata={alldata} setalldata={setalldata} />
            <input type="submit" onClick={addItem} value="Add New" className="text-center mx-2 btn btn-sm btn-primary text-dark bg-warning" />
            <input type="submit"  value="Select item to edit" className="text-center btn btn-sm btn-primary mx-2text-dark bg-danger" disabled={!isAdd} style={{cursor:"progress"}} />
            
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
                    {/* <MyComponent setData={setContent} /> */}
                    dropdwon
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
                value={isAdd ? "Add" : "Edit"}
                className="active-category text-center mt-3"
                style={{ backgroundColor: "#FF4500", border: "none" }}
              />
            </form>
          </div>
        </div>

        <div className="mt-5 row w-100">
          <div className="col-12">
            <p className="CartTitle">My Store</p>
          </div>
          <div className="col-12">
            <p className="CartSubTitle">You have 4 items!</p>
          </div>

          <AnimatePresence>
            {alldata.map((item, index) => (
              <div key={index} className="col-6 ">
                <MyItemCard
                  item={item}
                  id={id}
                  isAdd={isAdd}
                  setisAdd={setisAdd}
                  editItem={editItem}
                  removeItem={removeItem}
                />
              </div>
            ))}
          </AnimatePresence>
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

      <div ref={ref}>
        {isComponentVisible && (
          <span style={{ border: "1px solid black" }}>Going into Hiding</span>
        )}
        {!isComponentVisible && (
          <p onClick={() => setIsComponentVisible(true)}>
            Component hidden: Click me show component again
          </p>
        )}
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
