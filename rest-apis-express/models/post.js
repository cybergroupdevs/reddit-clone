module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
const { postModel } = require("../schema/postSchema")
async function getUsers(req) {
    try {
        const id = req.headers._id;

        const det = await postModel.findById({ "_id": id });
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