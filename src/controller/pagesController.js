const pagesModel = require("../model/pagesModel");
const { responseMessage } = require("../constant/messages");
const slug = require("slugify");
const { pageValidation } = require("../validation/pageValidation");
const { Types } = require("mongoose");
const { CONTACT, STATUS, STATUSCODE } = responseMessage;

const createPage = async (req, res) => {
  try {
    const payloadData = req.body;
    const { error } = pageValidation.validate(payloadData);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    } else {
      let checkSlug = slug(payloadData.pagename, "_");
      const updatePayload = {
        ...payloadData,
        slug: checkSlug,
      };
      let findSlugData = await pagesModel.findOne({ slug: updatePayload.slug });
      if (findSlugData !== null) {
        return res.status(409).json({
          success: false,
          mesage: "page is already exists",
        });
      } else {
        const newContact = new pagesModel(updatePayload);
        const saveResponse = await newContact.save();
        if (saveResponse) {
          return res.status(STATUSCODE.success).json({
            status: STATUS.success,
            message: CONTACT.AddContact,
            data: [],
          });
        } else {
          return res.status(STATUSCODE.internallIssue).json({
            status: STATUS.success,
            message: error.Error,
          });
        }
      }
    }
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

const pagesDetail = async (req, res) => {
  try {
    const { _id } = req.query;
    if (_id) {
      const findData = await pagesModel.findById({
        _id: _id,
        isDeleted: false,
      });
      return res.status(STATUSCODE.success).json({
        success: STATUS.success,
        message: "Pages get successfully",
        data: findData,
      });
    } else {
      const findData = await pagesModel.find({ isDeleted: false });
      if (findData) {
        return res.status(200).json({
          success: true,
          mesage: "Pages get successfully",
          data: findData,
        });
      } else {
        return res.status(404).json({
          success: true,
          message: "No data found",
          data: [],
        });
      }
    }
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

const updatePages = async (req, res) => {
  try {
    const { _id, pagename } = req.body;
    const updatePayload = {
      ...req.body,
      slug: slug(pagename, "_"),
    };
    let findSlugData = await pagesModel.findOne({ slug: updatePayload.slug });
    // if (findSlugData !== null) {
    //   return res.status(409).json({
    //     success: false,
    //     mesage: "page is already exists",
    //     data: [],
    //   });
    // } else {
    const updateContactData = await pagesModel.findOneAndUpdate(
      { _id: _id },
      updatePayload
    );
    if (updateContactData) {
      return res.status(200).json({
        success: true,
        mesage: "Page updated successfully",
        data: [],
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Page detail not found",
      });
    }
    // }
  } catch (error) {
    console.log("error", error);
    return;
  }
};
const deletePages = async (req, res) => {
  try {
    const { _id } = req.query;
    const deleteContactDetail = await pagesModel.findOneAndUpdate(
      { _id: _id },
      { isDeleted: true }
    );
    if (deleteContactDetail) {
      return res.status(200).json({
        success: true,
        mesage: "Page deleted successfully",
        data: [],
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Page not found",
      });
    }
  } catch (error) {
    console.log("error", error);
  }
};

const findPagesDetails = async (req, res) => {
  try {
    const { slug } = req.query;

    const data = await pagesModel.aggregate([
      { $match: { slug: req.query.slug } },
      {
        $lookup: {
          from: "contacts",
          localField: "_id",
          foreignField: "page",
          as: "page",
        },
      },
      {
        $unwind: {
          path: "$page",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "services",
          localField: "_id",
          foreignField: "page",
          as: "service",
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "Pages get successfully",
      data: data,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: true,
      message: "Pages get failed",
      data: [],
    });
  }
};
module.exports = {
  createPage,
  pagesDetail,
  updatePages,
  deletePages,
  findPagesDetails,
};
