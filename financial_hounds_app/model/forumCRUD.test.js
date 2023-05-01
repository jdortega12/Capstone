const mongoose = require("mongoose");
const forumModel  = require("./forum.js");
const forumCRUD = require("./forumCRUD.js");
const db = require("../setup/db");

const forumData = {
    year: "2023",
    students: [],
    comments: [],
  };
  

const forumData2 = {
  year: "2023",
  students: ["jortega@gmail.com", "jdortega@loyola.edu"],
  comments: ["Hi", "Whats up?"],
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
 * Forum model
 */
 describe("Forum model", () => {
    it("create & save forum successfully", async () => {
      const validForum = new forumModel(forumData);
      const savedForum = await forumCRUD.createForum(validForum);
      // Object Id should be defined when successfully saved to MongoDB.
      expect(savedForum._id).toBeDefined();
      expect(savedForum.year).toBe(forumData.year);
      expect(savedForum.students).toEqual(forumData.students);
      expect(savedForum.comments).toEqual(forumData.comments);
    });

    it("update forum students successfully", async () => {
        const validForum = new forumModel(forumData);
        const savedForum = await forumCRUD.createForum(validForum);

        const forumYear = "2023";
        const newStudents = ["jdo@gmail.com", "jdortega@loyola.edu"];
        const updatedForum = await forumCRUD.updateStudents(forumYear, newStudents);
        expect(updatedForum.year).toBe(forumYear);
        expect(updatedForum.students).toEqual(newStudents);
        expect(updatedForum.comments).toEqual([]);
      });

      it("update forum comments successfully", async () => {
        const validForum = new forumModel(forumData);
        const savedForum = await forumCRUD.createForum(validForum);

        const forumYear = "2023";
        const newComments = ["hi", "whats up?"];
        const updatedForum = await forumCRUD.updateComments(forumYear, newComments);
        expect(updatedForum.year).toBe(forumYear);
        expect(updatedForum.students).toEqual([]);
        expect(updatedForum.comments).toEqual(newComments);
      });
});