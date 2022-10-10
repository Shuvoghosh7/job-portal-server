const mongoose = require("mongoose");
const validator = require('validator');
const{ObjectId}=mongoose.Schema.Types

const hiringManagerSchema = mongoose.Schema({

})

const HiringManager = mongoose.model('HiringManager', hiringManagerSchema);

module.exports=HiringManager;