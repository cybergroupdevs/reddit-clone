module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
const { postModel } = require("../schema/postSchema")
const {SECRET} = require("../config/config")
const jwt = require("jsonwebtoken")
async function getUsers(req) {
    try {
        const token =req.headers.token
        const decoded = jwt.verify(token, new Buffer(SECRET, 'base64'));
        const det = await postModel.find({"_id":decoded.id});
        return det;
    } catch (err) {
        console.log(err);
    }
}

async function createUser(req, res) {
    console.log(req.body)
    let response;
    let body, details;
    body = req.body
        // details = new info(body)
    postModel.create(body)
        // console.log(details)
    try {

        response = await details.save()
        return response

    } catch (err) {
        response = { error: err }
        return response
    }

}

async function updateUser(req, res) {
    const body = req.body;
    const _id = req.query.id;
    // console.log(id);
    console.log(body);
    await info.findByIdAndUpdate(_id, body)
    return ({
        status: 200,
        statusText: "OK",
        message: "Client Updated!"
    });
}

async function deleteUser(req, res) {
    const id = req.query.id;
    console.log(id);
    await info.findByIdAndDelete(id);

    res.send({
        status: 200,
        statusText: "OK",
        message: "Client deleted!"
    });

    // users.pop(id);

    // res.send({
    //   status: 200,
    //   statusText: "OK",
    //   message: "Client Deleted!"
    // });
}