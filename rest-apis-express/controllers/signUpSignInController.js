var model = require("../models/signUpSignInmodel");

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
};


async function getUsers(req, res) {
    const response = await model.getUsers(req,res);
    res.send(response);
}

async function createUsers(req, res) {
    const response = await model.createUsers(req,res);
    res.send(response);
}

async function updateUsers(req, res) {
    const response = await model.updateUsers(req,res);
    res.send(response);
}

async function deleteUsers(req, res) {
    const response = await model.deleteUsers(req,res);
    res.send(response);
}