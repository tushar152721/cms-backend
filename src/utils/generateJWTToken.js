const { sign } = require('jsonwebtoken');
const {responseMessage } = require('../constant/messages') 
const secret = responseMessage.JWT.SECRET;

const generateJWTToken = (id , time) => {
  const token = sign({ sub: id }, secret, { expiresIn: time });
  return token;
};

const token = {
    generateJWTToken
}

module.exports = token