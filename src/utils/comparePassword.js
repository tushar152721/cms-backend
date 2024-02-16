const bycript = require('bcryptjs');

const passwordProcess = async(atteptedPassword,hashPassword)=>{
    return bycript.compare(atteptedPassword,hashPassword);
}

const comparePassword = {
    passwordProcess   
}

module.exports = comparePassword