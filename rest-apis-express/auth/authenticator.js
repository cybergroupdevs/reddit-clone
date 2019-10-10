const jwt = require("jsonwebtoken");
const { SECRET } = require('../config').config;

module.exports = (req, res, next) => {
  if (req.headers.token) {
      verfiyToken(req, res)
  } else {
    generateToken(req,res);
  }
  next();
}

function generateToken( req ,res) {
  let email = req.body.email;
  const token = jwt.sign( {email, expiresIn: '24h'},new Buffer(SECRET ,'base64'));
  console.log(res);
  res.setHeader("token", token);
  res.json({
    success: true,
    message: 'Authentication successful!',
    token: token
  });
}

function verfiyToken(req, res) {
  const token = req.headers.token;
  
  jwt.verify(token,new Buffer(SECRET, 'base64'), (err) => {
    if(err){
      res.send({
        auth: false,
        message: err.message
      })
    }else {
      res.send(
        {
          auth: true,
          message: "Matched"
        }
      )
    }
 
  });
}