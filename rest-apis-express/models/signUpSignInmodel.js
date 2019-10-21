var model = require("../schema/signUpSignInDetails").signUpSignInModel;
const bcrypt = require('bcrypt');
const { createUser } = require("./users");
var validator = require("email-validator");

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
};

async function getUsers(body) {
    const query = model.find({ email: body.email });
        return query
}

// email and password is saved in database if it does not exist otherwise return error status
async function createUsers(req) {
    if(validator.validate(req.body.email)){
        const userInfoFromClient = req.body;  // User info from client side  [email] and [password]
        var myPlaintextPassword = userInfoFromClient.password; 
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(myPlaintextPassword, salt);  
        userInfoFromClient.password = hash;
        const UserExist = await getUsers(req.body);
        if(UserExist.length==0){    //if user does not exist
            model.create(userInfoFromClient)
            return ({"status":"200", "message":"successfuly registered"})
        }
        else {                      // if user already exist
            return ({"status":"409","message":"Email already exist"})  //
        }    
    }
    return ({"status":"400","message":"Email validation failed"})
   
}




// TODO: Update and Delete functionalities will be implemented in later updates
async function updateUsers(req, res) {
    const userInfoFromClient = req.body;
    const query = model.findByIdAndUpdate(req.body._id, { $set: req.body }, function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log("RESULT: " + result);
        return 'Done'
    });
    return query
}

async function deleteUsers(req, res) {
    const userInfoFromClient = JSON.stringify(req.body);
    return;
}
