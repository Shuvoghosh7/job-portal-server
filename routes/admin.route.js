const express = require("express");
const router=express.Router()
const adminController=require('../controller/admin.Controller');
const authorization = require("../middlewar/authorization");
const verifyToken = require("../middlewar/verifyToken");


router.get('/candidat',verifyToken,authorization("Admin"),adminController.getCandidate)
/* router.get('/admin/candidat/:id', jobsController.getJobById)
router.get('/admin/manager', jobsController.getJobById) */

module.exports=router;