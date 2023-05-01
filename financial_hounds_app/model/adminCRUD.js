const adminModel = require("./admin");

async function createAdmin(newAdmin){
    admin = new adminModel(newAdmin);
    await admin.save()
    return admin;
  }

async function adminLogin(pusername, pwd){
    const admin = await adminModel.findOne({username: pusername, password: pwd});
    return admin;
}

module.exports = {createAdmin, adminLogin}