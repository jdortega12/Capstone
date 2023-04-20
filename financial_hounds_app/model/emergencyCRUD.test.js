const mongoose = require("mongoose");
const emergencyModel  = require("./emergency.js");
const emergencyCRUD = require("./emergencyCRUD.js");
const db = require("../setup/db");

const emergencyData = {
  username: "test1",
  total_expenses: 200,
  six_month_amount: 1200,
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
 * Emergency model
 */
 describe("Emergency model", () => {
    it("create & save emergency fund successfully", async () => {
      const validEmergency = new emergencyModel(emergencyData);
      const savedEmergency = await emergencyCRUD.createEmergency(validEmergency);
      expect(savedEmergency._id).toBeDefined();
      expect(savedEmergency.username).toBe(emergencyData.username);
      expect(savedEmergency.total_expenses).toBe(emergencyData.total_expenses);
      expect(savedEmergency.six_month_amount).toBe(emergencyData.six_month_amount);
    });

    it("get emergency", async () => {
      const validEmergency = new emergencyModel(emergencyData);
      const savedEmergency = await emergencyCRUD.createEmergency(validEmergency);
  
      const foundEmergency = await emergencyCRUD.getEmergency(savedEmergency.username);
      expect(foundEmergency.username).toBe(emergencyData.username);
      expect(foundEmergency.total_expenses).toBe(emergencyData.total_expenses);
      expect(foundEmergency.six_month_amount).toBe(emergencyData.six_month_amount);
    });

    it("delete emergency", async () => {
      const validEmergency = new emergencyModel(emergencyData);
      const savedEmergency = await emergencyCRUD.createEmergency(validEmergency);
  
      const deletedEmergency = await emergencyCRUD.deleteEmergency(savedEmergency.username);
      expect(deletedEmergency.username).toBe(emergencyData.username);
      expect(deletedEmergency.total_expenses).toBe(emergencyData.total_expenses);
      expect(deletedEmergency.six_month_amount).toBe(emergencyData.six_month_amount);

      const tryToFind = await emergencyCRUD.getEmergency(savedEmergency.username);
      expect(tryToFind).toBeNull();
    });
});