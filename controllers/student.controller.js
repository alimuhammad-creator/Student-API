const student=require('../models/student.model')


exports.test=(req,res)=>{
    res.send('greetings from the test controller')
}

exports.student_add=(req,res)=>{
    let student=new student({
        studentname:req.body.studentname,
        studentRegId:req.body.studentRegId
    });
    student.save((err)=>{
        if (err){
        return next(err);
    }
    res.send('student added successfully')
    });
}

exports.student_update=(req,res)=>{}

exports.student_delete=(req,res)=>{}