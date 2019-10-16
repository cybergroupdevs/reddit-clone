//const mongoose = require('mongoose');
const mongoose=require('mongoose');
//const Schema = mongoose.Schema;
const User = new mongoose.Schema({
  name: String,   
  email: String,
  imageurl: String,
  subreddit: [{
    //_id: String,
    sub_name: String,
  }]

});

const info= mongoose.model("user",User);
module.exports={
  info
}