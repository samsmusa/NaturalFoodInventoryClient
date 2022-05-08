import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  const [product, setProudct] = useState({});
  const url = `http://localhost:5000/product/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setProudct(res));
  },[]);

  const {
    register,reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  useEffect(()=>{
    reset({value:0})
  },[product])
  
  const onSubmit = async (data) => {
    const {_id, ...dataValue} = product
    dataValue.quantity = String(parseInt(dataValue.quantity) + parseInt(data.value))
    await fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body : JSON.stringify(dataValue)
    })
    .then(res=>res.json())
    .then(res=>setProudct(res))
  };

  return (
    <div className="container mt-1">
      <div className="Interest-banner">
        <img
          src="https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="interestbanner"
        />
        <p>
          Customer service is not a department. <br /> it's everyone's job
        </p>
        <NavLink to="/">
          <button>Goto Home</button>
        </NavLink>
      </div>
      <div
        className="row  align-items-center vh-100"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601370690183-1c7796ecec61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
          height: "100vh",
        }}
      >
        <div className="col-4">
          <img src={product.image} alt="image" className="img-fluid" />
        </div>
        <div className="col-5 text-light" style={{ fontSize: "25px" }}>
          <div className="">
            <span className="d-block text-light">Name: {product.title}</span>
            <span className="d-block">Added by: {product.email}</span>
            <span className="d-block">Add Date: {product?.addDate}</span>
            <span className="d-block">In Stock: {product?.quantity}</span>
            <span className="d-block">Price: {product?.price}</span>
            <span className="d-block">Category: {product.category}</span>
            <span className="d-block">Description: {product.description}</span>
          </div>
        </div>
        <div className="col-3 justify-content-center ">
          <div className="d-flex  justify-content-center align-items-center">
            <div>
            <button
              className="btn btn-sm table-heading mx-1"
              onClick={handleSubmit(onSubmit)}
            >
              Stock <i className="fas fa-cubes"></i>
            </button></div>
            <div>
              <input
                className="form-control w-50 mx-auto"
                type="number"
                {...register("value", { min: 1, max: 99 })}
                defaultValue={product?.quantity}
              />
              
            </div>
          </div>
          {errors.value && (
                <span
                  className="d-block text-danger"
                  style={{ fontSize: "12px" }}
                >
                  min max value is not mantained(min=1, max=99)
                </span>
              )}
          <div className="mt-2 justify-content-center">
            <input
              type={"submit"}
              value="deliverd"
              onClick={()=>handleSubmit(onSubmit({value:-1}))}
              className="btn btn-success w-75"
              disabled={product?.quantity <= 0 ? true : false}
            />
            {product?.quantity <= 0 ? (
              <span
                className="d-block text-danger"
                style={{ fontSize: "12px" }}
              >
                Please stock some item{" "}
                <i className="fas  fa-exclamation-circle tex-danger"></i>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="col-12 text-center ">
          <Link to="/myitem/inventory/inventory">
            <button className="btn table-heading text-light">
              Manage Inventory <i className="fas fa-cog"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
