const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const router = express.Router();
const nodemailer=require('nodemailer')
const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');
const { request } = require('express');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/students',ctrlUser.gets)

// get single student using _id
router.get('/student/:id',function(req,res){  
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    console.log('single stud')
    
    let id=req.params.id;
    console.log(id)
    User.findOne({_id:id},function(err,student){ 
        res.send(student)
    })
  });
//delete  student by id
router.delete('/delete/:id',(req,res)=>{  
    id = req.params.id;
    User.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('Deleted successfully')
        res.send();
    })
  });
  
// update student
router.put('/update-student',(req,res)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    console.log(req.body)
    let id=req.body.student._id
    User.findByIdAndUpdate({"_id":id},
    {
        $set:{
            fullName:req.body.student.fullName ,
            email:req.body.student.email,
            phone:req.body.student.phone,
            address:req.body.student.address,
            qualification:req.body.student.qualification,
            passout:req.body.student.passout,
            skills:req.body.student.skills,
            employmentStatus:req.body.student.employmentStatus,
            techtraining:req.body.student.techtraining,
            course:req.body.student.course,
            exitexammark:req.body.student.exitexammark
            }
    }) .then((data)=>{
    console.log(data); 
    res.send(data)
  })
  })
  
  //Approve student
  
  router.post('/approve-student',(req,res)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD");
    User.updateOne(
        { 
            _id: req.body.id 
        },
        {
            // $set: {'status': 'Approved'} 
        }).then((data)=>{
          User.findOne({_id:req.body.id},function(err,employee){ 
              employeeMail(employee.email).then((response)=>{
           console.log(response);
                 res.send();
                })
            })
        })
      })
  






router.put('/enrollment/:id',(req, res, next) => {
   
var user={
        fullName : req.body.fullName,
        email : req.body.email,
    // user.password :req.body.password;
        phone: req.body.phone,
        address: req.body.address,
        qualification: req.body.qualification,
        passout:req.body.passout,
        skills: req.body.skills,
        employmentStatus: req.body.employmentStatus,
        techtraining: req.body.techtraining,
        course:req.body.course,
        image: req.body.image,
        exitexammark:req.body.exitexammark,
        status:req.body.status
}
    console.log(req.params.id)
    console.log(user)
    User.findByIdAndUpdate(req.params.id, { 
        $set: user },
        (err, doc) => {
            if (!err) { 
                console.log('Updated successfully')
                res.send(doc); }
            else { console.log('Error in Student Update :' + JSON.stringify(err, undefined, 2)); }
        });
})


//send mail function
async function employeeMail(data){

  let x = Math.floor((Math.random() * 99) + 10);
  let y = Math.floor((Math.random() * 99) + 10);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

    try{
        
  const msg ={
  
    from : "ICT Academy Kerala <ptest5651@gmail.com>",
  
    to : data,
    subject:"OTP for User Authentication",
    text : x.toString()+y.toString()
    
  
  };
  
  nodemailer.createTransport({
  service: 'gmail',
  auth :{
    user : "ptest5651@gmail.com",
    pass : "pcpdcpuhvokfbeuy"
  },
  pory:465,
  host:'smtp.gmail.com'
  
  })
  
  .sendMail(msg,(err)=>{
    if(err){
        return console.log('error occurs',err)
    }
    else{
        return console.log('emailsent')
    }
  }
  
  
  )
  
  
    }
    catch(error){
        return error
    }
  }



module.exports = router;   



