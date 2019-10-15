const { Router } = require("express");

const { baseURI } = require("../config").config;

const { users } = require("../controllers")

const { signIn } = require ("../controllers");

const auth  = require("../auth/authenticator");

module.exports = () => {
  const router = Router();
  router.get(`${baseURI}/users`, users.getUsers);
  router.post(`${baseURI}/users`, users.createUser);
  router.patch(`${baseURI}/users`, users.updateUser);
  router.delete(`${baseURI}/users`, users.deleteUser);

  router.get(`${baseURI}/signIn`, signIn.getUsers);
  router.post(`${baseURI}/signIn`, signIn.createUsers);
  router.patch(`${baseURI}/signIn`, signIn.updateUsers);
  router.delete(`${baseURI}/signIn`, signIn.deleteUsers);

  return router;
}