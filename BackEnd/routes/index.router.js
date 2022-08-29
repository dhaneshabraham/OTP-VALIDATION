const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const router = express.Router();
const nodemailer=require('nodemailer')

// router.post('/authenticate', ctrlUser.authenticate);



router.post('/valid',function(req, res, next){
  console.log('user validated')
  console.log(req.body.email)
  console.log(req.body.otp)
  let ot=req.body.otp
  let em=req.body.email
  User.findOne({email:em},function(err,user){ 
    if(user.otp==ot)
    {
      console.log('OTP MATCHED')
      res.send(user)
    }
    else
    return next(err);
})
});


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


module.exports = router;   



