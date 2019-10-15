var model = require("../schema/signUpSignInDetails").signUpSignInModel;
const bcrypt = require('bcrypt');
const authenticator = require("../auth/authenticator");


module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
};

async function getUsers(body) {
    const query = model.find({ email: body.email });
    if(query==null){
        var response = {
            "status": "204",
            "message" : "content not found"
        };
    }else {
        return query;
    }
    
}

async function createUsers(req) {
  
        const userInfoFromClient = req.body;
        var myPlaintextPassword = userInfoFromClient.password;
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(myPlaintextPassword, salt);
        userInfoFromClient.password = hash;
        if(model.create(userInfoFromClient)){
            return ({"status code":" 200"})
        }
        
   
}

async function updateUsers(req, res) {
    const userInfoFromClient = req.body;
    //const query = model.findByIdAndUpdate({_id:userInfoFromClient._id});
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
