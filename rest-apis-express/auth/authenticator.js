const jwt = require("jsonwebtoken");
const { SECRET } = require('../config').config;
const getUserDetailsDb = require("../controllers");
const bcrypt = require('bcrypt')

async function checkAuth (req) {
  
 const data =await matchCredentials(req);

 if(data=="matched"){
  const valuePass = await comparePassword(req.body.password,req)
  if(valuePass=="1"){
    const token =await generateToken(req);
    return ({
      "message": "password matched",
      "token" : token,
    })
  }else if(valuePass=="0") {
    return ({
      "message": "password not matched",
      "token"  : "null",
    })
  }
 }else {
   return ({
     "message": "user not exists please sign up",
     "token" : "null ",
    })   
 }
  
}

async function generateToken(req) {
  let email = req.body.email;
  const user = await getUserDetailsDb.signIn.getUsers(req.body);
  const id = user[0]._id;
  var token = jwt.sign( {email, expiresIn: '24h',id},new Buffer(SECRET ,'base64'));
  return token;
}

async function comparePassword(myPlaintextPassword,req){
  const user = await getUserDetailsDb.signIn.getUsers(req.body);
  const hash = user[0].password;
  if(bcrypt.compareSync(myPlaintextPassword, hash)) {
    // Passwords match
   return "1";
   } else {
    // Passwords don't match
    return "0"
   }
}

async function matchCredentials (req){
  const user = await getUserDetailsDb.signIn.getUsers(req.body);
  if(user.length==0) {return "Do sign up"}
  else if(user[0].email == req.body.email){
    return "matched";  
  }
  else {
    console.log("create user");
    return "Do sign up"
  }
}

module.exports = {
  checkAuth
}