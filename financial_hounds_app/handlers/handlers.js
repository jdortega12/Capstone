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
    res.sendStatus(200);
    res.redirect("/Home");
  } catch (error) {
    res.sendStatus(500).send(error)
    res.redirect("/Home");
  }
};

//Login student
exports.postLogin = function(req, res){
  //send in user and password, get user by username, if the passwords match, set session
  let pusername = req.body.username;
  let pwd = req.body.password;

  console.log(pusername, pwd)

  let student = studentModel.login(pusername, pwd);

  if(student != null){
    student.password = null;
    console.log(student)
    req.session.student = student;
    res.sendStatus(200)
    res.redirect("http://localhost:3000/Home");
  }else{
    res.sendStatus(500)
    res.redirect("http://localhost:3000/Home");
  }
};

//Logout student
exports.postLogout = function(req, res){
  req.session.user = null;
  res.status(200)
};