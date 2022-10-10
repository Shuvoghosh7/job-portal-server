const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());
//routes
const hiringManagerRoute=require('./routes/hiring.manager.route')



app.get("/", (req, res) => {
  res.send("Route is working!");
});

// route colling
app.use("/api/v1/jobPortal",hiringManagerRoute)



module.exports = app;
