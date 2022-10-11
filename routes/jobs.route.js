const express = require("express");
const router=express.Router()
const jobsController=require('../controller/jobs.controller');

router.post('/jobs',jobsController.createJobs)
router.get('/manager/jobs',jobsController.getJobs)
router.get('/manager/jobs/:id',jobsController.getJobById)
router.patch('/jobs/:id',jobsController.updateJob)

module.exports=router;