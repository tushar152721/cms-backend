const serviceModel = require("../model/serviceModel");
const create = async (req, res) => {
  try {
    let clientData = req.body;
    let createNewClient = new serviceModel(clientData);
    await createNewClient.save();
    return res
      .status(200)
      .json({ success: true, message: "Service create success" });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Service create failed" });
  }
};

const update = async (req, res) => {
  try {
    let clientData = req.body;
    let userIdFilter = { _id: req.body._id };
    await serviceModel.findOneAndUpdate(userIdFilter, { $set: clientData });
    return res
      .status(200)
      .json({ success: true, message: "Service update success", data: [] });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Service update failed" });
  }
};

const get = async (req, res) => {
  try {
    const result = await serviceModel.find();
    return res
      .status(200)
      .json({ success: true, message: "Service get success", data: result });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Service get failed" });
  }
};

const deleteData = async (req, res) => {
  try {
    let userIdFilter = { _id: req.body._id };
    console.log("userIdFilter", userIdFilter);
    let data = await serviceModel.findOneAndUpdate(
      { _id: req.body._id },
      {
        $set: {
          isDeleted: true,
          deleteAt: new Date(),
        },
      }
    );
    return res
      .status(200)
      .json({ success: true, message: "Service delete success", data });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Service delete failed" });
  }
};

module.exports = {
  create,
  update,
  deleteData,
  get,
};
