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
    required: true,
  },
  class_year: {
    type: String,
    default: "2023",
  },
  level: {
    type: String,
    default: "beginner",
  }
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;