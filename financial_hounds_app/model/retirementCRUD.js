const retirementModel = require("./retirement");

async function createRetirement(newRetirement){
  retirement = new retirementModel(newRetirement);
  await retirement.save()
  return retirement;
}

async function getRetirement(busername){
  const retirement = await retirementModel.findOne({username: busername});
  return retirement;
}

async function deleteRetirement(busername){
  const retirement = await retirementModel.findOneAndDelete({username: busername});
  return retirement;
}

module.exports = {createRetirement, getRetirement, deleteRetirement}