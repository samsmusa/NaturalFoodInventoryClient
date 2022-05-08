import React, { useState } from "react";
import MyComponent from "../../component/MyEditor/MyComponent";
import './CreateCourse.css'
import bg from "../../assets/Images/form-img.jpg"

const CreateCourse = () => {
    const [content, setContent] = useState('')
    
  return (
    <div className="container">
        
        <div className="d-lg-flex  half">
    <div className="bg order-1 order-md-2" style={{ 
      backgroundImage: `url(${bg})`}} ></div>
    <div className="contents order-2 order-md-1">

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-10">
            <h3>Create-New Course:</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            <form action="#" method="post">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group first">
                    <label >Course Title</label>
                    <input type="text" className="form-control" placeholder="e.g. Learn Python in 30 days..." id="title"/>
                  </div>    
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group first">
                    <label >Course Image</label>
                    <input type="text" className="form-control" placeholder="e.g. https://unsplash.com/32456.jpg" id="image"/>
                  </div>    
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group first">
                    <label >About Course</label>
                    <MyComponent setData={setContent} />
                  </div>    
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group first">
                    <label >Price</label>
                    <input type="text" className="form-control" placeholder="$000" id="lname1"/>
                  </div>    
                </div>
                <div className="col-md-6">
                  <div className="form-group first">
                    <label >Total Hours</label>
                    <input type="text" className="form-control" placeholder="e.g. 13h" id="lname"/>
                  </div>    
                </div>
              </div>
              
              <div className="d-flex mb-5 mt-4 align-items-center">
                <div className="d-flex align-items-center">
                <label className="control control--checkbox mb-0"><span className="caption">Creating an account means you're okay with our <a href="#">Terms and Conditions</a> and our <a href="#">Privacy Policy</a>.</span>
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
              </div>
              </div>

              <input type="submit" value="Register" className="btn px-5 btn-primary"/>

            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div>
    </div>
  );
};

export default CreateCourse;
