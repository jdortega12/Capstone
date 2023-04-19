const mongoose = require("mongoose");
const retirementModel  = require("./retirement.js");
const retirementCRUD = require("./retirementCRUD.js");
const db = require("../setup/db");

const retirementData = {
  username: "test1",
  age: 32,
  pre_tax_income: 80000,
  current_savings: 40000,
  monthly_savings: 500,
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
 * Retirement model
 */
 describe("Retirement model", () => {
    it("create & save retirement fund successfully", async () => {
      const validRetirement = new retirementModel(retirementData);
      const savedRetirement = await retirementCRUD.createRetirement(validRetirement);
      expect(savedRetirement._id).toBeDefined();
      expect(savedRetirement.username).toBe(retirementData.username);
      expect(savedRetirement.age).toBe(retirementData.age);
      expect(savedRetirement.pre_tax_income).toBe(retirementData.pre_tax_income);
      expect(savedRetirement.current_savings).toBe(retirementData.current_savings);
      expect(savedRetirement.monthly_savings).toBe(retirementData.monthly_savings);
    });

    it("get retirement", async () => {
      const validRetirement = new retirementModel(retirementData);
      const savedRetirement = await retirementCRUD.createRetirement(validRetirement);
  
      const foundRetirement = await retirementCRUD.getRetirement(savedRetirement.username);
      expect(foundRetirement.username).toBe(retirementData.username);
      expect(foundRetirement.age).toBe(retirementData.age);
      expect(foundRetirement.pre_tax_income).toBe(retirementData.pre_tax_income);
      expect(foundRetirement.current_savings).toBe(retirementData.current_savings);
      expect(foundRetirement.monthly_savings).toBe(retirementData.monthly_savings);
    });

    it("delete retirement", async () => {
      const validRetirement = new retirementModel(retirementData);
      const savedRetirement = await retirementCRUD.createRetirement(validRetirement);
  
      const deletedRetirement = await retirementCRUD.deleteRetirement(savedRetirement.username);
      expect(deletedRetirement.username).toBe(retirementData.username);
      expect(deletedRetirement.age).toBe(retirementData.age);
      expect(deletedRetirement.pre_tax_income).toBe(retirementData.pre_tax_income);
      expect(deletedRetirement.current_savings).toBe(retirementData.current_savings);
      expect(deletedRetirement.monthly_savings).toBe(retirementData.monthly_savings);

      const tryToFind = await retirementCRUD.getRetirement(savedRetirement.username);
      expect(tryToFind).toBeNull();
    });
});