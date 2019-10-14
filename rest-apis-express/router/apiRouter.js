const { Router } = require("express");

const { baseURI } = require("../config").config;

const { users } = require("../controllers")

const { signIn } = require("../controllers");



const post = require("../controllers").post;

const auth = require("../auth/authenticator");

module.exports = () => {
    const router = Router();
    router.get(`${baseURI}/signIn/users`, users.getUsers);
    router.post(`${baseURI}/signIn/users`, users.createUser);
    router.patch(`${baseURI}/signIn/users`, users.updateUser);
    router.delete(`${baseURI}/signIn/users`, users.deleteUser);

    router.get(`${baseURI}/signIn`, signIn.getUsers);
    router.post(`${baseURI}/signIn`, signIn.createUsers);
    router.patch(`${baseURI}/signIn`, signIn.updateUsers);
    router.delete(`${baseURI}/signIn`, signIn.deleteUsers);

    router.get(`${baseURI}/posts`, post.getUsers);
    router.post(`${baseURI}/posts`, post.createUser);
    router.patch(`${baseURI}/posts`, post.updateUser);
    router.delete(`${baseURI}/posts`, post.deleteUser);
    return router;
}