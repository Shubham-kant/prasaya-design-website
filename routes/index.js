const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller.js');

router.get('/',homeController.home);


console.log('router working fine');
module.exports=router;