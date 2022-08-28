// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.Connection


// schema definition
const schema = mongoose.Schema;
const studentSchema= new schema({   
    name:String,
    email:String,
    phone:String,
    address:String,
    qualification:String,
    passout:String,
    skills:String,
    employmentStatus:String,
    techtraining:String,
    course:String,
    image:String,
    exitexammark:String,
    status:String
    
});

// model
var studentdata = mongoose.model('studentdata',studentSchema);
module.exports = studentdata;