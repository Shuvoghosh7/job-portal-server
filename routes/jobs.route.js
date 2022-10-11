const express = require("express");
const router=express.Router()
const jobsController=require('../controller/jobs.controller');

router.post('/jobs',jobsController.createJobs)
// router.get('/manager/jobs',managerController.getJobs)

module.exports=router;