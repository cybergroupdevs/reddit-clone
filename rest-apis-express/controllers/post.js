const { post } = require("../models");
module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}

async function getPosts(req) {
    const response = await post.getPosts(req);
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

async function updatePost(req, res) {
    const response = await post.updatePost(req, res);
    res.send(response);
}

async function deletePost(req, res) {
    const id = req.query.id;
    console.log(id)
    await post.deletePost(req, res)
    res.send({
        status: 200,
        statusText: "OK",
        message: "Client Deleted!"
    });
}