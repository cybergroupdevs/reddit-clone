//const Schema =mongoose.Schema;
//const mongoose = require("mongoose");
const mongoose=require('mongoose');
const Usercomments = new mongoose.Schema(
  {
  Comments: [{
    _id: String,
    subreddit: [{
      _id: String,
      Post: [{
        _id: String,
        Comment_on_post: [{
          Data:String,
          Date: String,
          Time: String
        }]
      }]
    }]
  }]
}
);
module.exports= mongoose.model("usercommentinfo",Usercomments);