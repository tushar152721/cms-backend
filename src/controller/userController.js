const users = require("../model/adminUserModel");
const { responseMessage } = require("../constant/messages");
const { USER, ERROR, STATUS, JWT, LOGINSTATUS, STATUSCODE } = responseMessage;
const { passworDycription } = require("../utils/hasPassword");
const { passwordProcess } = require("../utils/comparePassword");
const { generateJWTToken } = require("../utils/generateJWTToken");
const { userValidation } = require("../validation/userValidation");

const createUser = async (req, res) => {
  try {
    const payloadData = req.body;
    const { error } = userValidation.validate(payloadData);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }else{
      let findData = await users.findOne({ email: payloadData.email });
      if (findData !== null) {
        return res.status(STATUSCODE.unsuccess).json({
          success: false,
          message: USER.UserAlradyExiest,
          data:[]
        });
      } else {
        if (payloadData) {
          const { hashPassword, slat } = await passworDycription(
            payloadData.password
          );
          let updatedPayload = {
            ...payloadData,
            password: hashPassword,
            slat: slat,
          };
          const newUser = new users(updatedPayload);
          const saveResponse = await newUser.save();
          if (saveResponse) {
            return res.status(STATUSCODE.success).json({
              status: STATUS.success,
              message: USER.AddUser,
              data:[]
            });
          } else {
            return res.status(STATUSCODE.internallIssue).json({
              status: STATUS.success,
              message: ERROR.Error,
              data:[]
            });
          }
        }
      }  
    }
      
  } catch (error) {
    throw error;
  }
};
const getUser = async (req, res) => {
  try {
    const { _id } = req.query
    if(_id){
        const findData = await users.findById({_id:_id});
        return res.status(STATUSCODE.success).json({
          status: STATUS.success,
          message: USER.GetUser,
          data: findData,
        });
      }else{
        const findUser = await users.find();
        if (findUser) {
          return res.status(STATUSCODE.success).json({
            status: STATUS.success,
            message: USER.GetUser,
            data: findUser,
          });
        }
    
      }
  } catch (error) {
    throw error;
  }
};
const userLogin = async (req, res) => {
  try {
    const payloadData = req.body;
    let findUser = await users.find({ email: payloadData.email });
    if (findUser != 0) {
      const compareStatus = await passwordProcess(
        payloadData.password,
        findUser[0].password
      );
      if (compareStatus == true) {
        const token = generateJWTToken(findUser[0]?._id, JWT.EXPIRY);
        if (token) {
          res.status(STATUSCODE.success).json({
            status: true,
            message: token,
            token: LOGINSTATUS.success,
          });
        }
      } else {
        return res.status(STATUSCODE.unsuccess).json({
          status: false,
          message: USER.WrongPassword,
        });
      }
    } else {
      res.status(STATUSCODE.unsuccess).json({
        status: false,
        message: USER.UserNotFound,
      });
    }
  } catch (error) {
    throw new error();
  }
};
const userController = {
  createUser,
  getUser,
  userLogin,
};

module.exports = userController;
