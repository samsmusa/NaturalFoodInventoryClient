import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/Images/bg_1.jpg'

const Login = () => {
    // window.scrollTo(0,0)
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    return (
        
  <div className="d-lg-flex half">
  <div className="bg order-1 order-md-2" style={{ 
      backgroundImage: `url(${bg})`}}></div>
  <div className="contents order-2 order-md-1">

    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-7 h-75">
          <h3>Sign In</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
          <form action="#" method="post">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group first">
                  <label >Email Address</label>
                  <input type="email" className="form-control" placeholder="e.g. john@your-domain.com" id="email" />
                </div>    
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group first">
                  <label >Password</label>
                  <input type="password" className="form-control" placeholder="********" id="email" />
                </div>    
              </div>
            </div>
            
            
            <div className="d-flex mb-5 mt-4 align-items-center">
              <div className="d-flex align-items-center">
              <label className="control control--checkbox mb-0"><span className="caption">Keep me Locked in</span>
                <input type="checkbox" checked="checked" />
                <div className="control__indicator"></div>
              </label>
            </div>
            </div>

            <input type="submit" value="Register" className="btn px-5 btn-primary" />
            <p className="caption">Don't have account ? <Link to='/register' className='text-primary fw-bolder mt-2' >Create New One</Link></p>

          </form>
        </div>
      </div>
    </div>
  </div>

  
</div>
  
    );
};

export default Login;