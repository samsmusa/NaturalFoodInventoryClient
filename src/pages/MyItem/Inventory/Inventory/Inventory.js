import { Box, CircularProgress } from '@mui/material';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis } from 'recharts';
import MyItemCard from "../../../../component/MyItemCard/MyItemCard"
import Categories from '../../../../component/Catagories/Categories';
import LoadHomeData from '../../../../component/loadData/LoadHomeData';
import useComponentVisible from '../../../../component/useComponentVisible/useComponentVisible';
import auth from '../../../../firebase.init';
import { useForm } from 'react-hook-form';

var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
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
  
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


const Inventory = () => {

    const [user, loading, error] = useAuthState(auth);

    const [selectedOption, setSelectedOption] = useState(catagorie[0]);
    const [id, setid] = useState("we");
    const [formData, setformData] = useState({});
    const [alldata, setalldata] = useState([]);
    const url = `http://localhost:5000/products/${user.email}`
    useEffect(()=>{
      fetch(url, {
        headers: {
          authorization: localStorage.getItem('accessToken')
        }
      })
        .then(res=>res.json())
        .then(result=>setalldata(result))
    },[])
    const [isAdd, setisAdd] = useState(true);
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  
    const editItem = (id, category) => {
       setid(id);
       setSelectedOption(category);
      
    };
  
    const removeItem = async (id) => {
      await fetch(`http://localhost:5000/products/${id}`,  {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body : JSON.stringify({email:user.email})
      })
      .then(res=>res.json())
      .then(result=>setalldata(result)) 
    };
    useEffect(() => {
      setformData(alldata.find((itm) => itm._id === id));
    }, [id]);

    useEffect(()=>{
      reset(formData)
    },[formData])
  
    // const handleChangeTitle = (event) => {
    //   const { name, ...res } = formData;
    //   setformData({ name: event.target.value });
    // };
    
    // const handleChangePrice = (event) => {
    //   const { price, ...res } = formData;
    //   setformData({ price: event.target.value });
    // };
    // const handleChangeQuantity = (event) => {
    //   const { quantity, ...res } = formData;
    //   setformData({ quantity: event.target.value });
    // };
    // const handleChangeTitle = (event)=>{
    //   const {name, ...res} = formData
    //   setformData({name:event.target.value})
    // }
    const addItem = () => {
      setisAdd(true);
      setSelectedOption("Cereals");
      setformData({
        title: "",
        image: "",
        price: "",
        quantity: "",
        category: "Cereals",
        description: "",
      });
      setid("");
    };

    // refresh item

    const RefreshItem = ()=>{
        setalldata([])
        let [datas] = LoadHomeData()
    }
  
    

    const onSubmit = async (data) => {
      data.email = user.email;
      if(isAdd){
      data.addDate = utc
      await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body : JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>setalldata([result, ...alldata]))
      reset({
        title: "",
        image: "",
        price: "",
        quantity: "",
        category: "Cereals",
        description: "",
      })
    }else {
      data.editDate = utc
      let {_id, ...res}= data
      await fetch(`http://localhost:5000/products/${formData._id}`, {
        method: "PUT",
        headers: {
          'content-type': 'application/json'
        },
        body : JSON.stringify(res)
      })
      .then(res=>res.json())
      .then(result=>{
        let objIndex = alldata.findIndex((obj => obj._id === result._id));
        alldata[objIndex] = result
        
        setalldata([...alldata]) 
      }
      )
      reset({
        title: "",
        image: "",
        price: "",
        quantity: "",
        category: "Cereals",
        description: ""})

    }
    };

    return (
        <div className='row'>
            <div className="p-0 px-2 col-9">
          
          <AnimateSharedLayout>
            <div className="panel-heading ">
              <li
                className=" d-flex justify-content-between align-items-center list-group-item table-heading text-center text-light"
                aria-current="true"
              >
                <input
                  type="submit"
                  onClick={addItem}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  value="Add New"
                  className="text-center mx-2 border-0 btn-sm  text-dark"
                  style={{
                    backgroundColor: "#E7E6DC",
                    fontWeight: "600",
                    textShadow: "0.3px 0.5px 5px  gray",
                  }}
                />
                <span>{alldata.length !== 0 ? `You have ${alldata.length} Products`: "No Product available ! please Add something"}</span>
                <i className="fas fa-sync mx-3 " onClick={RefreshItem} onMouseEnter={(event)=> event.target.classList.add('fa-spin')} onMouseLeave={(event)=>event.target.classList.remove('fa-spin')}></i>
              </li>
              <li
                className="list-group-item text-center text-dark"
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
            <div className="panel-body">
              <ul
                className="list-group scrollspy-example"
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
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.5 }}
                      transition={{ ease: "easeIn", duration: 0.2 }}
                      key={item._id}
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
          </AnimateSharedLayout>
        </div>
        <div className="bg-light rounded border  col-3 p-0 m-0">
          
          <div className="p-2 contents  h-100">
            <Categories alldata={alldata} setalldata={setalldata} url={url}/>
            
            <div className="border rounded border-primary">
              <p className="text-center text-light table-heading">Sales Graph</p>
            <ComposedChart width={250} height={250} data={data}>
              {/* <XAxis dataKey="name" /> */}
              {/* <YAxis /> */}
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="pv" barSize={15} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </div>
          </div>
        </div>

        <div
        className="modal fade"
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: "#e5e6eb" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {isAdd ? "Add New Item" : "Edit Item"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="px-3">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group first">
                      <label>Product Title </label>
                      <input
                        type="text" 
                        className="form-control"
                        placeholder="ef mango"
                        defaultValue={formData?.title}
                        name="title"
                        {...register("title")}
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
                        defaultValue={formData?.image}
                        name="image"
                        {...register("image")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group first">
                      <label>Product Description</label>
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="This Product...."
                        defaultValue={formData?.description}
                        name="description"
                        {...register("description")}
                      />
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-12 ">
                    <div className="form-group first">
                      <label>Product Category</label>
                      <select
                        defaultValue={selectedOption}
                        className="form-control"
                        {...register("category")}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      >
                        {catagorie.map((itm, index) => (
                          <option key={index+'009'} defaultValue={itm}>
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
                        defaultValue={formData?.price}
                        name="price"
                        {...register("price")}
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
                        defaultValue={formData?.quantity}
                        name="quantity"
                        {...register("quantity")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                <input
                  type="button"
                  data-bs-dismiss="modal"
                  defaultValue={"Close"}
                  className="active-category text-center mt-3 table-heading-close"
                  style={{ border: "none" }}
                />
                <input
                  type="submit"
                  defaultValue={isAdd ? "Add" : "Edit"}
                  data-bs-dismiss="modal"
                  className="active-category text-center mt-3 table-heading"
                  style={{ border: "none" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      
        </div>
    );
};

export default Inventory;