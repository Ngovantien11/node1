const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:10,
        maxLength:255
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    description:String,
    thumbnail:{
        data:String,
        contentType:String
    }
    
});
module.exports = mongoose.model("Product",product_schema);
