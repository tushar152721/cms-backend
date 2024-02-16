const {responseMessage} = require('../constant/messages')
const { verifyJWTToken } = require('../utils/verifyJWTToken')
const { Token,StatusCode } = responseMessage;
const users = require('../model/adminUserModel')

const user = [
     {
        "-id":"65c5f57ffcb1cc00ba972677",
        "firstName":"Amit",
        "email":"amit@gmail.com",
        "password":"test@123"
    }
]
const jwtAuthorization = async(req,res,next)=>{
    try{
        const { authorization } = req.headers;
        if (!authorization){
            return res.status(StatusCode.unsuccess).json({
                success:false,
                message:Token.TokenNotFound
            })
        }else{
            const token = authorization && authorization.startsWith("Bearer ")? authorization.slice(7, authorization.length): authorization;
             const verifyToken = await verifyJWTToken(token);
             if (!verifyToken) throw new Error(Token.TokenInvalid);

             const currentDate = Math.floor(Date.now() / 1000);
         
             if (currentDate > verifyToken?.exp) {
               return res.status(StatusCode.unsuccess).json({
                 success: false,
                 message: Token.TokenExpire,
               });
             }
            if(verifyToken.sub == user[0]['-id']){
                next();
            }
            else{
                let findUser = await users.findOne({_id:verifyToken.sub})
                return res.status(StatusCode.unsuccess).json({
                    status:false,
                    message:`${findUser.firstName} ${findUser.lastName} you don't have accsess`
                })
            }
        }
    }
    catch(error){
         throw new error;
    }
}

const Auth = {
    jwtAuthorization
}

module.exports = Auth;