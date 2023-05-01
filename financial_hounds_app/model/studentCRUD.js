const studentModel = require("./student");

async function createStudent(newStudent){
  student = new studentModel(newStudent);
  await student.save()
  return student;
}

async function getStudent(username){
  const student = await studentModel.findOne({username: username});
  return student;
}

async function login(pusername, pwd){
    const student = await studentModel.findOne({username: pusername, password: pwd});
    return student;
}


async function getAllStudents(){
  const students = await studentModel.find();
  return students;
}

module.exports = {createStudent, login, getStudent, getAllStudents}

