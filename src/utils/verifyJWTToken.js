 const { responseMessage } = require('../constant/messages')
 const { verify } = require('jsonwebtoken');
 const { JWT } = responseMessage

const verifyJWTToken = async (token) => {
	const verifyToken = await verify(token, JWT.ACCOUNT_ACTIVATION);
	return verifyToken;
};

const varify = {
    verifyJWTToken
}
module.exports = varify;