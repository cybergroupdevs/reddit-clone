const mongoose = require('mongoose')
const User = new mongoose.Schema({
   user_id: String,
   subreddits: [{
       sub_id: String
   }]

});
const postModel = mongoose.model("userPostInfo", User);
module.exports = {
    postModel
}