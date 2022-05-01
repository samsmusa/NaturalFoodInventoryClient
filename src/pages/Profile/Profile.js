import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import "./Profile.css"

const Profile = () => {
  const [isEdit, setisEdit] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    job: "Full Stack Developer",
    location: "Bay Area, San Francisco, CA",
    website: "https://bootdey.com",
    github: "github.com",
    twitter: "twitter.com",
    instagram: "instagram.com",
    facebook: "facebook.com",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEdit) {
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
        <form action="" onSubmit={handleSubmit}>
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
                            value={profile.job}
                          />
                        ) : (
                          <p className="text-secondary mb-1">
                            Full Stack Developer
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-globe me-2 icon-inline"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                          Website
                        </h6>
                        {isEdit ? (
                          <input
                            className="form-control overflow-hidden h-25 w-50"
                            value={profile.website}
                            type="text"
                          />
                        ) : (
                          <span className="text-secondary">
                            {profile.website}
                          </span>
                        )}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github me-2 icon-inline"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          Github
                        </h6>
                        {isEdit ? (
                          <input
                            className="form-control overflow-hidden h-25 w-50"
                            value={profile.github}
                            type="text"
                          />
                        ) : (
                          <span className="text-secondary">
                            {profile.github}
                          </span>
                        )}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-twitter me-2 icon-inline text-info"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                          Twitter
                        </h6>
                        {isEdit ? (
                          <input
                            className="form-control overflow-hidden h-25 w-50"
                            value={profile.twitter}
                            type="text"
                          />
                        ) : (
                          <span className="text-secondary">
                            {profile.twitter}
                          </span>
                        )}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-instagram me-2 icon-inline text-danger"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                          Instagram
                        </h6>
                        {isEdit ? (
                          <input
                            className="form-control overflow-hidden h-25 w-50"
                            value={profile.instagram}
                            type="text"
                          />
                        ) : (
                          <span className="text-secondary">
                            {profile.instagram}
                          </span>
                        )}
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-facebook me-2 icon-inline text-primary"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                          Facebook
                        </h6>
                        {isEdit ? (
                          <input
                            className="form-control overflow-hidden h-25 w-50"
                            value={profile.facebook}
                            type="text"
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
                        <input
                          type="text"
                          className="form-control"
                          value="John Doe"
                          disabled={!isEdit}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          value="john@example.com"
                          disabled={!isEdit}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          value="(239) 816-9029"
                          disabled={!isEdit}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          value="(320) 380-4539"
                          disabled={!isEdit}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          value="Bay Area, San Francisco, CA"
                          disabled={!isEdit}
                        />
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
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p>Website Markup</p>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "72%" }}
                            aria-valuenow="72"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p>One Page</p>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "89%" }}
                            aria-valuenow="89"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p>Mobile Template</p>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "55%" }}
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p>Backend API</p>
                        <div className="progress" style={{ height: "5px" }}>
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "66%" }}
                            aria-valuenow="66"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
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
