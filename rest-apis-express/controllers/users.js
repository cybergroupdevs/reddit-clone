const { user } = require("../models");
module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  createfolder
}

async function getUsers(req, res) {
  const response = await user.getUsers(req);
  console.log(response);
  return response;
}

async function createUser(req) {
  const response = await user.createUser(req);
  //console.log(res);
  //res.send(JSON.stringify(response))
  //const body = req.body;
  //users.push(body);

  return response
}

async function updateUser(req, res) {
  const response= await user.updateUser(req,res);
  res.send(response);
}

async function createfolder(req){
  const response = await user.createfolder(req)
  return response;
}

async function deleteUser(req, res) {
  const id = req.query.id;
  console.log(id)
  await user.deleteUser(req,res)
  res.send({
    status: 200,
    statusText: "OK",
    message: "Client Deleted!"
  });
}