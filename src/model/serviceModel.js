const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  mainImage: {
    type: String,
    required: true,
  },
  page: {
    type: mongoose.Types.ObjectId,
    ref: "pages",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  shortContent: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: null,
  },
  bannerImage: {
    type: String,
    required: false,
  },
  bannerTitle: {
    type: String,
    required: true,
  },
  bannerSubTitle: {
    type: String,
    required: true,
  },
  pageContent: {
    type: String,
    required: true,
  },
  bannerSlider: {
    type: Array,
    required: true,
  },

  isDeleted: {
    type: Boolean,
    default: false,
  },
  deleteAt: {
    type: Date,
    default: null,
  },
});

const serviceModel = mongoose.model("service", serviceSchema);
module.exports = serviceModel;
