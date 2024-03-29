const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    rate: {
      type: Number,
      default:0.0,
    },
    rateData:{
      type: Array,
      default:[]
    },
    nbRate: {
      type: Number,
      default:0
    },
    certifLevel: {
      type: Number,
      default:0.2
    },
    Raters: {
      type: Array,
      default: [],
    },
    ratings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
      default:"let's live in a trustable world"
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    cniCheck: {
      type: Boolean,
      default: false,
    },
    cniPicture: {
      type: String,
      default: "",
    },
    houseCheck: {
      type: Boolean,
      default: false,
    },
    houseLocation: {
      type: String,
      default: "",
    },
    workCheck: {
      type: Boolean,
      default: false,
    },
    work: {
      type: String,
      default: "",
    },
    workPicture: {
      type: String,
      default: "",
    },
    bankCheck: {
      type: Boolean,
      default: false,
    },
    bankPdf: {
      type: String,
      default: "",
    },
    eduCheck: {
      type: Boolean,
      default: false,
    },
    eduPdf: {
      type: String,
      default: "",
    },
    parcours: {
      type: String,
      default: "",
    },
    checkWaiting:{
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
