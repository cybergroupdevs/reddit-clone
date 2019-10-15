const { usercomments } = require("../models");
module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers
}

async function getUsers(req, res) {
  const response = await usercomments.getUsers(req);
  console.log(response);
  return response ;
}

async function createUsers(req, res) {
  await usercomments.createUser(req,res);
  //console.log(res);
  //res.send(JSON.stringify(response))
  //const body = req.body;
  //users.push(body);

  return ({
    status: 200,
    statusText: "OK",
    message: "Client Inserted!"
  });
}

async function updateUsers(req, res) {
  const response= await usercomments.updateUser(req,res);
  return response;
}

async function deleteUsers(req, res) {
  const id = req.query.id;
  console.log(id)
  await user.deleteUser(req,res)
  return ({
    status: 200,
    statusText: "OK",
    message: "Client Deleted!"
  });
}