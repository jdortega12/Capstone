const budgetModel = require("./budget");

async function createBudget(newBudget){
  budget = new budgetModel(newBudget);
  await budget.save()
  return budget;
}

async function getBudget(busername){
  const budget = await budgetModel.findOne({username: busername});
  return budget;
}

module.exports = {createBudget, getBudget}