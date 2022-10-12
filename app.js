const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());
//routes
const jobsRoute=require('./routes/jobs.route')
const hiringManagerRoute=require('./routes/hiringManager.route')
const userRoute=require("./routes/user.route")



app.get("/", (req, res) => {
  res.send("Route is working!");
});

// route colling
app.use("/api/v1/jobPortal",jobsRoute)
app.use("/api/v1/manager",hiringManagerRoute)
app.use("/api/v1/auth",userRoute) 


module.exports = app;
