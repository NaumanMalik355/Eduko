const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bcrypt = require('bcrypt')

const DepartSemester = new Schema({
  deptname: {
    type: String
  },
  semester1: [],
  semester2: [],
  semester3: [],
  semester4: [],
  semester5: [],
  semester6: [],
  semester7: [],
  semester8: []
});

module.exports = mongoose.model("DepartBook", DepartSemester);
