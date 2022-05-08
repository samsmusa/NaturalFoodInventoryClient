import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import bg from "../../../assets/Images/bg_1.jpg";
import auth from "../../../firebase.init";
import "../Form2.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import CustomizedSnackbars from "../../../component/CustomizedSnackbars/CustomizedSnackbars";
import Parser from "html-react-parser";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { AnimatePresence, motion } from "framer-motion";

const Register = () => {
  const location = useLocation();
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const [auser] = useAuthState(auth)
  // sign with email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    if (!error) {
      navigate('/login')
      };
    };

    if(user || Guser || auser){
      navigate('/')
    }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
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
              <div className="col-md-7 py-5">
                <h3 className="mb-4">Register</h3>

                <form action="#" method="post" onSubmit={handleSubmit}>
                  
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group first">
                        <label>Email Address</label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control"
                          placeholder="e.g. john@your-domain.com"
                          value={email}
                          id="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group last mb-3">
                        <label>Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                          placeholder="Your Password"
                          id="password"
                        />
                      </div>
                    </div>
                    
                  </div>

                  <div className="d-flex mb-5 mt-4 align-items-center">
                    <div className="d-flex align-items-center">
                      <label className="mb-0">
                        <input type="checkbox" />
                        <span className="caption mx-2">
                          Okay with our Terms and Conditions and our Privacy Policy.
                        </span>
                        
                        {/* <div className="control__indicator"></div> */}
                      </label>
                    </div>
                  </div>

                  <input
                    type="submit"
                    value="Register"
                    className="btn px-5 btn-primary"
                  />

                  <p className="caption">
                    Already have an account ?{" "}
                    <Link to="/login" className="text-primary fw-bolder mt-2">
                      Please Sign in
                    </Link>
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn bg-light text-dark border"
                      onClick={async () => await signInWithGoogle()}
                    >
                      Google <i class="fab text-warning fa-google"></i>
                    </button>
                  </div>
                </form>
                {error && (
                  <CustomizedSnackbars type={"error"} massage={error.message} />
                )}
                {user?.user?.email && (
                  <CustomizedSnackbars
                    type={"success"}
                    massage={user.user.email + " succesfully created"}
                    extra={"Login here"}
                    link={"/login"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Register;
