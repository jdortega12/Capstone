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
  //console.log(newStudent);

  try{
    savedStudent = studentCRUD.createStudent(newStudent);
    return res.status(200).redirect("/Home");
  } catch (error) {
    return res.status(500).redirect("/Home");
  }
};

//Login student
exports.postLogin = function(req, res){
  pusername = req.body.username;
  pwd = req.body.password;
  console.log(pusername, pwd);

  let student = studentCRUD.login(pusername, pwd);
  if(student != null){
    student.username = pusername;
    student.password = null;
    req.session.data = student;

    return res.status(200).redirect("/Home");
  }else{
    return res.status(500).redirect("/Home");
  }
};

//Logout student
exports.postLogout = function(req, res){
  req.session.data = null;
  console.log("Logged Out")
  return res.status(200).redirect("/Home");
};