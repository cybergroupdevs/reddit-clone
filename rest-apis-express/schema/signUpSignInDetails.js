const mongoose = require('mongoose');
var signUpSignInSchema = new mongoose.Schema({
    email    : String,
    password : String
});

var signUpSignInModel = mongoose.model('userLoginInfo', signUpSignInSchema);

exports.signUpSignInModel = signUpSignInModel;