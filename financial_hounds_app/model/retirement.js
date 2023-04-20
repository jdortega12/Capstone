const mongoose = require("mongoose");

const RetirementSchema = new mongoose.Schema({
    // username of student retirement plan belongs to
    username: {
        type: String,
        required: true,
      },

    retirement_goal: {
        type: Number,
    },

    retirement_saved: {
        type: Number,
    },
});

const Retirement = mongoose.model("Retirement", RetirementSchema);
module.exports = Retirement;