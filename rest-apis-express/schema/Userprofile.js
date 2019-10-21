//const mongoose = require('mongoose');
const mongoose=require('mongoose');
//const Schema = mongoose.Schema;
const User = new mongoose.Schema({
  name: String,   
  email: String,
  imageurl: String,
  sub_name: String  // TODO: Move sub_name field to a new collection. (Optimization)
});

const info= mongoose.model("user",User);
module.exports={
  info
}