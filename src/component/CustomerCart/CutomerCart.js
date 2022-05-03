import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const CutomerCart = ({ user }) => {
  return (
    <div>
      <div className="row p-2 justify-content-between align-items-center bg-light">
        <div className=" col-4 d-flex justify-content-start ">
          <Link className="productLink" to="/">
            <div className="CardImageParent">
              <img
                src={user?.image}
                className="img-fluid"
                style={{ width: "100px", height: "80px" }}
                alt="course"
              />
            </div>
          </Link>

          <div className="product">
            <p className="CourseTitle m-0">{user.name}</p>
            <p className="m-0 p-0" style={{ fontSize: "10px" }}>
              {user?.address?.division}
            </p>
            <p className="m-0 p-0" style={{ fontSize: "10px" }}>
              {user?.address?.district}
            </p>
            <p className="m-0 p-0" style={{ fontSize: "10px" }}>
              {user?.phone}
            </p>
          </div>
        </div>
        <div className=" col-2">
          <p className="m-0 p-0">{user?.totalItemBuy}</p>
        </div>
        <div className=" col-2">
          <p className="m-0 p-0">$ {user?.totalInvest}</p>
        </div>
        <div className=" col-2">{user?.type}</div>
      </div>
    </div>
  );
};

export default CutomerCart;
