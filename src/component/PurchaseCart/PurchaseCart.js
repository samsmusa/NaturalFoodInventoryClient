import React from "react";

const PurchaseCart = ({ data }) => {
  return (
    <div className="row p-2 justify-content-between align-items-center bg-light">
      <div className="col-2 justify-content-between ">
        <p className="m-0 p-0" style={{fontSize:"14px"}}>{data?.title}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{data?.customer?.name}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{data?.category}</p>
      </div>
      <div className="col-1">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>$ {data?.price}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{data?.rating?.count}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>$ {data?.price * data?.rating?.count}</p>
      </div>
      <div className="col-1" style={{fontSize:"13px"}}>{data?.status ? <i className="fa-solid fa-2x text-success fa-circle-check"></i> : <i className="text-danger  fa-2x fas fa-circle-xmark"></i>}</div>
    </div>
  );
};

export default PurchaseCart;

