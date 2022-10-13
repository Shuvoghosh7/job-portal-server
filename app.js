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
const candidateRoute=require("./routes/candidate.route")
const adminRoute=require("./routes/admin.route")



app.get("/", (req, res) => {
  res.send("Route is working!");
});

// route colling
app.use("/",jobsRoute)
app.use("/manager",hiringManagerRoute)
app.use("/",userRoute) 
app.use("/",candidateRoute) 
app.use("/admin",adminRoute) 


module.exports = app;
