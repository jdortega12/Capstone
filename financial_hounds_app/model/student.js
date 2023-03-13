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

const Student = mongoose.model("Student", StudentSchema)

//Create a new student
exports.create = async function(newStudent){
  console.log("Creating a new student")
  const student = new Student(newStudent);
  await student.save();
  return student;
}

exports.login = async function(pusername, pwd){
  const student = await Student.findOne({username: pusername, password: pwd});
  return student;
}

module.exports = Student;