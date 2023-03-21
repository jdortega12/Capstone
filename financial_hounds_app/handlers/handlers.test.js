//Handler testings
const studentModel = require('../model/student');

const mockRequest = jest.fn(() => 
    new Object({name:"name1", 
    username: "username1", 
    password: "password1"})
);
const mockPostCreate = jest.fn(() => 
    new studentModel(
        {name:"name1", 
        username: "username1", 
        password: "password1"}));

describe("Handler Create Student", () => {
    test("should save the student to the db", async () => {
        let request = mockRequest();
        let newStudent = {};
        newStudent.name = request.name;
        newStudent.username = request.username;
        newStudent.password = request.password;
        //console.log(newStudent)

        savedStudent = mockPostCreate();
        //console.log(savedStudent);
        expect(mockPostCreate).toHaveBeenCalledTimes(1);
        expect(savedStudent.name).toBe(newStudent.name);
        expect(savedStudent.username).toBe(newStudent.username);
        expect(savedStudent.password).toBe(newStudent.password);
    })

});
