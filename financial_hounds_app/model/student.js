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

//Create a new student
exports.create = async function(newStudent){
  const student = new Student(newStudent);
  await student.save();
  return student;
}

exports.login = async function(pusername){
  const student = await Student.findOne({username: pusername});
  return student;
}

module.exports = Student;