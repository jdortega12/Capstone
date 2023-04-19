const express = require("express");
const studentModel = require("../model/student");
const studentCRUD = require("../model/studentCRUD");
const budgetModel = require("../model/budget");
const budgetCRUD = require("../model/budgetCRUD");
const emergencyModel = require("../model/emergency");
const emergencyCRUD = require("../model/emergencyCRUD");
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
  //If budget already exists under this name => delete and create a new one

  if(budgetCRUD.getBudget(req.session.data) !== null){
    console.log("DELETING PREVIOUS BUDGET");
    deleted = budgetCRUD.deleteBudget(req.session.data);
  }

  let newBudget = {};
  newBudget.username = req.session.data;
  newBudget.disposable_income = Number(req.body.disposable_income);
  newBudget.total_expenses = Number(req.body.total_expenses);
  try{
    savedBudget = budgetCRUD.createBudget(newBudget);
    console.log("Budget Created");
    return res.status(200).redirect("/StudentHome");
  } catch (error) {
    return res.status(500);
  }
}


//Get budget based on username of student
exports.getBudget = async function(req, res){
  let busername = req.session.data;
  console.log("Username", busername);
  let budget = await budgetCRUD.getBudget(busername);
  if(budget != null){
    return res.status(200).json({disposable_income: budget.disposable_income, total_expenses: budget.total_expenses});
  }else{
    return res.status(404);
  }
}

//Emergency Fund 

//Create Emergency
exports.postCreateEmergency = function(req, res){
  //If emergency already exists under this name => delete and create a new one
  if(emergencyCRUD.getEmergency(req.session.data) !== null){
    deleted = emergencyCRUD.deleteEmergency(req.session.data);
  }
  
  let newEmergency = {};
  newEmergency.username = req.session.data;
  newEmergency.total_expenses = Number(req.body.total_expenses);
  newEmergency.six_month_amount = Number(req.body.six_month_amount);
  try{
    savedEmergency = emergencyCRUD.createEmergency(newEmergency);
    console.log("Emergency Fund Created");
    return res.status(200).redirect("/StudentHome");
  } catch (error) {
    return res.status(500);
  }
}

//Get emergency based on username of student
exports.getEmergency = async function(req, res){
  let busername = req.session.data;
  console.log("Username", busername);
  let emergency = await emergencyCRUD.getEmergency(busername);
  console.log(emergency)
  if(emergency != null){
    return res.status(200).send(emergency);
  }else{
    return res.status(404);
  }
}