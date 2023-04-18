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
    res.redirect = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
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
        await handlers.getLogout(req, res);
        expect(req.session.data).toBeNull();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith("/Home");
    });
});

describe("Handler Create Budget", () => {
    test("should save the budget to the db", async () => {
        const req = mockRequest(
            "username1",
            {disposable_income: 1000, total_expenses: 200}
        )
        const res = mockResponse();
        await handlers.postCreateBudget(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith("/StudentHome");
    });
});

describe("Handler Get Budget", () => {
    test("should get the budget from the db", async () => {
        const req = mockRequest(
            "username1",
            {}
        )
        const res = mockResponse();
        await handlers.getBudget(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toBeDefined();
    });
});