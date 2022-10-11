const mongoose = require("mongoose");
const validator = require('validator');
const{ObjectId}=mongoose.Schema.Types

const hiringManagerSchema = mongoose.Schema({
    jobTitle:{
        type:String,
        trim:true,
        require:true,
    },
    jobDescription:String,
    jobLocation:{
        type:String,
        require:true,
    },
    company:{
        type:String,
        require:true,
    },
    salary:{
        type:Number
    },
    jobPostingDate:{
        type:String,
        require:true,
    },
    lastApplicationDate:{
        type:String,
        require:true,
    },
    vacancy:{
        type:String,
        require:true,
    },
    hiringManager:[{
        name:String,
        id:{
            type:ObjectId,
            ref:"HiringManager"
        }
    }],

})

const Jobs = mongoose.model('Jobs', hiringManagerSchema);

module.exports=Jobs;