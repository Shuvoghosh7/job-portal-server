const mongoose = require("mongoose");
const validator = require('validator');

const candidateSchema = mongoose.Schema({
    candidateName: {
        type: String,
        required: [true, "Please provide a name for thid candidate"],
        trim: true,
        minLength: [4, "Name mast be 3 characters"],
        maxLength: [100, "Name is too larges"],
      },
      email: {
        type: String,
        lowercase: true,
        validate: [validator.isEmail, "Plese provide a valid Email"],
        unique: true,
        require: [true, "Email Address Require"],
    },
    contactNumber: {
        type: String,
        validate: [validator.isMobilePhone, "Please provide a valid contact number"]
    },
    address:{
        type: String,
        require:true
    },
    highestEducation:{
        type: String,
        require:true
    },
    uploadResume:{
        type:String,
        required:true
    }

})

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports=Candidate;