const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bcrypt = require('bcrypt')

const StudentList = new Schema({
  
  studentcoursecode: {
    type: String
  },
  email: {
    type: String
  },
  fullname: {
    type: String
  },
  regNo: {
    type: String
  },
  section: {
    type: String
  }

});

module.exports = mongoose.model("StudentList", StudentList);