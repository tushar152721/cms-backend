const bycript = require('bcryptjs');
const slatRound = 10;

const passworDycription = async(password)=>{
    const slat = await bycript.genSalt(slatRound);
    const hashPassword = await bycript.hash(password,slat);
    return { hashPassword,slat }
}

const exportData = {
    passworDycription
}
module.exports = exportData