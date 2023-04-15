const mongoose = require("mongoose");
const budgetModel  = require("./budget.js");
const budgetCRUD = require("./budgetCRUD.js");
const db = require("../setup/db");

const budgetData = {
  username: "test1",
  disposable_income: 1000,
  total_expenses: 200,
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
      expect(savedBudget.disposable_income).toBe(budgetData.disposable_income);
      expect(savedBudget.total_expenses).toBe(budgetData.total_expenses);
    });

    it("get budget", async () => {
      const validBudget = new budgetModel(budgetData);
      const savedBudget = await budgetCRUD.createBudget(validBudget);
  
      const foundBudget = await budgetCRUD.getBudget(savedBudget.username);
      expect(foundBudget.username).toBe(budgetData.username);
      expect(foundBudget.disposable_income).toBe(budgetData.disposable_income);
      expect(foundBudget.total_expenses).toBe(budgetData.total_expenses);
    });
});