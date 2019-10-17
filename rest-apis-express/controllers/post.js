const { post } = require("../models");
module.exports = {
    getUsers,
    createPost,
    updateUser,
    deleteUser
}

async function getUsers(req) {
    const response = await post.getUsers(req);
    console.log(response);
    return response;
}

async function createPost(req) {
    const response = await post.createPost(req);
    return response;
    //console.log(res);
    //res.send(JSON.stringify(response))
    //const body = req.body;
    //users.push(body);

    // res.send({
    //     status: 200,
    //     statusText: "OK",
    //     message: "Client Inserted!"
    // });
}

async function updateUser(req, res) {
    const response = await post.updateUser(req, res);
    res.send(response);
}

async function deleteUser(req, res) {
    const id = req.query.id;
    console.log(id)
    await post.deleteUser(req, res)
    res.send({
        status: 200,
        statusText: "OK",
        message: "Client Deleted!"
    });
}