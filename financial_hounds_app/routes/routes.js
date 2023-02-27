const express = require("express");
const userModel = require("../model/models");
const app = express();

//Post endpoints
app.post("/add_student", async (request, response) => {
    const student = new userModel(request.body);
  
    try {
      await student.save();
      response.send(student);
    } catch (error) {
      response.status(500).send(error);
    }
});

//Get endpoints
app.get("/students", async (request, response) => {
    const students = await userModel.find({});
  
    try {
      response.send(students);
    } catch (error) {
      response.status(500).send(error);
    }
  });


//Display message through react to screen
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

  module.exports = app;