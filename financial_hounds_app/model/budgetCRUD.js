const budgetModel = require("./budget");

async function createBudget(newBudget){
  budget = new studentModel(newBudget);
  await budget.save()
  return budget;
}

module.exports = {createBudget}