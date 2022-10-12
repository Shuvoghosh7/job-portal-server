const express = require("express");
const router=express.Router()
const candidateController=require('../controller/candidate.Controller');

router.get('/jobs',candidateController.getJobs)
router.get('/jobs/:id', candidateController.getJobById)
// router.post('/jobs',candidateController.applyJobs)

module.exports=router;