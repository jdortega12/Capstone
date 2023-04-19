const mongoose = require("mongoose");

const RetirementSchema = new mongoose.Schema({
    // username of student retirement plan belongs to
    username: {
        type: String,
        required: true,
      },

    age: {
        type: Number,
    },

    pre_tax_income: {
        type: Number,
    },

    current_savings: {
        type: Number,
    },

    monthly_savings: {
        type: Number,
    }
});

const Retirement = mongoose.model("Retirement", RetirementSchema);
module.exports = Retirement;