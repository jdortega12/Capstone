const emergencyModel = require("./emergency");

async function createEmergency(newEmergency){
  emergency = new emergencyModel(newEmergency);
  await emergency.save()
  return emergency;
}

async function getEmergency(busername){
  const emergency = await emergencyModel.findOne({username: busername});
  return emergency;
}

async function deleteEmergency(busername){
  const emergency = await emergencyModel.findOneAndDelete({username: busername});
  return emergency;
}

module.exports = {createEmergency, getEmergency, deleteEmergency}