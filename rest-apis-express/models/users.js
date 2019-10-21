module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  decodeToken,
  createfolder
};

const { info } = require("../schema/Userprofile")
const { SECRET } = require("../config/config")
const jwt = require('jsonwebtoken');
var fs = require('fs');

function decodeToken(req){
  const token =req.headers.token 
  const decoded = jwt.verify(token, new Buffer(SECRET, 'base64'));
  return decoded;
}

async function getUsers(req) {
  //console.log(ObjectId().getTimestamp())
  
    const decoded = decodeToken(req);
    const det=await info.findOne({"email":decoded.email});
    return det;
}

async function createfolder(req){
  var dir = "../pictures";

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

}

async function createUser(req) {
  
  const decoded = decodeToken(req);
    const json = {
      "name": req.body.name,
      "email": decoded.email,
      "sub_name": req.body.subreddit
    }
  
    await info.create(json,(err)=>{
      console.log(err);
      const response = {
        "status": "409"
      }
      return response;
    })
    const response = {
      "status" : "200"
    }
  
  
  return response;

}

async function updateUser(req, res) {
  const body = req.body;
  const _id = req.query.id;
  // console.log(id);
  console.log(body);
  await info.findByIdAndUpdate(_id,body)
  return({
    "status": "200"
  });
}

async function deleteUser(req, res) {
  const id = req.query.email;
  console.log(id);
  await info.findOneAndDelete(id);

  res.send({
    "status": "200",
  });

  // users.pop(id);

  // res.send({
  //   status: 200,
  //   statusText: "OK",
  //   message: "Client Deleted!"
  // });
}