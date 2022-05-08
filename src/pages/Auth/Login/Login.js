import React, { useState } from "react";
import {
  useAuthState,
  useSendEmailVerification,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import bg from "../../../assets/Images/bg_1.jpg";
import CustomizedSnackbars from "../../../component/CustomizedSnackbars/CustomizedSnackbars";
import auth from "../../../firebase.init";
import "./login.css";
import { AnimatePresence, motion } from "framer-motion";

const Login = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  // state: { prevPath: location.pathname }}}
  // window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   })

  // Check user login
  const [CheckUser, CheckLoading, CheckError] = useAuthState(auth);

  // login with email password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // email varification

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user || CheckUser) {
    return navigate(
      from,
      {
        state: {
          location: "login",
        },
      },
      { replace: true }
    );
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ease:"easeInOut" ,duration: 0.5 }}
        className="d-lg-flex half"
      >
        <div
          className="bg order-1 order-md-2"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        ></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 h-75">
                <h3>Sign In</h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                  consectetur adipisicing.
                </p>
                <form action="#" method="post" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group first">
                        <label>Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="e.g. john@your-domain.com"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group first">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="********"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mb-5 mt-4 align-items-center">
                    <div className="d-flex align-items-center">
                      <label className="control control--checkbox mb-0">
                        <span className="caption">Keep me Locked in</span>
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                      </label>
                    </div>
                  </div>

                  <input
                    type="submit"
                    value="Login"
                    className="btn px-5 btn-primary"
                  />
                  <p className="caption">
                    Don't have account ?{" "}
                    <Link
                      to="/register"
                      className="text-primary fw-bolder mt-2"
                    >
                      Create New One
                    </Link>
                  </p>
                </form>
              </div>
              {error && (
                <CustomizedSnackbars type={"error"} massage={error.message} />
              )}
            </div>
            {/* <p className=""  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatum nobis, quod quos blanditiis aliquam similique, maxime fuga fugiat pariatur dolorum modi aut officia magni mollitia sunt atque non corrupti.</p> */}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
