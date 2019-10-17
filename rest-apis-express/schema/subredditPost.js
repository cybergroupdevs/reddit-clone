const mongoose = require('mongoose')
const subPost = new mongoose.Schema({
   sub_id: String,
   posts: [{
       post_id: String
   }]

});
const subredditmodel = mongoose.model("subreddit", subPost);
module.exports = {
    subredditmodel
}