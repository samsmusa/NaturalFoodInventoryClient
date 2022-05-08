import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import "./Profile.css"

const Profile = () => {

  const [isEdit, setisEdit] = useState(false);
  
  const [user, loading, error] = useAuthState(auth);
  const [profile, setProfile] = useState({});
  useEffect(()=>{
    fetch(`http://localhost:5000/user/${user.email}`)
    .then(res=>res.json())
    .then(res=>setProfile(res)) 

    console.log(user)
  },[user])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.email = user.email;
    console.log(data);
    if (isEdit) {
      fetch("http://localhost:5000/user", {
        method: "PUT",
        headers: {
          'content-type': 'application/json'
        },
        body : JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{setProfile(result[0]); 
        let {_id, ...res} = result[0]
        reset(res)})
      setisEdit(false);
    } else {
      setisEdit(true);
    }
  };

  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        className="container mt-5"
      >
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="main-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        alt="Admin"
                        className="rounded-circle p-1 bg-primary"
                        width="110"
                      />
                      <div className="mt-3">
                        <h4>{profile.name}</h4>
                        {isEdit ? (
                          <input
                            type="text"
                            className="form-control text-center h-25"
                            defaultValue={profile.job}
                            {...register("job")}
                          />
                        ) : (
                          <p className="text-secondary mb-1">
                            {profile.job} 
                          </p>
                        )}

                        <p className="text-muted font-size-sm">
                          {profile.location}
                        </p>
                        <button className="btn btn-primary">Follow</button>
                        <button className="btn btn-outline-primary">
                          Message
                        </button>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                        <i class="fas fa-globe mx-2"></i>
                          Website
                        </h6>
                        {isEdit ? (
                          <input
                            className="form-control overflow-hidden h-25 w-50"
                            defaultValue={profile.website}
                            placeholder="example.com"
                            type="text"
                            {...register("website")}
                          />
                        ) : (
                          <span className="text-secondary">
                            {profile.website}
                          </span>
                        )}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                        <i class="fab mx-2 fa-github"></i>
                          Github
                        </h6>
                        {isEdit ? (
                          <input
                            className="form-control overflow-hidden h-25 w-50"
                            placeholder="github.com"
                            defaultValue={profile.github}
                            type="text"
                            {...register("github")}
                          />
                        ) : (
                          <span className="text-secondary">
                            {profile.github}
                          </span>
                        )}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                        <i class="fab mx-2 fa-twitter-square"></i>
                          Twitter
                        </h6>
                        {isEdit ? (
                          <input
                            className="form-control overflow-hidden h-25 w-50"
                            defaultValue={profile.twitter}
                            type="text"
                            placeholder="twitter.com"
                            {...register("twitter")}
                          />
                        ) : (
                          <span className="text-secondary">
                            {profile.twitter}
                          </span>
                        )}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                        <i class="fab mx-2 fa-instagram-square"></i>
                          Instagram
                        </h6>
                        {isEdit ? (
                          <input
                            className="form-control overflow-hidden h-25 w-50"
                            defaultValue={profile.instagram}
                            placeholder="instagram.com"
                            type="text"
                            {...register("instagram")}
                          />
                        ) : (
                          <span className="text-secondary">
                            {profile.instagram}
                          </span>
                        )}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                        <i class="fab mx-2 fa-facebook"></i>
                          Facebook
                        </h6>
                        {isEdit ? (
                          <input
                            className="form-control overflow-hidden h-25 w-50"
                            defaultValue={profile.facebook}
                            placeholder="facebook.com"
                            type="text"
                            {...register("facebook")}
                          />
                        ) : (
                          <span className="text-secondary">
                            {profile.facebook}
                          </span>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {isEdit ? (
                          <input
                            type="text"
                            className="form-control w-50 h-75"
                            defaultValue={profile.name}
                            placeholder="John Doe"
                            disabled={!isEdit}
                            {...register("name")}
                          />
                        ) : (
                          <span className="text-secondary">{profile.name}</span>
                        )}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <span className="text-secondary">{user.email}</span>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {isEdit ? (
                          <input
                            type="text"
                            className="form-control w-50 h-75"
                            placeholder="(239) 816-9029"
                            defaultValue={profile.phone}
                            disabled={!isEdit}
                            {...register("phone")}
                          />
                        ) : (
                          <span className="text-secondary">
                            {profile.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {isEdit ? (
                          <input
                            type="text"
                            className="form-control w-50 h-75"
                            placeholder="Bay Area, San Francisco, CA"
                            defaultValue={profile.address}
                            disabled={!isEdit}
                            {...register("address")}
                          />
                        ) : (
                          <span className="text-secondary">
                            {profile.address}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="submit"
                          className="btn btn-primary px-4"
                          value={isEdit ? "Save Changes" : "Edit"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="d-flex align-items-center mb-3">
                          Project Status
                        </h5>
                        <p>Web Design</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default Profile;
