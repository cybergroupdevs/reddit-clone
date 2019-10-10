var signUpSignInSchema = new mongoose.Schema({
    name     : String,
    email    : String,
    password : String
});

var signUpSignInModel = mongoose.model('userLoginInfo', signUpSignInSchema);

exports.signUpSignInModel = signUpSignInModel;