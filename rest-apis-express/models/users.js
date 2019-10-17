
module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
const { info } = require("../schema/Userprofile")
const users = [];
const { db } = require("../mongoose")
async function getUsers(req) {
  //console.log(ObjectId().getTimestamp())
  try {
    const id = req.headers._id
    console.log(id);
    const det = await info.findById(id);
    console.log(det)
    return det;
  }
  catch (err) {
    console.log(err);
  }
}

async function createUser(req, res) {
  let response;
  let body, details;
  body = req.body
  const user = info.find({ "_id": req.headers._id })


  try {
    const subPost = { "sub_name": req.body.sub_name };
    response = await info.findOneAndUpdate({ "_id": req.headers._id }, { 
      $push: { "subreddit": subPost } 
    })
    return response;

  }
  catch (err) {
    response = { error: err }
    return response
  }

}

async function updateUser(req, res) {
  const body = req.body;
  const _id = req.query.id;
  // console.log(id);
  console.log(body);
  await info.findByIdAndUpdate(_id, body)
  return ({
    status: 200,
    statusText: "OK",
    message: "Client Updated!"
  });
}

async function deleteUser(req, res) {
  const id = req.query.email;
  console.log(id);
  await info.findOneAndDelete(id);

  res.send({
    status: 200,
    statusText: "OK",
    message: "Client deleted!"
  });

  // users.pop(id);

  // res.send({
  //   status: 200,
  //   statusText: "OK",
  //   message: "Client Deleted!"
  // });
}