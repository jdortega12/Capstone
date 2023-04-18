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
  console.log("I'm running")
  pusername = req.body.username;
  pwd = req.body.password;

  let student = studentCRUD.login(pusername, pwd);
  if(student != null){
    req.session.data = pusername;
    console.log("Logged In")
    console.log("DATA:", req.session.data)
    return res.status(200).redirect("/Home");
  }else{
    return res.status(500).redirect("/Login");
  }
};

//Logout student
exports.getLogout = function(req, res){
  req.session.data = null;
  console.log("Logged Out");
  console.log("DATA:", req.session.data);
  return res.status(200).redirect("/Home");
};

//Create budget
exports.postCreateBudget = function(req, res){
  disposable_income = req.body.disposable_income;
  total_expenses = req.body.total_expenses;

  //If budget already exists under this name => delete and create a new one
  
  let newBudget = {};
  newBudget.username = req.session.data;
  newBudget.disposable_income = Number(req.body.disposable_income);
  newBudget.total_expenses = Number(req.body.total_expenses);

  try{
    savedBudget = budgetCRUD.createBudget(newBudget);
    console.log("Budget Created")
    return res.status(200).redirect("/StudentHome");
  } catch (error) {
    return res.status(500);
  }
}

/*
//Get budget based on username of student
exports.getBudget = function(req, res){
  let busername = req.body.username;
  let budget = budgetCRUD.getBudget(busername);
  if(budget != null){
    return res.status(200);
  }else{
    return res.status(404);
  }
}
*/