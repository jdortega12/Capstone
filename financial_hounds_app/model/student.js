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
  student = new Student(newStudent);
  console.log(student)

  await student.save()
  
  console.log("Successfully saved!")
  return student;
}

exports.login = async function(pusername, pwd){
  const student = await Student.findOne({username: pusername, password: pwd});
  return student;
}

module.exports = Student;