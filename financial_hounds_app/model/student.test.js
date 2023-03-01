const mongoose = require("mongoose");
const  Student  = require("./student");
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
    const validStudent = new Student(studentData);
    const savedStudent = await validStudent.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedStudent._id).toBeDefined();
    expect(savedStudent.name).toBe(studentData.name);
    expect(savedStudent.username).toBe(studentData.username);
  });
  
});