var model = require("../schema/signUpSignInDetails").signUpSignInModel;
const bcrypt  = require('bcrypt');
module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
};

async function getUsers(req,res) {

    const userInfoFromClient = req.body;
    //const userEmail = userInfoFromClient.email;
    //var myData = model.findOne( userInfoFromClient )
    const query = model.find();
    return query;
   
}

async function createUsers(req,res) {

    try{
        const userInfoFromClient = req.body;
    var myPlaintextPassword = userInfoFromClient.password;
    console.log(myPlaintextPassword + "--------------pass");
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(myPlaintextPassword, salt);
    userInfoFromClient.password = hash;
    model.create(userInfoFromClient);
    return "created"
    }catch(error){
      console.log(error);
    }
 return "hello" 
}

async function updateUsers(req,res) {
    const userInfoFromClient = req.body;
    //const query = model.findByIdAndUpdate({_id:userInfoFromClient._id});
    const query = model.findByIdAndUpdate(req.body._id,{$set:req.body}, function(err, result){
        if(err){
            console.log(err);
        }
        console.log("RESULT: " + result);
        return 'Done'
    });
    return query
}

async function deleteUsers(req,res) {
    const userInfoFromClient = JSON.stringify(req.body);
    return;   
}
