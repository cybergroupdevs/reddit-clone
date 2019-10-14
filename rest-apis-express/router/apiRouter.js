const { Router } = require("express");

const { baseURI } = require("../config").config;

const { users } = require("../controllers")

const { signIn } = require ("../controllers");

const { userscomments } = require ("../controllers");

const auth  = require("../auth/authenticator");

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

  router.get(`${baseURI}/comments`, userscomments.getUsers);
  router.post(`${baseURI}/comments`, userscomments.createUsers);
  router.patch(`${baseURI}/comments`, userscomments.updateUsers);
  router.delete(`${baseURI}/comments`, userscomments.deleteUsers);

  return router;
}