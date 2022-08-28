const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FSDPROJECT',(err)=>
{
    if(!err)
    {
    console.log('FSD DB Connection Successful')
    }
    else{
        console.log('DB Connection Unsuccessful')
    }
})
module.exports=mongoose