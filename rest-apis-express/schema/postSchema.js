const mongoose = require('mongoose')
const User = new mongoose.Schema({
    user_id: String, // logged in user id
    subreddit_user_id: String, // owner of the subreddit
    subreddit_id: String,  // subrddit id
});
const postModel = mongoose.model("userPostInfo", User);
module.exports = {
    postModel
}



// This schema is not required right now