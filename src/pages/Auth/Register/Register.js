import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import bg from "../../../assets/Images/bg_1.jpg";
import auth from "../../../firebase.init";
import "../Form2.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
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

  // sign with email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    if (!error) {
      await updateProfile({
        displayName,
        photoURL,
        phoneNumber: "+11234567890",
      });
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ease:"easeIn" ,duration: 0.5 }}
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
                <h3>Register</h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                  consectetur adipisicing.
                </p>
                <form action="#" method="post" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group first">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. John"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group first">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. Smith"
                          id="lname"
                        />
                      </div>
                    </div>
                  </div>
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
                      <div className="form-group first">
                        <label>Phone Number</label>
                        <input
                          type="photoURL"
                          className="form-control"
                          placeholder="https:kjdfkdjf.com"
                          value={photoURL}
                          onChange={(e) => setPhotoURL(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group first">
                        <label>Website</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. https://google.com"
                          id="lname"
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
                    <div className="col-md-6">
                      <div className="form-group last mb-3">
                        <label>Re-type Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Your Password"
                          id="re-password"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mb-5 mt-4 align-items-center">
                    <div className="d-flex align-items-center">
                      <label className="control control--checkbox mb-0">
                        <span className="caption">
                          Creating an account means you're okay with our{" "}
                          <a href="#">Terms and Conditions</a> and our{" "}
                          <a href="#">Privacy Policy</a>.
                        </span>
                        <input type="checkbox" checked="checked" />
                        <div className="control__indicator"></div>
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

                <div>{Parser("<Link href='/'> Please Login </Link>")}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Register;
