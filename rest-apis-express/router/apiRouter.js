//const {  } = require("express");
var express = require('express')

const { baseURI } = require("../config").config;

const api = require("../controllers");

const { signIn } = require("../controllers");

const middleware = require("../auth/middleware");

const { post } = require("../controllers");
const multer = require('multer');
const { userscomments } = require("../controllers");

const { users } = require("../controllers");
const path =require('path');

const createToken = require("../auth/authenticator").checkAuth;
const reqPath=path.join(__dirname,'../images');
var storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,reqPath)
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }
})

const upload = multer({storage:storage});

function apiRouter() {
    var app = express()
    app.use("/uploads",express.static('public'));


    app.get(`${baseURI}/users`,async function(req, res) {
        const result = await users.getUsers(req, res)
        console.log(res);
        res.send(result);
    });


    app.post(`${baseURI}/users`, async function(req, res) { // middleware will be added after enhancement. Right now the values are added in sign up page.
        const result = users.createUser(req)
        res.send(result);
    });

    app.patch(`${baseURI}/users`, middleware, async function(req, res) {
        const result = users.updateUsers(req, res)
        res.send(result);
    });

    app.delete(`${baseURI}/users`, middleware, async function(req, res) {
        const result = users.deleteUsers(req, res)
        res.send(result);
    });


    app.post(`${baseURI}/signIn`, async function(req, res) {
        const result = await createToken(req)
        res.send(result);
    });

    app.post(`${baseURI}/signUp`, async function(req, res) {
        const response = await api.signIn.createUsers(req)
        res.send(response)
    });

    app.post(`${baseURI}/testToken`, middleware, async function(req, res) {
        const result = ({ "message": "valid" })
        res.send(result);
    });

    app.get(`${baseURI}/comments`, middleware, async function(req, res) {

        const result = await userscomments.getComments(req, res);
        console.log(result)
        res.send(result);
    });

    app.post(`${baseURI}/comments`,middleware, async function(req, res) {
        const result = userscomments.createComments(req, res)
        res.send(result);
    });

    app.patch(`${baseURI}/comments`, middleware, async function(req, res) {
        const result = userscomments.updateComments(req, res)
        res.send(result);
    });

    app.delete(`${baseURI}/comments`, middleware, async function(req, res) {
        const result = userscomments.deleteComments(req, res)
        res.send(result);
    });

    app.get(`${baseURI}/posts`, middleware, async function(req, res) {
        const result = await post.getPost(req);
        res.send(result);
    });

    app.post(`${baseURI}/posts`, async function(req, res) {
        const result = await post.createPost(req)
        res.send(result);
    });

    app.patch(`${baseURI}/posts`, middleware, async function(req, res) {
        const result = post.updatePost(req, res)
        res.send(result);
    });

    app.delete(`${baseURI}/posts`, middleware, async function(req, res) {
        debugger
        const result =await post.deletePost(req)
        res.send(result);
    });

    app.post(`${baseURI}/upload`, upload.single('image'),async (req, res)=>{
        req.body['imageurl']='/images/'+req.file.filename;
        console.log("====== Router ====");
        // console.log(req.body.imageurl)
          const result = await users.uploadPhoto(req,res);
        res.send(result);
    })
    // TODO: Furter enhancement
    // app.patch(`${baseURI}/update`,function(req,res){   
    //   res.send(api.signIn.updateUsers)
    // });

    // app.delete(`${baseURI}/delete`,function(req,res){   
    //   res.send(api.signIn.deleteUsers)
    // });

    return app;
}

module.exports = {
    apiRouter
}