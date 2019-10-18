//const Schema =mongoose.Schema;
//const mongoose = require("mongoose");
const mongoose = require('mongoose');
const Usercomments = new mongoose.Schema({
  user_id:String,
  comment_id: String,
    data: String,
    time: {
        type: Date,
        default: Date.now()
    },
        });
 const info = mongoose.model("usercommentinfo", Usercomments);
module.exports = {
    info
}