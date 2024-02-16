const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  page: {
    type: mongoose.Types.ObjectId,
    ref: "pages",
    required: true,
  },
  email: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
  address: [
    {
      officeName: {
        type: String,
      },
      officeAddress: {
        type: String,
      },
    },
  ],
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const contactModel = mongoose.model("contact", contactSchema);
module.exports = contactModel;
