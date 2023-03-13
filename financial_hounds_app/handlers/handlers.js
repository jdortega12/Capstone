const express = require("express");
const studentModel = require("../model/student");
const app = express();

//Student create
exports.postCreate = function(req,res){
  //console.log(JSON.stringify(req.body))
  let newStudent = {};
  newStudent.name = req.body.name;
  newStudent.username = req.body.username;
  newStudent.password = req.body.password;
  console.log(newStudent);
  
  try{
    studentModel.create(newStudent)
    res.send(student);
    res.status(200);
  } catch (error) {
    res.status(500).send(error)
  }
};

exports.postLogin = function(req, res){
  //send in user and password, get user by username, if the passwords match, set session
  let pusername = req.body.username;
  let pwd = req.body.password;
  let student = studentModel.login(pusername, pwd);
  if(student != null){
    student.password = null;
    req.session.student
    res.status(200)
    res.send(student)
  }else{
    res.status(500)
  }
};