//const {  } = require("express");
var express = require('express')

const { baseURI } = require("../config").config;

const  api = require ("../controllers");

const middleware  = require("../auth/middleware");

const createToken = require("../auth/authenticator").checkAuth;

module.exports = () => {
  var app = express()
  app.post(`${baseURI}/signIn`,async function(req,res){
    const result = await createToken(req)
    res.send(result);
  });

  app.post(`${baseURI}/signUp`,async function(req,res){
    const response = await api.signIn.createUsers(req)
    res.send(response)
  });

  app.post(`${baseURI}/testToken`,middleware,async function(req,res){
    const result = ({"message":"valid"})
    res.send(result);
  });

  // TODO: Furter enhancement
  // app.patch(`${baseURI}/update`,function(req,res){   
  //   res.send(api.signIn.updateUsers)
  // });
  
  // app.delete(`${baseURI}/delete`,function(req,res){   
  //   res.send(api.signIn.deleteUsers)
  // });

  return app;
}