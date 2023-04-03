const mongoose = require("mongoose");
const budgetModel  = require("./budget.js");
const budgetCRUD = require("./budgetCRUD.js");
const db = require("../setup/db");

const budgetData = {

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
 * Budget model
 */
 describe("Budget model", () => {
    it("create & save budget successfully", async () => {
      const validBudget = new budgetModel(budgetData);
      const savedBudget = await budgetCRUD.createBudget(validBudget);
      expect(savedBudget._id).toBeDefined();
      expect(savedBudget.username).toBe(budgetData.username);
      expect(savedBudget.total_expenses).toBe(budgetData.total_expenses);
    });
});