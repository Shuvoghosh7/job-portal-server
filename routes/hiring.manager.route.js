const express = require("express");
const router=express.Router()
const managerController=require('../controller/hiring.manager.controller');

router.post('/jobs ',managerController.createJobs)
// router.get('/manager/jobs',managerController.getJobs)

module.exports=router;