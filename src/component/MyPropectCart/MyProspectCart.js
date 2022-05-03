import React from "react";

const MyProspectCart = ({ user }) => {
  return (
    <div className="row p-2 justify-content-between align-items-center bg-light">
      <div className="col-2 justify-content-between ">
        <p className="m-0 p-0">{user?.name}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{user?.email}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{user?.phone}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{user?.comment}</p>
      </div>
      <div className="col-2">
        <p className="m-0 p-0" style={{fontSize:"13px"}}>{user?.rate}</p>
      </div>
      <div className="col-2" style={{fontSize:"13px"}}>{user?.type}</div>
    </div>
  );
};

export default MyProspectCart;
