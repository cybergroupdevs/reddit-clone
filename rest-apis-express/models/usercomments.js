module.exports = {
    getComments,
    createComments,
    updateComments,
    deleteComments
};
const { info } = require("../schema/UserComments");
//const users = [];
const { SECRET } = require("../config/config")
const jwt = require("jsonwebtoken")

async function getComments(req) {
    // console.log(info.find());
    try {
        const token = req.headers.token
        const decoded = jwt.verify(token, new Buffer(SECRET, 'base64'));
        const det = await info.find({ "user_id": decoded.id });
       // console.log(det);
        return det;
    } catch (err) {
        console.log(err);
    }
}

async function createComments(req, res) {
    let response;
    let body, details;
    // body=req.body;
    // details= new info(body)
    console.log(details)
    try{
      response=await info.create(req.body);
      return response

    } catch (err) {
        response = { error: err }
        return response
    }

}

async function updateComments(req, res) {
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

async function deleteComments(req, res) {
    const id = req.query.id;
    console.log(id);
    await info.findByIdAndDelete(id);

    res.send({
        status: 200,
        statusText: "OK",
        message: "Client deleted!"
    });

}