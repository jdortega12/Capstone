const mongoose = require("mongoose");

const EmergencySchema = new mongoose.Schema({
    // username of student emergency fund belongs to
    username: {
        type: String,
        required: true,
      },

    //sum of total expenses student should plan for
    total_expenses: {
        type: Number,
    },

    //six month amount a student should try to save for emergencies
    six_month_amount: {
        type: Number,
    }
});

const Emergency = mongoose.model("Emergency", EmergencySchema);
module.exports = Emergency;