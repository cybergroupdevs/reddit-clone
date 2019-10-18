const mongoose = require('mongoose')
const post = new mongoose.Schema({
    user_id:String,
    subreddit_user_id: String,
    subreddit_id:String,
    data: String
});
const postdataModel = mongoose.model("postdataInfo", post);
module.exports = {
    postdataModel
}