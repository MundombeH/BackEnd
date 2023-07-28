const mongoose = require("mongoose");

const{Schema} = mongoose;

const serviceSchema = Schema({
name:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
image:{
    type:String,
    required:false
},

},
{timestamps: true}
);

const service = mongoose.model("service", serviceSchema);

module.exports = {
    service,
    serviceSchema,
}