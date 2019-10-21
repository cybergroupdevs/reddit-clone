const { usercomments } = require("../models");
module.exports = {
    getComments,
    createComments,
    updateComments,
    deleteComments
}

async function getComments(req, res) {
    const response = await usercomments.getComments(req);
    console.log(response);
    return response;
}

async function createComments(req, res) {
    console.log(req);
    await usercomments.createComments(req, res);
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