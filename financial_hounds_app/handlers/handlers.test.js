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

describe("Handler Get Students", () => {
    test("should not get the students from the db", async () => {
        const req = mockRequest(
            {},
            {}
        )
        const res = mockResponse();
        await handlers.getStudents(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });
});

describe("Handler Admin Student", () => {
    test("should save the admin to the db", async () => {
        const req = mockRequest(
            {},
            {name: "name1", username: "username1", password: "password"}
        )
        const res = mockResponse();
        await handlers.postCreateAdmin(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith("/Home");
    });
});

describe("Handler Get Student", () => {
    test("should get the student from the database", async () => {
        const req = mockRequest(
            "username1",
            {}
        )
        const res = mockResponse();
        await handlers.getProfile(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
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

describe("Handler Login Admin", () => {
    test("should login the admin", async () => {
        const req = mockRequest(
            {},
            {username: "username1", password: "password"}
        )
        const res = mockResponse();
        await handlers.postAdminLogin(req, res);
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
    test("should not get the budget from the db", async () => {
        const req = mockRequest(
            "username1",
            {}
        )
        const res = mockResponse();
        await handlers.getBudget(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
    });
});

describe("Handler Create Emergency", () => {
    test("should save the emergency fund to the db", async () => {
        const req = mockRequest(
            "username1",
            {total_expenses: 1000, six_month_amount:6000}
        )
        const res = mockResponse();
        await handlers.postCreateEmergency(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith("/StudentHome");
    });
});

describe("Handler Get emergency", () => {
    test("should not get the emergency from the db", async () => {
        const req = mockRequest(
            "username1",
            {}
        )
        const res = mockResponse();
        await handlers.getEmergency(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
    });
});

describe("Handler Create Retirement", () => {
    test("should save the Retirement fund to the db", async () => {
        const req = mockRequest(
            "username1",
            {retirement_goal: 1200000, retirement_saved: 900000}
        )
        const res = mockResponse();
        await handlers.postCreateRetirement(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith("/StudentHome");
    });
});

describe("Handler Get Retirement", () => {
    test("should not get the Retirement from the db", async () => {
        const req = mockRequest(
            "username1",
            {}
        )
        const res = mockResponse();
        await handlers.getRetirement(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
    });
});

describe("Handler create forum", () => {
    test("should save the forum to the db", async () => {
        const req = mockRequest(
            {},
            {year: "2023", students: [], comments: []}
        )
        const res = mockResponse();
        await handlers.postCreateForum(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith("/Home");
    });
});

describe("Handler update forum students", () => {
    test("should updated the forum's students", async () => {
        const req = mockRequest(
            {},
            {year: "2023", students: ["2@gmail.com", "4@gmail.com"]}
        )
        const res = mockResponse();
        await handlers.postUpdateStudents(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith("/Home");
    });
});

describe("Handler update forum students", () => {
    test("should updated the forum's students", async () => {
        const req = mockRequest(
            {},
            {year: "2023", comments: ["hi", "Hello"]}
        )
        const res = mockResponse();
        await handlers.postUpdateComments(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith("/Home");
    });
});