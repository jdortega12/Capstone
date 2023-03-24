//handler testings
const db = require("../setup/db");
const handlers = require("./handlers")

beforeAll(async () => {
    await db.setUp();
  });
  
  afterEach(async () => {
    await db.dropCollections();
  });
  
  afterAll(async () => {
    await db.dropDatabase();
  });

const mockRequest = (sessionData, body) => ({
    session: {data: sessionData},
    body
});

const mockResponse = () => {
    const res = {};
    res.redirect = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    return res
}

describe("Handler Create Student", () => {
    test("should save the student to the db", async () => {
        const req = mockRequest(
            {},
            {name: "name1", username: "username1", password: "password"}
        )
        const res = mockResponse();
        await handlers.postCreate(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith("/Home");
    });
});

describe("Handler Login Student", () => {
    test("should login the student", async () => {
        const req = mockRequest(
            {},
            {username: "username1", password: "password"}
        )
        const res = mockResponse();
        await handlers.postLogin(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith("/Home");
    });
});

describe("Handler Logout Student", () => {
    test("should logout the student", async () => {
        const req = mockRequest({username: "username1"})
        const res = mockResponse();
        await handlers.postLogout(req, res);
        expect(req.session.data).toBeNull();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith("/Home");
    });
});