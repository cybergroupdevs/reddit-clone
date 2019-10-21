const { usercomments } = require("../models");
module.exports = {
    getComments,
    createComments,
    updateComments,
    deleteComments
}

async function getComments(req) {
    const response = await usercomments.getComments(req);
    console.log(response);
    return response;
}

async function createComments(req) {
    const response = await usercomments.createComments(req);
    return response
}

async function updateComments(req, res) {
    const response = await usercomments.updateComments(req, res);
    return response;
}

async function deleteComments(req, res) {
    const id = req.query.id;
    console.log(id)
    await user.deleteComments(req, res)
    return ({
        status: 200,
        statusText: "OK",
        message: "Client Deleted!"
    });
}