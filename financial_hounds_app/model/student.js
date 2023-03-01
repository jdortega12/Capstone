const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: true,
  },
  class_year: {
    type: String,
  },
  level: {
    type: String,
  }
});

const Student = mongoose.model("Student", StudentSchema)

module.exports = Student;