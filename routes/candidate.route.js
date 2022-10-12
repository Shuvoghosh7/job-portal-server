const express = require("express");
const router=express.Router()
const candidateController=require('../controller/candidate.Controller');
const uploader = require("../middlewar/uploder");

router.get('/jobs',candidateController.getJobs)
router.get('/jobs/:id', candidateController.getJobById)
router.post('/jobs/apply',uploader.single("file"),candidateController.applyJobs)

module.exports=router;