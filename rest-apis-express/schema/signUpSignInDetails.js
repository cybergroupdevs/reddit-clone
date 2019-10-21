const mongoose = require('mongoose');
var signUpSignInSchema = new mongoose.Schema({
    email: String, // Email of the registered user
    password: String // Password of the registered user ... Password is stored in Bcrypt format
});

var signUpSignInModel = mongoose.model('userLoginInfo', signUpSignInSchema);

exports.signUpSignInModel = signUpSignInModel;