const { post } = require("../models");
module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost
}

//async function ()
async function getPost(req) {
    const response = await post.getPost(req);
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
    return (response); // return result :: dont send response from controller
}

async function deletePost(req) {
    const response= await post.deletePost(req)
    return response;
}