const express = require("express");
const studentModel = require("../model/student");
const studentCRUD = require("../model/studentCRUD");
const app = express();

//Student create
exports.postCreate = function(req,res){
  let newStudent = {};
  newStudent.name = req.body.name;
  newStudent.username = req.body.username;
  newStudent.password = req.body.password;
  console.log(newStudent);

  try{
    savedStudent = studentCRUD.createStudent(newStudent);

    //res.sendStatus(200);
    res.redirect("/Home");
  } catch (error) {
    //res.sendStatus(500).send(error)
    res.redirect("/Home");
  }
};

//Login student
exports.postLogin = function(req, res){
  let accountInfo = {}
  accountInfo.pusername = req.body.username;
  accountInfo.pwd = req.body.password;

  console.log(accountInfo);
  res.redirect("/Home");
  let student = studentCRUD.login(pusername, pwd);

  if(student != null){
    student.password = null;
    console.log(student)
    req.session.student = student;

    //res.sendStatus(200)
    res.redirect("/Home");
  }else{
    //res.sendStatus(500)
    res.redirect("/Home");
  }
};

//Logout student
exports.postLogout = function(req, res){
  req.session.user = null;
  console.log("Logged Out")
  //res.status(200);
  res.redirect("/Home");
};