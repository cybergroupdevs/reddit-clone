module.exports = {
    getUsers,
    createPost,
    updateUser,
    deleteUser
};
const { postModel } = require("../schema/postSchema")
const { decodeToken } = require("../models/users");
const { postdataModel } = require("../schema/postdata")
async function getUsers(req) {
    try {
        const decoded = decodeToken(req);
        const det = await postModel.find({"_id":decoded.id});
        return det;
    } catch (err) {
        console.log(err);
    }
}

async function createPost(req) {
    debugger
    const decoded = decodeToken(req);
    const json = {
        "user_id" : decoded.id,
        "subreddit_user_id" : req.headers.subreddit_user_id,
        "subreddit_id" : req.headers.subreddit_id
    }
    await postModel.create(json).catch((err)=>{
        console.log(err);
    });
    const response =await datapost(req);
    return response
}

async function datapost(req){
    const decoded = decodeToken(req);
    const json = {
        "user_id" : decoded.id,
        "subreddit_user_id" : req.headers.subreddit_user_id,
        "subreddit_id" : req.headers.subreddit_id,
        "data": req.body.data,
        "post_time" : {
                    "type": Date,
                    "default": Date.now()
        }
    }
    await postdataModel.create(json).catch((err)=>{
        console.log(err);
    });
    return ({"status":"200"})
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