const { user } = require("../models");
<<<<<<< HEAD
module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
}

async function getUsers(req, res) {
  const response = await user.getUsers(req);
  console.log(response);
  res.send(response);
}

async function createUser(req, res) {
  await user.createUser(req,res);
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

async function updateUser(req, res) {
  const response= await user.updateUser(req,res);
  res.send(response);
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
=======

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};

async function getUsers(req, res) {
    const response = await user.getUsers();
    res.send(response);
}

async function createUser(req, res) {
    const body = req.body;
    users.push(body);

    res.send({
        status: 200,
        statusText: "OK",
        message: "Client Inserted!"
    });
}

function updateUser(req, res) {
    const body = req.body;
    const id = req.query.id;
    // console.log(id);

    for (let key in body) {
        users[id][key] = body[key];
    }

    res.send({
        status: 200,
        statusText: "OK",
        message: "Client Updated!"
    });
}


function deleteUser(req, res) {
    const id = req.query.id;

    users.pop(id);

    res.send({
        status: 200,
        statusText: "OK",
        message: "Client Deleted!"
    });
>>>>>>> 9a5576a727e3bb251085974847b92f4c9b3f296f
}