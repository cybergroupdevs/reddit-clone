const { usercomments } = require("../models");
module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers
}

async function getUsers(req, res) {
  const response = await usercomments.getUsers();
  console.log(response);
  res.send(response);
}

async function createUsers(req, res) {
  await usercomments.createUser(req,res);
  //console.log(res);
  //res.send(JSON.stringify(response))
  //const body = req.body;
  //users.push(body);

  res.send({
    status: 200,
    statusText: "OK",
    message: "Client Inserted!"
  });
}

async function updateUsers(req, res) {
  const response= await usercomments.updateUser(req,res);
  res.send(response);
}

async function deleteUsers(req, res) {
  const id = req.query.id;
  console.log(id)
  await user.deleteUser(req,res)
  res.send({
    status: 200,
    statusText: "OK",
    message: "Client Deleted!"
  });
}