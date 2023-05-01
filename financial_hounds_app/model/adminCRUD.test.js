const mongoose = require("mongoose");
const adminModel  = require("./admin.js");
const adminCRUD = require("./adminCRUD.js");
const db = require("../setup/db");

const adminData = {
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
 * Admin model
 */
 describe("Admin model", () => {
    it("create & save admin successfully", async () => {
        const validAdmin = new adminModel(adminData);
        const savedAdmin = await adminCRUD.createAdmin(validAdmin);
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedAdmin._id).toBeDefined();
        expect(savedAdmin.name).toBe(adminData.name);
        expect(savedAdmin.username).toBe(adminData.username);
      });

    it("find admin for login", async () => {
        const validAdmin = new adminModel(adminData);
        const savedAdmin = await validAdmin.save();
    
        const foundAdmin = await adminCRUD.adminLogin(savedAdmin.username, savedAdmin.password);
        expect(foundAdmin.username).toBe(adminData.username);
        expect(foundAdmin.password).toBe(adminData.password);
      });
});