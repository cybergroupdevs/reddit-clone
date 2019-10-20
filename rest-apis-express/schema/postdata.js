const mongoose = require('mongoose')
const post = new mongoose.Schema({
    user_id:String, // logged on user
    subreddit_user_id: String, // id of the owner of subreddit
    subreddit_id:String, // id of subreddit
    post_title: String,
    data: String // post text
});
const postdataModel = mongoose.model("postdataInfo", post);
module.exports = {
    postdataModel
}