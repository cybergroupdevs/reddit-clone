module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost
};
const { postModel } = require("../schema/postSchema")
const { postCommentModel } = require("../schema/postComment")
const { decodeToken } = require("../models/users");
const { postdataModel } = require("../schema/postdata")
async function getPost(req) {
    try {
        const decoded = decodeToken(req);
        const det = await postdataModel.find({ "user_id": decoded.id });
        return det;
    } catch (err) {
        console.log(err);
    }
}

async function createPost(req) {
   
    const decoded = decodeToken(req);
    const response = await datapost(req);
    return response
}

async function datapost(req) {
    const decoded = decodeToken(req);
    const json = {
        "user_id": decoded.id,
        "subreddit_user_id": req.headers.subreddit_user_id,
        "subreddit_id": req.headers.subreddit_id,
        "post_title": req.body.title,
        "data": req.body.data,
        // "post_time" : {
        //             "type": Date,
        //             "default": Date.now()
        // }
    }
    await postdataModel.create(json).catch((err) => {
        console.log(err);
    });
    return ({ "status": "200" })
}

async function updatePost(req, res) {
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

async function deletePost(req) {
    debugger
    const id = req.body.postid;
    await postdataModel.findByIdAndDelete(id,(err)=>{
        
        console.log(err);
        const response = {
            "status" : "409"
        }
        return response
    });
    postCommentModel.remove({"post_id":id},(err)=>{
        console.log(err);
         const response = {
        "status" : "409"
    }
    return response
    })

    const response = {
        "status" : "200"
    }
    return response

}