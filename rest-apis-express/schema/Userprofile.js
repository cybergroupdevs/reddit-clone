//const mongoose = require('mongoose');
const{mongoose}=require("../mongoose")
const Schema = mongoose.Schema;
const User = new Schema({
  name: String,   
  email: String,
  imageurl: String,
  subreddit: [{
    //_id: String,
    sub_name: String,
  }]

});
module.exports= mongoose.model("user",User);