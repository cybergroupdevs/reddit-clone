var model = require("../models/signUpSignInmodel");

module.exports = {
    getUsers,
    createUsers,
    // updateUsers,
    // deleteUsers
};


async function getUsers(body) {
    const response = await model.getUsers(body);
     return response;
}

async function createUsers(req) {
    const response = await model.createUsers(req);
    return response;
}
// TODO: enhancement
// async function updateUsers(req, res) {
//     const response = await model.updateUsers(req,res);
//     res.send(response);
// }

// async function deleteUsers(req, res) {
//     const response = await model.deleteUsers(req,res);
//     res.send(response);
// }