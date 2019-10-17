const mongoose = require('mongoose')
const postComment = new mongoose.Schema({
   post_id: String,
   comments: [{
      comment_id: String
   }]

});
const postCommentModel = mongoose.model("postComment", postComment);
module.exports = {
    postCommentModel
}