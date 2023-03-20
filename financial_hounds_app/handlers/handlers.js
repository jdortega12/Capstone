const express = require("express");
const studentModel = require("../model/student");
const app = express();

//Student create
exports.postCreate = function(req,res){
  let newStudent = {};
  newStudent.name = req.body.name;
  newStudent.username = req.body.username;
  newStudent.password = req.body.password;
  console.log(newStudent);

  try{
    savedStudent = studentModel.create(newStudent);
    res.status(200);
    res.send("Saved Successfully");
    res.end;
  } catch (error) {
    res.status(500).send(error)
    res.end;
  }
};

exports.postLogin = function(req, res){
  //send in user and password, get user by username, if the passwords match, set session
  let pusername = req.body.username;
  let pwd = req.body.password;

  let student = studentModel.login(pusername, pwd);

  if(student != null){
    student.password = null;
    
    req.session.student = student;
    res.status(200)
  }else{
    res.status(500)
  }
};

exports.postLogout = function(req, res){
  req.session.user = null;
  res.status(200)
};