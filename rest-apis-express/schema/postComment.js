const mongoose = require('mongoose')
const postComment = new mongoose.Schema({
   user_id:String, // User logged in   
   subreddit_user_id: String, //User id of the owner of subreddit
   subreddit_id:String, // subreddit id
   post_id: String, // post id .... taken from post data collection
   comment_data: String, // comment text
});
const postCommentModel = mongoose.model("postComment", postComment);
module.exports = {
    postCommentModel
}