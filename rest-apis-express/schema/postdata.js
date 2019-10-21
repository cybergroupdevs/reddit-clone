const mongoose = require('mongoose')
const post = new mongoose.Schema({
    user_id: Object, // logged on user
    subreddit_user_id: Object, // id of the owner of subreddit
    subreddit_id:Object, // id of subreddit
    post_title: String,
    data: String, // post text
    post_time: {
        type: Date,
        default: Date.now()
    }
});
const postdataModel = mongoose.model("postdataInfo", post);
module.exports = {
    postdataModel
}