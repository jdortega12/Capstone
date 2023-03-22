//handler testings
const mongoose = require("mongoose");
const studentCRUD = require("../model/studentCRUD.js");
const handlers = require("./handlers")
const db = require("../setup/db");

beforeAll(async () => {
    await db.setUp();
  });
  
  afterEach(async () => {
    await db.dropCollections();
  });
  
  afterAll(async () => {
    await db.dropDatabase();
  });

const mockCreateStudentRequest = jest.fn(() => 
    new Object({body:{name:"name1", 
    username: "username1", 
    password: "password1"}})
);

const mockLoginRequest = jest.fn(() =>
    new Object({body: {username: "username1",
    password: "password1"}})
);

const mockResponse = jest.fn(Object({res:{redirect: "/Home"}}));

describe("Handler Create Student", () => {
    test("should save the student to the db", async () => {
        let request = mockCreateStudentRequest();
        var response;
        handlers.postCreate(request, mockResponse);
        //console.log(response)
        //expect(savedStudent.name).toBe(request.name);
        //expect(savedStudent.username).toBe(request.username);
        //expect(savedStudent.password).toBe(request.password);
    })
});


/*
describe("Handler Login Student", () -> {
    test("should login the student", async () => {
        let createStudent = mockCreateStudentRequest();
        let request = mockLoginRequest();
        let savedStudent = await studentCRUD.createStudent(createStudent);

        let foundStudent = await studentCRUD.login(request.username, request.password);
        expect(foundStudent.name).toBe(createStudent.name);
        expect(foundStudent.username).toBe(createStudent.username);
        expect(foundStudent.password).toBe(createStudent.password);
        console.log()

    })
});
*/