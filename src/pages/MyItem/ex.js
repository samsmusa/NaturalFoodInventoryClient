<AnimatePresence>
            <div className="panel-heading mx-2">
              <li
                className=" d-flex justify-content-between align-items-center list-group-item table-heading text-center text-light"
                aria-current="true"
              >
                <input
                  type="submit"
                  onClick={addItem}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  value="Add New"
                  className="text-center mx-2 border-0 btn-sm  text-dark"
                  style={{
                    backgroundColor: "#E7E6DC",
                    fontWeight: "600",
                    textShadow: "0.3px 0.5px 5px  gray",
                  }}
                />
                <span>An active item </span>
                <i className="fas mx-3 fa-sync "></i>
              </li>
              <li
                className="list-group-item text-center text-dark"
                aria-current="true"
                style={{
                  backgroundColor: "#c4c3d0",
                  fontSize: "15px",
                  color: "black",
                }}
              >
                <div
                  className="d-flex justify-content-between m-0 p-0"
                  style={{ color: "black" }}
                >
                  <div>
                    <p className="m-0 p-0 fw-400" style={{ color: "#696969" }}>
                      Image
                    </p>
                  </div>
                  <div>
                    <p className="m-0 p-0" style={{ color: "#696969" }}>
                      info
                    </p>
                  </div>
                  <div>
                    <p className="m-0 p-0" style={{ color: "#696969" }}>
                      price
                    </p>
                  </div>
                  <div>
                    <p className="m-0 p-0" style={{ color: "#696969" }}>
                      Date added
                    </p>
                  </div>
                  <div>
                    <p className="m-0 p-0" style={{ color: "#696969" }}>
                      edit/delete
                    </p>
                  </div>
                </div>
              </li>
            </div>
            <div className="panel-body">
              <ul
                className="list-group scrollspy-example"
                data-bs-spy="scroll"
                data-bs-offset="0"
                tabindex="0"
              >
                {alldata.length === 0 ? (
                  <Box
                    className="w-100 vh-50 justify-content-center align-items-center"
                    sx={{ display: "flex" }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  alldata.map((item, index) => (
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.5 }}
                      transition={{ ease: "easeIn", duration: 0.2 }}
                      key={index+'76'}
                      className="list-group-item col-12 "
                    >
                      <MyItemCard
                        item={item}
                        id={id}
                        isAdd={isAdd}
                        setisAdd={setisAdd}
                        editItem={editItem}
                        removeItem={removeItem}
                      />
                    </motion.li>
                  ))
                )}
              </ul>
            </div>
          </AnimatePresence>