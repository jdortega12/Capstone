const mongoose = require("mongoose");
const retirementModel  = require("./retirement.js");
const retirementCRUD = require("./retirementCRUD.js");
const db = require("../setup/db");

const retirementData = {
  username: "test1",
  retirement_goal: 1200000,
  retirement_saved: 900000,
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
      expect(savedRetirement.retirement_goal).toBe(retirementData.retirement_goal);
      expect(savedRetirement.retirement_saved).toBe(retirementData.retirement_saved);
    });

    it("get retirement", async () => {
      const validRetirement = new retirementModel(retirementData);
      const savedRetirement = await retirementCRUD.createRetirement(validRetirement);
  
      const foundRetirement = await retirementCRUD.getRetirement(savedRetirement.username);
      expect(foundRetirement.username).toBe(retirementData.username);
      expect(foundRetirement.retirement_goal).toBe(retirementData.retirement_goal);
      expect(foundRetirement.retirement_saved).toBe(retirementData.retirement_saved);
    });

    it("delete retirement", async () => {
      const validRetirement = new retirementModel(retirementData);
      const savedRetirement = await retirementCRUD.createRetirement(validRetirement);
  
      const deletedRetirement = await retirementCRUD.deleteRetirement(savedRetirement.username);
      expect(deletedRetirement.username).toBe(retirementData.username);
      expect(deletedRetirement.retirement_goal).toBe(retirementData.retirement_goal);
      expect(deletedRetirement.retirement_saved).toBe(retirementData.retirement_saved);

      const tryToFind = await retirementCRUD.getRetirement(savedRetirement.username);
      expect(tryToFind).toBeNull();
    });
});