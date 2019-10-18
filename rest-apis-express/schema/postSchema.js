const mongoose = require('mongoose')
const User = new mongoose.Schema({
    user_id: String,
    subreddit_user_id: String,
    subreddit_id: String,
});
const postModel = mongoose.model("userPostInfo", User);
module.exports = {
    postModel
}