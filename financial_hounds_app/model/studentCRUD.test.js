const mongoose = require("mongoose");
const studentModel  = require("./student.js");
const studentCRUD = require("./studentCRUD.js")
const db = require("../setup/db");

const studentData = {
  name: "Jaymin",
  username: "jortega",
  password: "123",
};

beforeAll(async () => {
  await db.setUp();
});

afterEach(async () => {
  await db.dropCollections();
});

afterAll(async () => {
  await db.dropDatabase();
});

/**
 * Student model
 */
 describe("Student model", () => {
    it("create & save student successfully", async () => {
      const validStudent = new studentModel(studentData);
      const savedStudent = await studentCRUD.createStudent(validStudent);
      // Object Id should be defined when successfully saved to MongoDB.
      expect(savedStudent._id).toBeDefined();
      expect(savedStudent.name).toBe(studentData.name);
      expect(savedStudent.username).toBe(studentData.username);
    });

    it("find student for login", async () => {
        const validStudent = new studentModel(studentData);
        const savedStudent = await studentCRUD.createStudent(validStudent);
    
        const foundStudent = await studentCRUD.login(savedStudent.username, savedStudent.password);
        //const foundStudent = await studentModel.findOne({username: savedStudent.username, password: savedStudent.password});
        expect(foundStudent.username).toBe(studentData.username);
        expect(foundStudent.password).toBe(studentData.password);
      });
});