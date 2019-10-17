const mongoose = require('mongoose')
const post = new mongoose.Schema({
   post_id: String,
   data: String
});
const postdataModel = mongoose.model("postdataInfo", post);
module.exports = {
    postdataModel
}