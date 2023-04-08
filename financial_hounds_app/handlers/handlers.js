const express = require("express");
const studentModel = require("../model/student");
const studentCRUD = require("../model/studentCRUD");
const budgetModel = require("../model/budget");
const budgetCRUD = require("../model/budgetCRUD");
const app = express();

//Student create
exports.postCreate = function(req,res){
  let newStudent = {};
  newStudent.name = req.body.name;
  newStudent.username = req.body.username;
  newStudent.password = req.body.password;

  try{
    savedStudent = studentCRUD.createStudent(newStudent);
    console.log("Student Created")
    return res.status(200).redirect("/Home");
  } catch (error) {
    return res.status(500).redirect("/Home");
  }
};

//Login student
exports.postLogin = function(req, res){
  pusername = req.body.username;
  pwd = req.body.password;

  let student = studentCRUD.login(pusername, pwd);
  if(student != null){
    studentLogin = {}
    studentLogin.username = pusername;
    studentLogin.password = null;
    req.session.data = studentLogin;
    console.log("Logged In")
    return res.status(200).redirect("/StudentHome");
  }else{
    return res.status(500).redirect("/Login");
  }
};

//Logout student
exports.getLogout = function(req, res){
  req.session.data = null;
  console.log("Logged Out")
  return res.status(200).redirect("/Home");
};

//Create budget
exports.postCreateBudget = function(req, res){
  let newBudget = {};
  newBudget.username = req.body.username;
  newBudget.disposable_income = req.body.disposable_income;

  try{
    savedBudget = budgetCRUD.createBudget(newBudget);
    console.log("Budget Created")
    return res.status(200);
  } catch (error) {
    return res.status(500);
  }
}

exports.getBudget = function(req, res){
  let busername = req.body.username;
  let budget = budgetCRUD.getBudget(busername);
  if(budget != null){
    res.status(200);
    res.write(budget);
    res.end();

  }else{
    res.status(404)
    return res.send({msg: 'User not found'});
  }
}