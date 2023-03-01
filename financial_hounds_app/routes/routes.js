const express = require("express");
const studentModel = require("../model/student");
const app = express();

//Student endpoints
app.post("/student", async (request, response) => {
    const student = new studentModel(request.body);
    
    try {
      await student.save();
      response.send(student);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.patch("/student/:id", async (request, response) => {
  try{
    let id = parseInt(request.params.id)
    await studentModel.findByIdAndUpdate(id, request.body)
    await studentModel.save();
    response.send(student)
  } catch(error){
    response.status(500).send(error)
  }
})

app.get("/students", async (request, response) => {
    const students = await studentModel.find({});
  
    try {
      response.send(students);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.delete("/student/:id", async (request, response) => {
    try {
      let id = parseInt(request.params.id)
      const food = await studentModel.findByIdAndDelete(id);
  
      if (!student) response.status(404).send("Student not found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });

//Display message through react to screen
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

  module.exports = app;