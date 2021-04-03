const express=require('express');
const router=express.Router();
//include the controller
const Student_controller=require('../controllers/student.controller');

router.get('/test',Student_controller.test);
//http://localhost:3000/student/add
router.post('/add',Student_controller.student_add);
//export the router
module.exports=router;