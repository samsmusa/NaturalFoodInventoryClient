import React from "react";

const MyVendors = ({ vendor }) => {
  return (
    <div className="row p-2 justify-content-between align-items-center bg-light">
      <div className="col-2 justify-content-between ">
        <p className="m-0 p-0">{vendor?.name}</p>
      </div>
      <div className="col-2 justify-content-between ">
        <p className="m-0 p-0">{vendor?.store}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{vendor?.owner}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{vendor?.phone}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{vendor?.year}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{vendor?.sold}</p>
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{vendor?.revenue}</p>
      </div>
    </div>
  );
};


export default MyVendors;