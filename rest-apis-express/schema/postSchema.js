const mongoose = require('mongoose')
const User = new mongoose.Schema({
    _id: String, //user id
    post: [{
        _id: String, // user subredit id
        subreddit: [{
            _id: String, // who posted on subreddit
            postdata: [{
                post: String,
                time: {
                    type: Date,
                    default: Date.now()
                },
                comment_on_Post: [{
                    _id: String
                }]
            }]
        }]

    }]

});
const postModel = mongoose.model("userPostInfo", User);
module.exports = {
    postModel
}