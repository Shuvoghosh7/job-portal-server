const express = require("express");
const router=express.Router()
const adminController=require('../controller/admin.Controller');
const authorization = require("../middlewar/authorization");
const verifyToken = require("../middlewar/verifyToken");


router.get('/candidat',adminController.getCandidate)
router.get('/admin/manager', adminController.getManager)
router.get('/candidat/:id', adminController.getCandidateId)
router.patch('/user/:id',verifyToken,authorization("Admin"),adminController.updateUserRole)
module.exports=router;