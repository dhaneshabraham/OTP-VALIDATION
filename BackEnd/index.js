require('./config/passportConfig')

const StudentData = require('./models/studentData');
const EmployerData = require('./models/employerData');
const nodemailer=require('nodemailer')
const User = mongoose.model('User');
const express=require('express');

const bodyParser=require('body-parser');
const cors = require('cors');
const mongoose =require("./db.js");

const app=express();
const passport=require('passport')
app.use(bodyParser.json());
app.use(cors())
app.use(passport.initialize())

const studentsignupdata=require('./models/studentsignup')
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server Started @ ${PORT}`))
app.post('/signupStudent',function(req,res){   
    console.log(req.body);
    var studentsSignup = {
        StudentName:req.body.StudentName,  
        Email:req.body.Email,
        Password:req.body.Password};
    
   var studentsSignup = new studentsignupdata(studentsSignup);
   studentsSignup.save((err,doc)=>{
    if(!err)
        res.send(doc);
    else
    {
        if(err.code==11000)
            res.status(422).send('Email already exist');
        else
            return next(err);

    }
   });
});






module.exports.authenticate=(req,res,next)=>{
    passport.authenticate('local',(error,student,info)=>{
            if(err) return res.status(400).json(err);
    })

}




  // create student
  app.post('/api/student/register', (req, res)=> {
    console.log(req.body);
  
    var student = {
      name: req.body.name ,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      qualification: req.body.qualification,
      passout: req.body.passout,
      skills: req.body. skills,
      employmentStatus: req.body.employmentStatus,
      techtraining: req.body. techtraining,
      course:req.body. course,
      image:req.body.image,
      exitexammark:req.body.exitexammark,
      status:"Pending"
    };
  
    console.log('student profile - backend', student)
  
    var newStudent = new StudentData(student);
    newStudent.save();
  
  })
  
  
 

  
  // get single student using _id
  app.get('/api/student/:id',function(req,res){  
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    console.log('id')
    let id=req.params.id;
    StudentData.findOne({_id:id},function(err,student){ 
        res.send(student)
    })
  });
  
  // update student
  app.put('/api/update-student',(req,res)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    console.log(req.body)
    let id=req.body.student._id
    StudentData.findByIdAndUpdate({"_id":id},
    {
        $set:{
            name:req.body.student.name ,
            email:req.body.student.email,
            phone:req.body.student.phone,
            address:req.body.student.address,
            qualification:req.body.student.qualification,
            passout:req.body.student.passout,
            skills:req.body.student.skillset,
            employmentStatus:req.body.student.employmentStatus,
            techtraining:req.body.student.technologyTraining,
            course:req.body.student.course,
            exitexammark:req.body.student.exitexammark
            }
    }) .then((data)=>{
    console.log(data); 
    res.send(data)
  })
  })
  
  //Approve student
  
  app.post('/api/approve-student',(req,res)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD");
    StudentData.updateOne(
        { 
            _id: req.body.id 
        },
        {
            $set: { 'status': 'Approved'} 
        }).then((data)=>{
          StudentData.findOne({_id:req.body.id},function(err,employee){ 
              employeeMail(employee.email).then((response)=>{
           console.log(response);
                 res.send();
                })
            })
        })
      })
  
  