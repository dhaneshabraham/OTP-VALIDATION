const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const router = express.Router();
const nodemailer=require('nodemailer')
const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');
const { request } = require('express');


router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/students',ctrlUser.gets)



router.post('/register',function(req, res, next){
  var user = new User();
  user.fullName = req.body.fullName;
  user.email = req.body.email;
  user.otp=otpmail(user.email)
  user.save((err, doc) => {
      if (!err)
          res.send(doc);
      else {
        return next(err);
      }

  });
});


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
                console.log('respo')
    
                 res.send();
                })
            })
        })
      })
  

function otpmail(data){
  let x = Math.floor((Math.random() * 89) + 10);
  let y = Math.floor((Math.random() * 89) + 10);
  let otp=''

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
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
    .sendMail(msg)
    otp=x.toString()+y.toString()
    return otp
}






//send mail function
async function employeeMail(data){

  let x = Math.floor((Math.random() * 89) + 10);
  let y = Math.floor((Math.random() * 89) + 10);
  let otp=''

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
      otp=x.toString()+y.toString()
      console.log(otp)
        return otp
    }

  })
    }
    catch(error){
        return error
    }
  }



module.exports = router;   



