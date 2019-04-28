const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bcrypt = require('bcrypt')

const TeacherData = new Schema({
  teachername: {
    type: String,
    // required: true
  },
  coursename: {
    type: String
  },
  coursecode: {
    type: String
  },
  session: {
    type: Number
  },
  credithour: {
    type: Number
  },
  contacthour: {
    type: Number
  },
  countstudent: {
    type: Number,default:0
  }
});

module.exports = mongoose.model("TeacherData", TeacherData);