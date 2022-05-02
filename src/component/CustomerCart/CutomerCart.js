
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const CutomerCart = ({user}) => {
    return (
        <div>
            <div
        className="d-flex p-2 justify-content-between align-items-center bg-light"
        
      >
        
        <div className="d-flex justify-content-between "> 
        <Link className="productLink" to="/">
          <div className="CardImageParent">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="img-fluid" style={{width:"100px", height:"80px"}} alt="course" />
          </div>
        </Link>

        <div className="product">
          <p className="CourseTitle m-0">{user.name}</p>
            <p className="m-0 p-0" style={{fontSize:"10px"}}>{user?.address?.city}</p>
            <p className="m-0 p-0" style={{fontSize:"10px"}}>{user?.phone}</p>
        </div>
        </div> 
        <div>
        <p className="m-0 p-0">{user?.email}</p>
        </div>
        <div>
          {/* <p className="m-0 p-0">{userEvent.name}</p> */}
        </div>
        <div>
        xx
        </div>
      </div>
        </div>
    );
};

export default CutomerCart;