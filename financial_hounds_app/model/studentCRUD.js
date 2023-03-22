const studentModel = require("./student");

async function createStudent(newStudent){
  console.log("Creating a new student")
  student = new studentModel(newStudent);
  console.log(student)

  await student.save()
  
  console.log("Successfully saved!")
  return student;
}

async function login(pusername, pwd){
    const student = await studentModel.findOne({username: pusername, password: pwd});
    console.log("Student found!")
    return student;
}

module.exports = {createStudent, login}