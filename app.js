const express=require('express');
const bodyParser=require('body-parser')
const student=require('./routes/student.route')
const mongoose=require('mongoose')

const app=express();

//mongoose connection
mongoose.connect("mongodb://localhost/studentDb" ,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("connected to the database!");
})
.catch(err =>{
    console.log("cannot connect to the database!", err);
    process.exit();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/student',student);

app.listen(3000,()=>{console.log('server is up and running at 3000')})