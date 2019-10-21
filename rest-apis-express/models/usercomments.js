module.exports = {
    getComments,
    createComments,
    updateComments,
    deleteComments
};
const { decodeToken } = require("../models/users");

const { postCommentModel } = require("../schema/postComment");
const users = [];

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

async function createComments(req) {
    let response;
    // body=req.body;
    // details= new info(body)
    //console.log(details)
    try {
        const response = await createCommentdata(req);
        return response

    } catch (err) {
        response = { error: err }
        return response
    }

}
async function createCommentdata(req) {
    const decoded = decodeToken(req);
    console.log("---------------")
    console.log(req.body.comment_data)
    console.log("---------------")

    const json = {
        "user_id": decoded.id,
        "subreddit_user_id": req.headers.subreddit_user_id,
        "subreddit_id": req.headers.subreddit_id,
        "post_id": req.body.title,
        "comment_data": req.body.data,
    }
    await postCommentModel.create(json).catch((err) => {
        console.log(err);
    });
    return ({ "status": "200" })
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