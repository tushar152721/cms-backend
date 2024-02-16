const responseMessage = {
    USER:{
        AddUser:"User added successfully",
        GetUser:"User get successfully",
        WrongPassword:"password is wrong!",
        UserNotFound:"User not exiest!",
        UserAlradyExiest:"User is alrady exiest"
    },
    CONTACT:{
        AddContact:"Add contact successfully",
        ContactAlreadyExiest:"Contact is alrady exiest",
        GetContact:"Contact get successfully",
    },
    ERROR:{
        Error:"somthing went wrong"
    },
    STATUS:{
        success:'success'
    },
    LOGINSTATUS:{
        success:'login successful'
    },
    JWT: {
        SECRET: "SECRET",
        EXPIRY: "7d",
        FORGET_TOKEN_EXPIRY: "10m",
        ACCOUNT_ACTIVATION: "SECRET",
      },
    TOKEN:{
        TokenNotFound:"token not found.",
        TokenInvalid:"token is invalid.",
        TokenExpire:"token is expire"
    },
    STATUSCODE:{
        success:200,
        unsuccess:400,
        internallIssue:500
    }
}
const response = {
    responseMessage
}
module.exports = response;