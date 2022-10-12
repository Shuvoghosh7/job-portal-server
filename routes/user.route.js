const express = require("express");
const router=express.Router()
const userController=require('../controller/userController');
const verifyToken = require("../middlewar/verifyToken");


router.post('/user/signup',userController.singup)
router.post('/user/login',userController.login)
router.get('/user/me',verifyToken,userController.getMe)


module.exports=router;