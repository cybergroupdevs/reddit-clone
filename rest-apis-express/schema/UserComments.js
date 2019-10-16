//const Schema =mongoose.Schema;
//const mongoose = require("mongoose");
const mongoose = require('mongoose');
const Usercomments = new mongoose.Schema({
  user_id: String,
    Comments: [
    {
       subreddit: [{
            _id: String,
            Post: [{
                _id: String,
                Comment_on_post: [{
                    Data: String,
                     time: {
                      type: Date,
                      default: Date.now()
                  },
                }]
            }]
        }]
    }]
});
const info = mongoose.model("usercommentinfo", Usercomments);
module.exports = {
    info
}