const contact = require('../model/contactModel')
const { responseMessage } = require('../constant/messages')
const { ERROR,STATUS,STATUSCODE,CONTACT } = responseMessage;

const createContact = async(req,res)=>{
    try{
        const payloadData = req.body;
        let findData = await contact.findOne({email:payloadData.email});
        if(findData !== null){
            return res.status(STATUSCODE.unsuccess).json({
                success:false,
                message:CONTACT.ContactAlreadyExiest
            })
        }
        else{
            const responsePyload = {
                email:payloadData.email,
                mobileNo:payloadData.mobileNo,
                address:payloadData.address
            }
            const newContact = new contact(responsePyload)
            const saveResponse = await newContact.save();
            if(saveResponse){
                return res.status(STATUSCODE.success).json({
                    status:STATUS.success,
                    message: CONTACT.AddContact,
                });
            }else{
                return res.status(STATUSCODE.internallIssue).json({
                    status:STATUS.success,
                    message: ERROR.Error
                })
            }
        }
    }
    catch(error){
        console.log('error', error)
        return error
    }
}
const getContactDetail = async(req,res)=>{
    try{
        try {
            const findContact = await contact.find({isDeleted:false});
            if (findContact) {
                return res.status(STATUSCODE.success).json({
                    status: STATUS.success,
                    message: CONTACT.GetContact,
                    data: findContact
                });
            }
        } catch (error) {
            throw error;
        }
    }
    catch(error){
        return error;
    }
}
const updateContactDetail = async(req,res)=>{
    try{
        const {_id, email,mobileNo,address } = req.body;
        const findContactDetail = await contact.findOne({email:email}); 
        if(findContactDetail){
            return res.status(409).json({
                success:false,
                message:"Contact is already exiest",
                data:[]
            })
        }else{
            let updatePayload ={
                email:email,
                mobileNo:mobileNo,
                address:address
            }
            const updateContactData = await contact.findOneAndUpdate({_id:_id},updatePayload)
            if(updateContactData){
                return res.status(200).json({
                    success:true,
                    mesage:"Contact updated successfully",
                    data: []
                })
            }else{
                return res.status(500).json({
                    success:false,
                    message:"Contact detail not found"
                })
            }
        }
    }
    catch(error){
        return error;
    }
}
const contactDelete = async(req,res)=>{
    try{
        const {_id} = req.query;
        const deleteContactDetail = await contact.findOneAndUpdate({_id:_id},{isDeleted:true})
        if(deleteContactDetail){
            return res.status(200).json({
                success:true,
                mesage:"Contact deleted successfully",
                data: []
            })
        }else{
            return res.status(500).json({
                success:false,
                message:"Contact not found"
            })
        }
    }
    catch(error){
        return error
    }
}
module.exports = {
    createContact,
    getContactDetail,
    updateContactDetail,
    contactDelete
}